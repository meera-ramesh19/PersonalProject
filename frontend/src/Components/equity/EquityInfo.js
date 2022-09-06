import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
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
  const currentRecords = equityDetails.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(equityDetails.length / equitiesPerPage)

  // const displayEquities = equities
  //   .slice(pagesVisited, pagesVisited + equitiesPerPage)
  //   .map((equity) => {
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
    // });

  // return (
    // <main role='main' className='container'>
    //   <h1>Equity Info</h1>
    //   <div className='current-page'>
    //     <div className='user'>
    //       <div className='user__body'>
    //         <table id='table1'>
    //           <thead>
    //             <tr>
    //               <th style={{ backgroundColor: 'green' }}>Equity Name</th>
    //               <th style={{ backgroundColor: 'green' }}>Date</th>
    //               <th style={{ backgroundColor: 'green' }}>Price</th>
    //               <th style={{ backgroundColor: 'green' }}>Open</th>
    //               <th style={{ backgroundColor: 'green' }}>High</th>
    //               <th style={{ backgroundColor: 'green' }}>Low</th>
    //             </tr>
    //           </thead>
    //           {currentData.map((details, index) => {
    //             return (
    //               <tbody key={details.index}>
    //                 <tr>
    //                   <td>{details.equity.split(' ').join('')}</td>
    //                   <td>{details.date}</td>
    //                   <td>{details.price}</td>
    //                   <td>{details.open}</td>
    //                   <td>{details.high}</td>
    //                   <td>{details.low}</td>
    //                 </tr>
    //               </tbody>
    //             );
    //           })}
    //         </table>
    //       </div>
    //       {/* <div className='pagination-wrapper'>
    //         <Paginations
    //           totalRecords={NUM_OF_RECORDS}
    //           pageLimit={LIMIT}
    //           pageNeighbours={2}
    //           onPageChanged={onPageChanged}
    //           currentPage={currentPage}
    //         />
    //       </div> */}
    //     </div>
    //   </div>
    // </main>
  // );
};

export default EquityInfo;
