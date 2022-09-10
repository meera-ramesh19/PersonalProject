import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Chart from './Chart';
import axios from 'axios';
import '../../styles/equity.css';
import Table from 'react-bootstrap/Table';

const API = process.env.REACT_APP_API_URL;

const EquityNames = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get(`${API}/equities/names`).then((res) => {
      setNames(res.data.payload);
    });
  }, []);
  console.log(names);
  return (
    <div className='equitys'>
      <h1 className='title-equity'>Equity Names</h1>
      <div className='equity-name'>
        <Table
          className='table-container table table-responsive'
          stripped='true'
          bordered
          hover
          responsive='sm'
        >
          <thead>
            <tr className='green'>
              <th>ID</th>
              <th>Equity Name</th>
            </tr>
          </thead>
          <tbody>
            {names[0]?.map((name, index) => {
              return (
                <tr style={{ margin: '0 auto' }} key={index + name.equity}>
                  {/* \ */}
                  <td>{index}</td>
                  <td>{name.equity}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <br />
      <button className='nameback-button'>
        <Link to={'/'}>Back</Link>
      </button>
    </div>
  );
};

export default EquityNames;
