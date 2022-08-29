import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function EditChart() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [stock, setStock] = useState({
    chart_name:'',
    equity_name:'',
    metrics:'',
    users:''
  });

  const updateStock = (updated_Stock) => {
    axios
      .put(`${API}/stocks/${id}`, updated_Stock)
      .then(
        () => {
          navigate(`/stocks/${id}`);
        },
        (error) => console.error(error),
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setStock({ ...stock, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/stocks/${id}`)
      .then((res) => {
        setStock(res.data.payload);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateStock(stock, id);
  };

  return (
    <div className='edit'>
      <h1 className='title'>Edit Stock Entry</h1>
      {/* <div className='edit-p'>
       
        <ul>
          <li>Protein is above 5</li>
          <li>Fiber is above 5</li>
          <li>And sugar is less than 5</li>
        </ul>
      </div> */}
      
      <form className='form' onSubmit={handleSubmit}>
      <div className='color2'>
        <label className='edit-label' htmlFor='chart_name'>
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
        <label className='edit-label' htmlFor='equtiy_name'>
          Equity Name
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
        <label className='edit-label' htmlFor='metrics'>
          Metrics
        </label>
        <input
          className='text'
          id='metrics'
          value={stock.metrics}
          type='text'
          onChange={handleTextChange}
          placeholder='price'
          required
        />
        {/* <label className='edit-label' htmlFor='added_sugar'>
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
        <label className='edit-label' htmlFor='image'>
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
        <input type='submit' />
       
        </div>
        <Link to={`/stocks/${id}`}>
          <button className='edit-button'>Back</button>
        </Link>
        
      </form>
      
    </div>
  );
}
