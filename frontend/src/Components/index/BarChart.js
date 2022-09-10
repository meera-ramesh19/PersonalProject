// code basic d3.js from TheMuratiorium https://www.youtube.com/watch?v=LQHt0wr3ybw

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

/*
This function takes in an array of numbers and returns the difference between each number and the previous number.
For element 0, we take the difference as 0. This is used for the change barchart
*/
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
  // const priceDiff = getDifferences(props.price);
  // const highDiff = getDifferences(props.high);
  // const lowDiff = getDifferences(props.low);
  // const openDiff = getDifferences(props.open);

  console.log('defaultDiff', defaultDiff);

  const data = defaultDiff;
  const minData = min(data);
  const maxData = max(data);
  // const yDomainMin = minData;
  // const yDomainMax = maxData;

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    console.log('dimensions', dimensions);

    if (!dimensions) return;

    // scales

    /*
    Here we are creating a different scale, a band scale 

    The domain represents the set of values that we are plotting on the x-axis. Since we are only plotting the 
    number of days of data we have, this is just 0-->len(array), which is what the domain.map function is doing

    The range represents where [0] and [data.length] line up on the x-axis. For 0, we set the x-axis to be at 370 pixels to the right of the left side of the svg. For the end of the x-axis (data.length), we set the x-axis to be at dimensions.width/1.1166  pixels to the left of the right side of the svg. I set it as divided by 1.166 because dimensions.width was a bit too wide and didn't connect well with the y axis, but it wasn't by a large enough amount that subtracting a number from the dimensions.width would make it look good. So, I divided by a number very close to 1, but slightly bigger than 1, to push the end of the x axis slightly to the left of the y-axis.
    */
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([370, dimensions.width / 1.166]) // change
      .padding(0.5);

      /*
    In order to generate our y axis, we need to create a scale that will map our data to the y axis in a 
    ordered and uniform manner (ie; the data is separated by a constant interval). To do this 
    we create a Linear scale.

    The Linear scale is a function that takes in a domain and a range. 

    The domain represents all the values that we want to represent on the y axis (ie: the lowest value on the axis and the greatest value on the axis). We want to make sure we 
    display the min and the max values on the y axis, so that none of our data points will be cut off from the screen. Thus, we declare the domain (all the values that we will display on the graph) to be min - 1 and max + 1. We add or subtract the 1 to add more spacing to the y axis, so that the max and min points will be visible as circles on the graph and are not cut off the screen.

    The range represents the y coordinate on the component which the value will map to. In this case the lowest value (min_data) will physically map to the top edge of the component + dimensions.height  pixels below on the screen( so essentially, at dimensions.height) The highest value (max_data) will physically map to the top edge of the component + 0 pixels down on the screen (so top of the component) This will position our graph in a way that max_data is at the top right edge of the component and min_data is at the bottom_right edge of the component. This will also make sure our y axis is scaled correctly.

    */
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
        // Here I transformed the xAxis to be at the bottom of the svg, so that it is at the bottom of the screen.
    
        .style('transform', `translateY(${dimensions.height}px)`)
      //  .style('transform', `translateY(0 px)`)
      .call(xAxis);

    // create y-axis
    const yAxis = axisRight(yScale);
    svg
      .select('.y-axis')
        //.style('transform', `translateX(${dimensions.width}px)`)
      // Here I transformed the yaxis to be at the right of the svg, but at a position that is 135 pixels to the left of dimensions.width
    
      //.style('transform', `translateX(${dimensions.width}px)`)
      .style('transform', `translateX(${dimensions.width-162 }px)`)
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
          .join((enter) => enter.append('text').attr('y', yScale(value)-4 ))
          .attr('class', 'tooltip')
          .text(value)
          .attr('x', xScale(index))
          .attr('text-anchor', 'middle')
          .transition()
          .attr('y', yScale(value) - 8 )
          .attr('opacity', 1);
      })
      .on('mouseleave', () => svg.select('.tooltip').remove())
      .transition()
      .attr('fill', colorScale)
      .attr('height', (value) => dimensions.height - yScale(value));
  }, [data, dimensions]);

  return (
    <div ref={wrapperRef} style={{ marginBottom: '2rem' }}>
      <svg ref={svgRef} className='barChartValues' >
        <g className='x-axis' />
        <g className='y-axis' />
      </svg>
    </div>
  );
}

export default BarChart;
