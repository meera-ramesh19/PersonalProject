import StockDetails from '../Components/show/StockDetails';
import { motion } from 'framer-motion';
// import '../styles/show.css';

export default function Show() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{  height: '100vh' }}
    >
      <h2 style={{ textAlign: 'center' }}>New Transaction</h2>
      <StockDetails />
    </motion.div>
  );
}
