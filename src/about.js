import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function About() {


  return (
    <div>
          <motion.h1 className="text-center"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          >
            About Me</motion.h1>
    <hr/>
    <div>
      
      <div className="col-md-10" id="ab">
      <div>
      <motion.h2
        
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        Nikhil Dubey
      </motion.h2>
    </div>
        <h5 className="text-muted " >Web Developer</h5>
        <motion.p
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        >
          I am a passionate web developer with over 2 years of experience in creating modern and responsive web applications. My expertise includes front-end development using HTML5, CSS3,JavaScript and React Js as well as back-end development using node.js and express.js. I have successfully completed numerous projects for clients around the world, ranging from small business websites to large-scale web applications.
        <br/> <br/>
          In addition to my technical skills, I am also well-versed in user experience (UX) design principles and believe in creating intuitive and user-friendly web interfaces. I am committed to staying updated with the latest web development trends and continuously enhancing my skills to deliver high-quality results.
          <br/> <br/>
          Feel free to contact me for your web development needs or to discuss potential projects. I am always excited to work with new clients and help them achieve their online goals.
        </motion.p>
        <Link to="/contact" className="navbar">
        <motion.button 
        
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 2 }}
        type="button" className="btn btn-primary">Contact Me</motion.button></Link>
      </div>
    </div>
    </div>
  )
}
