import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function New_Stock() {
  const navigate = useNavigate();
  const [stock, setStock] = useState({
    chart_name:'',
    equity_name:'',
    metrics:'',
    users:''
  });

  const [options,setOptions] = useState([])
  useEffect(()=>{
    axios.get(`${API}/equities`).then((res) => {
      setOptions(res.data.payload);
      console.log(options);
    });
  }, [options]);
  
  const [selected, setSelected] = useState(options[0]);

  const handleTextChange = (event) => {
    
    setStock({ ...stock, [event.target.id]: event.target.value });
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
      </div>
      <form onSubmit={handleSubmit}>
        <div className='color1'>


        <label className='new-label1' htmlFor='equity_name'>
            Equity_name
          </label>
          {/* <input
            className='text'
            id='equity_name'
            type='text'
            name='equity_name'
            value={stock.equity_name}
            placeholder='apple'
            onChange={handleTextChange}
          /> */} 
          <select
           value={selected}
          onChange={(e) => setSelected(e.target.value)}
          id="equity_name"
          name="equity_name"
          >
         {options.map((option) => (
          <option id='equity_name' value={option.equity}>
          {option.equity}
        </option>
      ))}
    </select>
          
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
           <label className='new-label1' htmlFor='users'>
          Users
          </label>
          <input
            className='text'
            id='users'
            value={stock.users}
            type='text'
            placeholder='user name'
            onChange={handleTextChange}
            required
          />
         
         
          <br />
          <input className='button' type='submit' />
        </div>
      </form>
    </div>
  );
}
