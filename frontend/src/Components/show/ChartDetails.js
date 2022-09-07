import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/show.css'

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
    <h1 style={{ textAlign: 'center',color:'black',padding:'1rem 0',fontSize:'2rem' }}>Show Charts</h1>
      

      <div className='show-info'>
      <h2 className='show-title'>
         <span>Chart Name: </span>{chart.chart_name}
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
      <div>
      
      </div>
      <div className='showNavigation'>
        <div>
          <Link to={`/charts`}>
            <button className='show-button'>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/charts/${chart.id}/edit`}>
            <button className='show-button'>Edit</button>
          </Link>
        </div>
        <div>
          <button className='show-button' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>

    
  );
};

export default ChartDetails;
