import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Chart from './Chart';
import axios from 'axios';
import '../../styles/equity.css';

const API = process.env.REACT_APP_API_URL;

const EquityNames = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get(`${API}/equities/names`).then((res) => {
      setNames(res.data.payload);

    });
  }, []);
  console.log(names)
  return (
    <div className='equitys'>
      <h1 className='title-equity'>Equity Names</h1>
      <div className='equity-name'>
        <ul className='lists'>
        {names[0]?.map((name,index) => (
          <li key={name.equity}>{name.equity.split(' ').join('')}</li>
        ))}
        </ul>
      </div>
      <br />
      <button className='back-button'>
        <Link to={'/'}>Back</Link>
      </button>
    </div>
  );
};

export default EquityNames;
