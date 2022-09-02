import { useState, useEffect, useRef } from 'react';
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import axios from 'axios';
import ZoomableLineChart from './ZoomableLineChart';
// import LineChart from './LineChart.js';
import '../../styles/show.css'
const API = process.env.REACT_APP_API_URL;

const ChartData = () => {
  // console.log(props);
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const [chartInfo, setChartInfo] = useState([]);
  let { id } = useParams();
  // axios.get(
  //   `${API}/charts/data?metrics=${metric}&equity=${equityName}
  //   &name=${chartName}`
  // )
  // axios.post( '/charts/data',{
  //     metrics: metric,
  //     equity : equityName,
  //     chart_name : chartName
  // })
  // ?metrics=${chartInfo.metrics}&equity=${chartInfo.equity}&name={chartInfo.chart_name}
  // console.log(searchParams, Object.fromEntries([...searchParams]));

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
        // console.log('data=', res.data.payload);

        setPriceInfo(res.data.payload.price);
        setChartInfo(res.data.payload);
        setMetricInfo(res.data.payload.metric);
        setOpenInfo(res.data.payload.open);
        setHighInfo(res.data.payload.high);
        setLowInfo(res.data.payload.low);
        setNameInfo(res.data.payload.chart_name);
        setDefaultData(res.data.payload.base_metric);
        setDateInfo(res.data.payload.dates);
        console.log(
          metricInfo,
          priceInfo,
          openInfo,
          highInfo,
          lowInfo,
          chartNameInfo,
          dateInfo
        );
      })
      .catch(() => {
        console.log('error');
        // navigate('/charts');
      });
  }, []);

  // const metricArr = chartInfo.metric_vals?.map((ele) => {
  //   console.log('ele', ele);
  //   return Math.trunc(ele);
  // });
  // console.log('values', metricArr);

  return (
    <div className='show'>
      <h1 className='show-title'>
        <span>Chart Name:</span>
        {chartInfo.chart_name}
      </h1>

      <div className='show-info'>
        <h2 className='show_p'>
          <span> Metric: </span> {chartInfo.metric}
        </h2>

        <h2 className='show_p'>
          <span> Equity Name: </span> {chartInfo.equity_name}
        </h2>

        <h2 className='show_p'>
          <span>Metric Values: </span> {chartInfo.metric_vals}
        </h2>
        <h2 className='show_p'>
          <span>Date: </span> {chartInfo.date}
        </h2>
        {/* <LineChart
          metric={metricInfo}
          price={priceInfo}
          open={openInfo}
          high={highInfo}
          low={lowInfo}
          name={chartNameInfo}
          base_metric={defaultData}
        /> */}
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

      {/* <LineChart metric={metricInfo} price={priceInfo} open={openInfo} high={highInfo} low={lowInfo} name={chartNameInfo} /> */}

      {/* <LineChart
        metric={chartInfo.metric}
        name={chartInfo.equity_name}
        vals={chartInfo.metric_vals}
        date={chartInfo.date}
      /> */}
      {/* <LineChart metricArr={metricArr} /> */}
      {/* /* <LineChart info={chartInfo}  */}

     
      {/* <div className='showNavigation'>
        <div>
          <Link to={`/charts`}>
            <button className='show_button'>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/charts/${chart.id}/edit`}>
            <button className='show_button'>Edit</button>
          </Link>
        </div>
        <div>
          <button className='show_button' onClick={handleDelete}>
            Delete
          </button>
        </div> 
      </div>*/}
    </div>
  );
};

export default ChartData;
