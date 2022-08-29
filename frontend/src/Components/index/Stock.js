
import { Link } from "react-router-dom";


const Stock=({ stock }) =>{
  return (
    <div className='stock-card'>
      
      <Link to={`/stocks/`+stock.id} key={stock.id}>
        {/* <img className='stock-pic'
          style={{ width: '275px', height: '255px' }}
          src={stock.image}
          alt=''
        /> */}
        <p className='stock-name'>{stock.id}</p>
        <p className='stock-name'>{stock.chart_name}</p>
        <p className='stock-name'>{stock.equity_name}</p>
        <p className='stock-name'>{stock.metrics}</p>
        <p className='stock-name'>{stock.users}</p>

      </Link>
     
    </div>
  );
}

export default  Stock;