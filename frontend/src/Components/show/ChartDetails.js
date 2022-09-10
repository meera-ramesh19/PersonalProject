import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/show.css';

const API = process.env.REACT_APP_API_URL;

const ChartDetails = () => {
  const [chart, setChart] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/charts/${id}`)
      .then((res) => {
        setChart(res.data.payload);
      })
      .catch(() => {
        navigate('/charts');
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/charts/${id}`)
      .then(() => {
        navigate('/charts');
      })
      .catch(() => {
        console.warn('error');
      });
  };
  return (
    <div className='shows'>
      <p style={{ textAlign: 'center', color: 'black' }}>Show Charts</p>

      <div className='show-info'>
        <h2 className='show_p'>
          <span>Chart Name: </span>
          {chart.chart_name}
        </h2>
        <h2 className='show_p'>
          <span>Chart Id: </span> {chart.id}
        </h2>

        <h2 className='show_p'>
          <span> Equity Name: </span> {chart.equity_name}
        </h2>
        <h2 className='show_p'>
          <span>Metrics: </span> {chart.metrics}
        </h2>
        <h2 className='show_p'>
          <span>Users: </span> {chart.users}
        </h2>
      </div>
      <div></div>
      <div className='showNavigation'>
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
      </div>
    </div>
  );
};

export default ChartDetails;
