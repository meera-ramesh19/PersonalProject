import { useState, useEffect, useRef } from 'react';
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import axios from 'axios';
import ZoomableLineChart from './ZoomableLineChart';
import BarChart from './BarChart';
import '../../styles/show.css';
const API = process.env.REACT_APP_API_URL;

const ChartData = () => {
  // console.log(props);
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const [chartInfo, setChartInfo] = useState([]);
  let { id } = useParams();

  const metric = searchParams.getAll('metrics');
  const equityName = searchParams.getAll('equity_name');
  const chartName = searchParams.getAll('chart_name');

  const eq_url = `${API}/charts/data?equity_name=${equityName}&chart_name=${chartName}&metrics=${metric}`;
  console.log('eq_url');
  console.log(eq_url);

  const [metricInfo, setMetricInfo] = useState([]);
  const [priceInfo, setPriceInfo] = useState([]);
  const [openInfo, setOpenInfo] = useState([]);
  const [highInfo, setHighInfo] = useState([]);
  const [lowInfo, setLowInfo] = useState([]);
  const [chartNameInfo, setNameInfo] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const [dateInfo, setDateInfo] = useState([]);

  useEffect(() => {
    axios
      .get(eq_url)
      .then((res) => {
       
        setPriceInfo(res.data.payload.price);
        setChartInfo(res.data.payload);
        setMetricInfo(res.data.payload.metric);
        setOpenInfo(res.data.payload.open);
        setHighInfo(res.data.payload.high);
        setLowInfo(res.data.payload.low);
        setNameInfo(res.data.payload.chart_name);
        setDefaultData(res.data.payload.base_metric);
        setDateInfo(res.data.payload.dates);
        // console.log(
        //   'inCahrtData',
        //   metricInfo,
        //   priceInfo,
        //   openInfo,
        //   highInfo,
        //   lowInfo,
        //   chartNameInfo,
        //   dateInfo,
        //   defaultData
        // );
      })
      .catch(() => {
        console.log('error');
        // navigate('/charts');
      });
  }, []);

  const toggleValues = (metric) => {
    console.log('in toggle', metric);
    if (metric === 'high') {
      setMetricInfo('low');
      setDefaultData(lowInfo);
    } else if (metric === 'low') {
      console.log('Hit low');
      setMetricInfo('price');
      setDefaultData(priceInfo);
    } else if (metric === 'price') {
      console.log('Hit price');
      setMetricInfo('open');
      setDefaultData(openInfo);
    } else if (metric === 'open') {
      console.log('Hit open');
      setMetricInfo('high');
      setDefaultData(highInfo);
    } else {
      console.log('hit nothing');
    }
  };

  return (
    <div className='show'>
      <h1 className='show-title'>
        {/* <span>Chart Name:</span> */}
        {chartInfo.chart_name}
      </h1>

      <div className='show-info'>
        <h2 className='show_p'>
          {/* <span> Metric: </span> {chartInfo.metric} */}
          <span> Metric: </span> {metricInfo}
        </h2>

        <h2 className='show_p'>
          <span> Equity Name: </span> {chartInfo.equity_name}
        </h2>

        <ZoomableLineChart
          metric={metricInfo}
          price={priceInfo}
          open={openInfo}
          high={highInfo}
          low={lowInfo}
          name={chartNameInfo}
          base_metric={defaultData}
          date={dateInfo}
        />
      </div>

      <button className='toggle' onClick={() => toggleValues(metricInfo)}>
        Toggle Metrics
      </button>

      <div className='bars'>
        <BarChart
          data={defaultData}
          metric={metricInfo}
          price={priceInfo}
          open={openInfo}
          high={highInfo}
          low={lowInfo}
        />
      </div>

      <div className='showNavigation'>
        <Link to={`/charts`} style={{ margin: '0 auto' }}>
          <button className='show_button'>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ChartData;
