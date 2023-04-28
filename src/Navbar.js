import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


export default function Navbar() {
  return (
    <div id="n1">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home" className="navbar">
          <motion.button
            whileHover={{ scale: 2.2 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            id="b1"
            className="btn btn-primary"
          >
            Home
          </motion.button>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/Merge" className="navbar">
                <motion.button
                  whileHover={{ scale: 2.2 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  id="n1"
                  className="btn btn-primary"
                >
                  Merge PDF
                </motion.button>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Split" className="navbar">
                <motion.button
                  whileHover={{ scale: 2.2 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  id="n1"
                  className="btn btn-primary"
                >
                  Split PDF
                </motion.button>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="navbar">
                <motion.button
                  whileHover={{ scale: 2.2 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  id="n1"
                  className="btn btn-primary"
                >
                  About
                </motion.button>
              </Link>
            </li>

            
          </ul>
        </div>
      </nav>
    </div>
  )
}
