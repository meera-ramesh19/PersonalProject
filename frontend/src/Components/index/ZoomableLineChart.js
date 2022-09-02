import React, { useRef, useEffect, useState } from 'react';
import {
  select,
  scaleLinear,
  line,
  max,
  curveCardinal,
  axisBottom,
  axisLeft,
  zoom,
  min,
} from 'd3';
import useResizeObserver from './useResizeObserver';
import './ZoomableLineChart.css';
/**
 * Component that renders a ZoomableLineChart
 */

function ZoomableLineChart(props) {
  console.log('props', props);
  const name = props.name;
  const metric = props.metric;
  const price = props.price;
  const open = props.open;
  const high = props.high;
  const low = props.low;
  const data = props.base_metric;
  const date = props.date;

  const [height, setHeight] = useState([]);
  const [width, setWidth] = useState([]);
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [currentZoomState, setCurrentZoomState] = useState();
  console.log('minmax', min(data), max(data));

  const minData = min(data);
  const maxData = max(data);
  const yDomainMin = minData - 1;
  const yDomainMax = Math.round(maxData) + 1.0;
  console.log('datalength', data.length);
  console.log('domain', yDomainMin, yDomainMax);

  const box_height = 600;
  const box_width = 600;

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const svgContent = svg.select('.content');

    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    setHeight(height);
    setWidth(width);

    console.log('data', data);
    // scales + line generator
    const xScale = scaleLinear()
      .domain([2, data.length + 5])
      .range([50, box_width]);

    if (currentZoomState) {
      const newXScale = currentZoomState.rescaleX(xScale);
      xScale.domain(newXScale.domain());
    }

    const yScale = scaleLinear()
      .domain([yDomainMin, yDomainMax])
      .range([box_height - 5, 10]);

    const lineGenerator = line()
      .x((d, index) => xScale(index))
      .y((d) => yScale(d))
      .curve(curveCardinal);

    // render the line
    svgContent
      .selectAll('.myLine')
      .data([data])
      .join('path')
      .attr('class', 'myLine')
      .attr('stroke', 'black')
      .attr('fill', 'none')
      .attr('d', lineGenerator);

    svgContent
      .selectAll('.myDot')
      .data(data)
      .join('circle')
      .attr('class', 'myDot')
      .attr('stroke', 'black')
      .attr('r', 4)
      .attr('fill', 'orange')
      .attr('cx', (value, index) => xScale(index))
      .attr('cy', yScale);

    // axes
    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index - 2);
    const yAxis = axisLeft(yScale);

    svg.select('.x-axis').attr('transform', 'translate(-50, 600)').call(xAxis);

    svg.select('.y-axis').attr('transform', 'translate(-3, 0)').call(yAxis);

    // zoom
    const zoomBehavior = zoom()
      .scaleExtent([0.5, 5])
      .translateExtent([
        [0, 0],
        [width, height],
      ])
      .on('zoom', (event) => {
        const zoomState = event.transform;
        setCurrentZoomState(zoomState);
      });

    svg.call(zoomBehavior);
  }, [currentZoomState, data, dimensions]);

  return (
    <React.Fragment>
      <div ref={wrapperRef} style={{ marginBottom: '2rem' }}>
        <svg
          ref={svgRef}
          preserveAspectRatio='xMinYMin meet'
          viewBox={`0 0 550 600`}
        >
          <defs>
            <clipPath id={name}>
              <rect x='0' y='0' width='100%' height='100%' />
            </clipPath>
          </defs>
          <g className='content' clipPath={`url(#${name})`}></g>
          <g className='x-axis' />
          <g className='y-axis' />
        </svg>
      </div>
    </React.Fragment>
  );
}

export default ZoomableLineChart;
