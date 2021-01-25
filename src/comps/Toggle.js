import React from 'react'
import { func, string } from 'prop-types';
import {ToggleContainer} from './Global';
import { motion } from 'framer-motion';

import { ReactComponent as MoonIcon } from '../Assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '../Assets/icons/sun.svg';

const containerVariants = {
  change: {
    y: -200
  },
  changeTo: {
    y: -4
  }
}

const Toggle = ({ theme, toggleTheme }) => {
  const lightTheme = theme === 'light';
  return (
    <div>
    <ToggleContainer lightTheme = {lightTheme}/>
    <motion.button 
    className = "topright-button" 
    onClick={toggleTheme} 
    variants={containerVariants}
    initial="change"
    animate="changeTo"
    transition={{delay:0.2, type:'spring', stiffness:100}}>
      <SunIcon />
      <MoonIcon />
    </motion.button>
    </div>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;