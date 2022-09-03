import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import '../../styles/paginate.css';
// import Paginations from './Paginations';

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
  const [equities, setEquities] = useState(equityDetails.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const equitiesPerPage = 10;
  const pagesVisited = pageNumber * equitiesPerPage;

  const displayEquities = equities
    .slice(pagesVisited, pagesVisited + equitiesPerPage)
    .map((equity) => {
      return (
        <div className='equity-info'>
          <h1 className='title-info'>Equity Details</h1>
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
              </tr>
            </thead>
            <tbody>
              {equities.map((details) => {
                return (
                  <tr className='details' key={details.index + details.equity}>
                    {/* \ */}
                    <td>{details.equity.split(' ').join('')}</td>
                    <td>{details.date}</td>
                    <td>{details['Price']}</td>
                    <td>{details['Open']}</td>
                    <td>{details['High']}</td>
                    <td>{details['Low']}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      );
    });

  const pageCount = Math.ceil(equities.length / equitiesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='pages'>
      {displayEquities}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  );
};

export default EquityInfo;
