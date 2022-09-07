import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import '../../styles/index.css';

const API = process.env.REACT_APP_API_URL;

const Charts = () => {
  const [charts, setCharts] = useState([]);
  // const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios.get(`${API}/charts`).then((res) => {
      setCharts(res.data.payload);
      console.log(charts);
    });
  }, []);

  return (
    <div className='charts'>
      <h1 className='title-charts'>Chart</h1>
      <Table
        className='indextable-container table table-responsive'
        stripped='true'
        bordered
        hover
        responsive='md'
      >
        <thead>
          <tr className='green'>
            <th scope='col'>ID</th>
            <th scope='col'> Equity Name</th>
            <th scope='col'>Chart Name</th>
            <th scope='col'>Metrics</th>
            <th scope='col'>Users</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {charts?.map((chart) => {
            return (
              <tr className='' key={chart.id}>
                <td>
                  <Link
                    style={{ color: 'black', textDecoration: 'none' }}
                    to={`/charts/${chart.id}`}
                  >
                    {chart.id}
                  </Link>
                </td>

                <td>
                  <Link
                    style={{ color: 'black', textDecoration: 'none' }}
                    to={`/charts/${chart.id}`}
                  >
                    {chart.equity_name}
                  </Link>
                </td>
                <td>
                  <Link
                    style={{ color: 'black', textDecoration: 'none' }}
                    to={`/charts/${chart.id}`}
                  >
                    {chart.chart_name}
                  </Link>
                </td>
                <td>
                  <Link
                    style={{ color: 'black', textDecoration: 'none' }}
                    to={`/charts/${chart.id}`}
                  >
                    {chart.metrics}
                  </Link>
                </td>
                <td>
                  <Link
                    style={{ color: 'black', textDecoration: 'none' }}
                    to={`/charts/${chart.id}`}
                  >
                    {chart.users}
                  </Link>
                </td>

                <td>
                  <Link
                    style={{ color: 'black' }}
                    // to={{pathName: `/charts/data`,
                    //     state:{chart}}}
                    // to={passParam}
                    to={{
                      pathname: `/charts/data`,
                      search: `?metrics=${chart.metrics}&equity_name=${chart.equity_name}&chart_name=${chart.chart_name}`,
                    }}
                  >
                    View Charts
                  </Link>
                </td>
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
      <button className='indexback-button'>
        <Link to={'/'}>Back</Link>
      </button>
    </div>
  );
};

export default Charts;
