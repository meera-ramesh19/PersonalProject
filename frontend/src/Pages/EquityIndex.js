import EquityInfo from '../Components/equity/EquityInfo';
import { motion } from 'framer-motion';

const EquityIndex = () => {
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
      <EquityInfo />
    </motion.div>
  );
};

export default EquityIndex;
