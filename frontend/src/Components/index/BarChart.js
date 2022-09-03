import React, { useRef, useEffect, useState } from 'react';
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from 'd3';
import ResizeObserver from 'resize-observer-polyfill';
import { max, min } from 'd3';
import './BarChart.css';

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
};

function getDifferences(arr) {
  let arr_copy = [];
  arr_copy.push(0);
  for (let i = 1; i < arr.length; i++) {
    let diff = (arr[i] - arr[i - 1]) / arr[i - 1];
    let round = Math.ceil(diff * 1000) / 1000;
    arr_copy.push(round);
  }
  return arr_copy;
}

function BarChart(props) {
  console.log('data-barchart', props);

  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  const defaultDiff = getDifferences(props.data);
  const priceDiff = getDifferences(props.price);
  const highDiff = getDifferences(props.high);
  const lowDiff = getDifferences(props.low);
  const openDiff = getDifferences(props.open);

  console.log('defaultDiff', defaultDiff);

  const data = defaultDiff;
  const minData = min(data);
  const maxData = max(data);
  const yDomainMin = minData;
  const yDomainMax = maxData;

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    console.log('dimensions', dimensions);

    if (!dimensions) return;

    // scales
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([370, dimensions.width / 1.166]) // change
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([minData, maxData]) // todo
      .range([dimensions.height, 0]); // change

    const colorScale = scaleLinear()
      .domain([150, 155, 160])
      .range(['green', 'orange', 'red'])
      .clamp(true);

    // create x-axis
    const xAxis = axisBottom(xScale).ticks(data.length);
    svg
      .select('.x-axis')
      .style('transform', `translateY(${dimensions.height}px)`)
      //.style('transform', `translateY(0 px)`)
      .call(xAxis);

    // create y-axis
    const yAxis = axisRight(yScale);
    svg
      .select('.y-axis')
      //.style('transform', `translateX(${dimensions.width}px)`)
      .style('transform', `translateX(${dimensions.width - 135}px)`)
      .call(yAxis);

    // draw the bars
    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .style('transform', 'scale(1, -1)')
      .attr('x', (value, index) => xScale(index))
      .attr('y', -dimensions.height)
      .attr('width', xScale.bandwidth() / 1.25)
      .on('mouseenter', function (event, value) {
        // events have changed in d3 v6:
        // https://observablehq.com/@d3/d3v6-migration-guide#events
        const index = svg.selectAll('.bar').nodes().indexOf(this);
        svg
          .selectAll('.tooltip')
          .data([value])
          .join((enter) => enter.append('text').attr('y', yScale(value) - 4))
          .attr('class', 'tooltip')
          .text(value)
          .attr('x', xScale(index))
          .attr('text-anchor', 'middle')
          .transition()
          .attr('y', yScale(value) - 8)
          .attr('opacity', 1);
      })
      .on('mouseleave', () => svg.select('.tooltip').remove())
      .transition()
      .attr('fill', colorScale)
      .attr('height', (value) => dimensions.height - yScale(value));
  }, [data, dimensions]);

  return (
    <div ref={wrapperRef} style={{ marginBottom: '2rem' }}>
      <svg ref={svgRef}>
        <g className='x-axis' />
        <g className='y-axis' />
      </svg>
    </div>
  );
}

export default BarChart;
