import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Stock from './Stock';
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;

 const Stocks=() =>{
  const [stocks, setStocks] = useState([]);
 
  useEffect(() => {
    
    axios.get(`${API}/stocks`).then((res) => {
      setStocks(res.data.payload);
      console.log(stocks);
    });
  }, [stocks]);

  return (
    <div className='stocks'>
      <h1 className='title-stocks'>Stocks</h1>
      <section className='all-stocks'>
        {stocks?.map((stock) => {
          return <Stock key={stock.id} stock={stock} />;
        })}
      </section>
      <br />
      <button className='back-button'>
        <Link to={'/'}>Back</Link>
      </button>
    </div>
  );
}

export default Stocks;