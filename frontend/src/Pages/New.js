import NewStock from '../Components/new/NewStock';
import { motion } from 'framer-motion';
import '../styles/new.css';

const New = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ height: '100vh' }}
    >
      <h2 style={{ textAlign: 'center' }}>New Stocks</h2>
      <NewStock />
    </motion.div>
  );
};
export default New;
