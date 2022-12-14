import Charts from '../Components/index/Charts';
import { motion } from 'framer-motion';

const Index = () => {
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
      <Charts />
    </motion.div>
  );
};

export default Index;
