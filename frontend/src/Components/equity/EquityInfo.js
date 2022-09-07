import { useState, useEffect } from 'react';

import axios from 'axios';
import Table from 'react-bootstrap/Table';
import '../../styles/page.css';
import Pagination from './Paginate';

const API = process.env.REACT_APP_API_URL;

const EquityInfo = () => {
  const [equityDetails, setEquityDetails] = useState([]);

  useEffect(() => {
    axios.get(`${API}/equities`).then((res) => {
      console.log(res.data.payload);
      setEquityDetails(res.data.payload);
    });
  }, []);

  console.log(equityDetails);

  const [currentPage, setCurrentPage] = useState(1);

  const [equitiesPerPage] = useState(10);

  const indexOfLastRecord = currentPage * equitiesPerPage;
  const indexOfFirstRecord = indexOfLastRecord - equitiesPerPage;
  const currentRecords = equityDetails.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(equityDetails.length / equitiesPerPage);

  return (
    <div className='equity-info'>
      <h1 className='title-info'>Equity Details</h1>
      <Table
        className='tableinfo-container'
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
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((details) => {
            return (
              <tr className='details' key={details.index + details.equity}>
                {/* \ */}
                <td>{details.equity.split(' ').join('')}</td>
                <td>{details.date}</td>
                <td>{details.price}</td>
                <td>{details.open}</td>
                <td>{details.high}</td>
                <td>{details.low}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default EquityInfo;
