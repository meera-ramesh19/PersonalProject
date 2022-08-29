import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import HeartHealth from '../HeartHealth';

const API = process.env.REACT_APP_API_URL;

const StockDetails=() =>{
  const [stock, setStocks] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/stocks/${id}`)
      .then((res) => {
        setStocks(res.data.payload);
      })

      .catch(() => {
        navigate('/not found');
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/stocks/${id}`)
      .then(() => {
        navigate('/stocks');
      })
      .catch(() => {
        console.warn('error');
      });
  };
  return (
    <div className='show'>
      <h1 className='show-title'>{stock.chart_name}</h1>
      
        
        <div className='show-info'>
        <h2 className='show_p'>
        <span>Metrics: </span> {stock.id}
      </h2>
      {/* <h2 className='show_p'>
        <span> Chart Name: </span> {stock.chart_name}
      </h2> */}
      <h2 className='show_p'>
        <span> Equity Name: </span> {stock.equity_name}
      </h2>
      <h2 className='show_p'>
        <span>Metrics: </span> {stock.metrics}
      </h2>
      <h2 className='show_p'>
        <span>Users: </span> {stock.users}
      </h2>
  
      </div>
      <div className='showNavigation'>
        <div>
          <Link to={`/stocks`}>
            <button className='show_button'>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/stocks/${stock.id}/edit`}>
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
}

export default StockDetails;