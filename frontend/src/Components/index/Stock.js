
import { Link } from "react-router-dom";


const Stock=({ stock }) =>{
  return (
    <div className='stock-card'>
      
      <Link to={`/stocks/`+stock.id} key={stock.id}>
        <img className='stock-pic'
          style={{ width: '275px', height: '255px' }}
          src={stock.image}
          alt=''
        />
         <p className='stock-name'>{stock.name}</p>
      </Link>
     
    </div>
  );
}

export default  Stock;