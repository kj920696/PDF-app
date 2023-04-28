import React from 'react';
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="F1" 
    style={{backgroundColor: '#f8f8f8', padding: '1rem'}}>
  <motion.p style={{textAlign: 'center', margin: 0, color:'red'}}
    whileHover={{ rotate: 360 }}
    transition={{ duration: 1 }}
  >
    © 2023 NIKHIL DUBEY. All rights reserved.
  </motion.p>
</footer>
  );
};

export default Footer;