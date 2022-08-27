import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function New_Stock() {
  const navigate = useNavigate();
  const [stock, setstock] = useState({
    chart_name:'',
    equity_name:'',
    metrics:''
  });

  const handleTextChange = (event) => {
    setstock({ ...stock, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/stocks/new`, stock)
      .then((res) => {
        navigate('/stocks');
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className='new'>
      {/* <h1 className='title'>New Entry</h1> */}
      <div className='new-list'>
        {/* <p>Snack Health is determined by</p>
        <ul>
          <li>Protein is above 5</li>
          <li>Fiber is above 5</li>
          <li>And sugar is less than 5</li>
        </ul> */}
      </div>
      <form onSubmit={handleSubmit}>
        <div className='color1'>
          
          <label className='new-label1' htmlFor='chart_name'>
           Chart Name
          </label>
          <input
            className='text'
            id='chart_name'
            type='text'
            placeholder='Name Of chart'
            required
            value={stock.chart_name}
            onChange={handleTextChange}
          />
          <label className='new-label1' htmlFor='equity_name'>
            equtiy_name
          </label>
          <input
            className='text'
            id='equity_name'
            type='text'
            name='equity_name'
            value={stock.equity_name}
            placeholder='apple'
            onChange={handleTextChange}
          />
          <label className='new-label1' htmlFor='metrics'>
            Metrics
          </label>
          <input
            className='text'
            id='metrics'
            value={stock.metrics}
            type='text'
            placeholder='price'
            onChange={handleTextChange}
            required
          />
          {/* <label className='new-label1' htmlFor='added_sugar'>
            Added Sugar
          </label>
          <input
            className='text'
            id='added_sugar'
            type='number'
            name='added_sugar'
            value={snack.added_sugar}
            onChange={handleTextChange}
            placeholder='0'
          />
          <label className='new-label1' htmlFor='image'>
            Image Url
          </label>
          <input
            className='text'
            id='image'
            type='text'
            placeholder='https://www.image.com'
            required
            value={snack.image}
            onChange={handleTextChange}
          /> */}
          <br />
          <input className='button' type='submit' />
        </div>
      </form>
    </div>
  );
}
