import { Link } from 'react-router-dom';

const Chart = ({ chart }) => {
  return (
    <div className='chart-card'>
      <Link to={`/charts/` + chart.id} key={chart.id}>
        <p className='chart-name'>{chart.id}</p>
        <p className='chart-name'>{chart.chart_name}</p>
        <p className='chart-name'>{chart.equity_name}</p>
        <p className='chart-name'>{chart.metrics}</p>
        <p className='chart-name'>{chart.users}</p>
      </Link>
    </div>
  );
};

export default Chart;
