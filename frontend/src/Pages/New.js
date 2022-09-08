import NewChart from '../Components/new/NewChart';
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
     
      <NewChart />
    </motion.div>
  );
};
export default New;
