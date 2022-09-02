import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Chart from './Chart';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const EquityNames = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get(`${API}/equities/names`).then((res) => {
      setNames(res.data.payload);
    });
  }, []);

  return (
    <div className='equitys'>
      <h1 className='title-equity'>Equity Names</h1>

      {names[0]?.map((name) => (
        <p className='equity-name'>{name.equity.split(' ').join('')}</p>
      ))}

      <br />
      <button className='back-button'>
        <Link to={'/'}>Back</Link>
      </button>
    </div>
  );
};

export default EquityNames;