import React from 'react'
import { motion } from "framer-motion";
import './app.css';
function Home() {
  return (
    
    <div >
        <div id="h1"
        
        >
         <motion.h1 className="text-center"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          >
            Pdf Merge and Split:-</motion.h1>
            </div>
            <div >
            <motion.img src='./pdf.png' alt='Nikhil'
            id="i1"
      whileHover={{ rotate: 360 }}
      whileTap={{ rotate: -360 }}
      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

            </div>
        
    </div>
  )
}

export default Home;
