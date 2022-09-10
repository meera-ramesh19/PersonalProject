import React, { useRef, useEffect, useState } from 'react';

import { select, line, curveCardinal } from 'd3';
import BarChart from './BarChart';
import ZoomableLineChart from './ZoomableLineChart';

const LineChart = (props) => {
  console.log('props', props);

  const name = props.name;
  const metric = props.metric;
  const price = props.price;
  const open = props.open;
  const high = props.high;
  const low = props.low;

  const [data, setData] = useState(props.base_metric);
  console.log('data=', data);
  const svgRef = useRef(null);

  //will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index * 14)
      .y((value) => 240 - value)
      .curve(curveCardinal);

    svg
      .selectAll('path')
      .data([data])
      .join('path')
      .attr('d', (value) => myLine(value))
      .attr('fill', 'none')
      .attr('stroke', 'blue');
  }, [data]);

  return (
    <div className='chart-card'>
      <svg style={{ margin: '1rem' }} ref={svgRef}></svg>

      <br />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter data
      </button>
    </div>
  );
};

export default LineChart;
