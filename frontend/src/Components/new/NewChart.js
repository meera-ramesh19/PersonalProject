import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const API = process.env.REACT_APP_API_URL;

const NewChart = () => {
  const navigate = useNavigate();
  const [chart, setChart] = useState({
    chart_name: '',
    equity_name: '',
    metrics: '',
    users: '',
  });

  const metricValue = [
    { label: 'High', value: 'High' },
    { label: 'Low', value: 'Low' },
    { label: 'Open', value: 'Open' },
    { label: 'Price', value: 'Price' },
  ];

  const [equities, setEquities] = useState([]);
  const [metrics, setMetrics] = useState('⬇️ Select a metric ⬇️');

  useEffect(() => {
    axios.get(`${API}/equities/names`).then((res) => {
      console.log('payload name', res.data.payload);
      setEquities(res.data.payload);
    });
  }, []);

  // const [options, setOptions] = useState(equities);

  // const [selected, setSelected] = useState([]);

  const handleTextChange = (event) => {
    console.log(event.target.id, event.target.value);
    setChart({ ...chart, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/charts/new`, chart)
      .then((res) => {
        navigate('/charts');
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className='new'>
      <h1 className='title'>New</h1>
      {/* <div className='new-list'></div> */}
      <form onSubmit={handleSubmit}>
        <div className='center'>
          <div>
          <label className='new-label1' htmlFor='equity_name'>
            Equity_name:  
          </label>
          <div>
      
          <select
            className='text'
            onChange={handleTextChange}
            id='equity_name'
            name='equity_name'
          >
            <option className='text' value='⬇️ Select an option ⬇️'>
              {' '}
              -- Select an option --{' '}
            </option>

            {equities[0]?.map((ele, index) => {
              return (
                <option
                  className='text'
                  key={index}
                  value={ele.equity.split(' ').join('')}
                >
                  {ele.equity.split(' ').join('')}
                </option>
              );
            })}
          </select>
          </div>
          </div>
          <div>
          <label className='new-label1' htmlFor='chart_name'>
            Chart Name: 
          </label>
          <div>
          <input
            className='text'
            id='chart_name'
            type='text'
            placeholder='Name Of chart'
            required
            value={chart.chart_name}
            onChange={handleTextChange}
          />
          </div>
          </div>  
          <div> 
          <label className='new-label1' htmlFor='metrics'>
            Metrics: 
          </label>
          <div>
      
          <select
            className='text'
            onChange={handleTextChange}
            id='metrics'
            name='metrics'
          >
            <option value='⬇️ Select an option ⬇️'>
              {' '}
              -- Select an option --{' '}
            </option>
            {metricValue.map((metric, index) => (
              <option key={index} value={metric.value.toLowerCase()}>
                {metric.label.toLowerCase()}
              </option>
            ))}
          </select>
          </div>
          </div> 
          <div>
          <label className='new-label1' htmlFor='users'>
            Users: 
          </label>
          <div>
          <input
            className='text'
            id='users'
            value={chart.users}
            type='text'
            placeholder='user name'
            onChange={handleTextChange}
            required
          />
           </div>
          </div>
          <br />
          <input className='button' type='submit' />
        </div>
      </form>
    </div>
  );
};

export default NewChart;
