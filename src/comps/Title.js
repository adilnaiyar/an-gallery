import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './Global';
import Toggle from './Toggle';
import useDarkMode from '../hooks/useDarkMode';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  change: {
    y: -200
  },
  changeTo: {
    y: -4
  }
}

const Title = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    
    <ThemeProvider theme={themeMode} >
      <GlobalStyles />
      <div className = "title">
        <motion.h1 
        variants={containerVariants}
        initial="change"
        animate="changeTo"
        transition={{delay:0.2, type:'spring', stiffness:100}}>an-Gallery</motion.h1>
        <motion.h2 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{delay:1, duration:0.5}}>Pictures</motion.h2>
        <motion.p
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{delay:1, duration:1}}>Here is the collection of your picture!!</motion.p>
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  )
}

export default Title;