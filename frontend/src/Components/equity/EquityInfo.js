import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Chart from './Chart';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const API = process.env.REACT_APP_API_URL;

const EquityInfo = () => {
  const [equityDetails, setEquityDetails] = useState([]);

  useEffect(() => {
    axios.get(`${API}/equities`).then((res) => {
      console.log(res.data.payload);
      setEquityDetails(res.data.payload);
     
    });
  }, []);

  return (
    <div className='charts'>
      <h1 className='title-charts'>Equity Details</h1>
      <Table
        className='table-container'
        stripped='true'
        bordered
        hover
        responsive='sm'
      >
        <thead>
          <tr className='green'>
            <th>Equity Name</th>
            <th>Date</th>
            <th>Price</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Volume</th>
           
          </tr>
        </thead>
        <tbody>
          {}
          {equityDetails.map((details) => {
            return (
              <tr className='details' key={details.index+details.equity}>
                {/* \ */}
                <td>{details.equity.split(' ').join('')}</td>
                <td>{details.date}</td>
                <td>{details["Price"]}</td>
                <td>{details["Open"]}</td>
                <td>{details["High"]}</td>
                <td>{details["Low"]}</td>
                <td>{details["Volume"]}</td>
                <td>{details["Change"]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* <section className='all-charts'>
        {charts?.map((chart) => {
          console.log('id=' ,chart.id)
           return <Chart key={chart.id} chart={chart} />;
        })}
      </section> */}
      <br />
      <button className='back-button'>
        <Link to={'/'}>Back</Link>
      </button>
    </div>
  );
};

export default EquityInfo;
