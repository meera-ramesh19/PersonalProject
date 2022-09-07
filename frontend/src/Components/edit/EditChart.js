import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const EditChart = () => {
  const navigate = useNavigate();
  let { id } = useParams();
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

  const [equity, setEquity] = useState([]);


  useEffect(() => {
    axios.get(`${API}/equities/names`).then((res) => {
      setEquity(res.data.payload);
      console.log(equity);
    });
  }, []);

  const updateChart = (updated_Chart) => {
    console.log(updated_Chart);
    axios
      .put(`${API}/charts/${id}`, updated_Chart)
      .then(
        () => {
          navigate(`/charts/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    console.log(event.target.id, event.target.value);
    setChart({ ...chart, [event.target.id]: event.target.value });
    console.log(chart);
  };

  useEffect(() => {
    axios
      .get(`${API}/charts/${id}`)
      .then((res) => {
        setChart(res.data.payload);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(chart);
    updateChart(chart, id);
  };

  return (
    <div className='edit'>
      <h1 className='title'>Edit Charts</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='color2'>
          <div style={{ padding: '1rem 0' }}>
            <label
              style={{ color: 'black', paddingRight: '1rem' }}
              className='edit-label'
              htmlFor='equity_name'
            >
              Equity Name
            </label>

            <select
              style={{ color: 'black' }}
              onChange={handleTextChange}
              id='equity_name'
              name='equity_name'
              value={chart.equity_name}
            >
              <option value='⬇️ Select an option ⬇️'>
                {' '}
                -- Select an option --{' '}
              </option>

              {equity[0]?.map((ele, index) => {
                return (
                  <option key={index} value={ele.equity.split(' ').join('')}>
                    {ele.equity.split(' ').join('')}
                  </option>
                );
              })}
            </select>
          </div>
          <div style={{ padding: '1rem 0' }}>
            <label
              style={{ color: 'black', paddingRight: '1rem' }}
              className='edit-label'
              htmlFor='chart_name'
            >
              Chart Name
            </label>
            <input
              style={{ color: 'black' }}
              className='text'
              id='chart_name'
              value={chart.chart_name}
              type='text'
              onChange={handleTextChange}
              placeholder='Name Of chart'
              required
            />
          </div>
          <div style={{ padding: '1rem 0' }}>
            <label
              className='edit-label'
              style={{ color: 'black', paddingRight: '1rem' }}
              htmlFor='metrics'
            >
              Metrics:
            </label>

            <select
              style={{ color: 'black' }}
              onChange={handleTextChange}
              id='metrics'
              name='metrics'
              value={chart.metrics}
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

          <input className='' type='submit' />
        </div>

        <div style={{ padding: '1rem' }}>
          <Link to={`/charts/${id}`}>
            <button className='edit-button'>Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditChart;
