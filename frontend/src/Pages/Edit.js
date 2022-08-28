import EditStock from '../Components/edit/EditStock';
import { motion } from 'framer-motion';
// import '../styles/edit.css';

const Edit = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: 'center',
        // backgroundColor: '#f7f0f0',
        height: '100vh',
      }}
    >
      <h2>Edit</h2>
      <EditStock />
    </motion.div>
  );
};

export default Edit;