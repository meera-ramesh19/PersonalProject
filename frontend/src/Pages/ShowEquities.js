import EquityNames from '../Components/equity/EquityNames';
import { motion } from 'framer-motion';

const ShowEquity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: 'center',
        height: '100vh',
      }}
    >
      <EquityNames />
    </motion.div>
  );
};

export default ShowEquity;
