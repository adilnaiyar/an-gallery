import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
           delay: 1 
        }
    },
    changeFrom: {
        x:'-100vw'
    },
    changeTo: {
        x: 0,
    },

}

const ImageGrid = ({setSelectedImg}) => {
    const { docs} = useFirestore('images');
    //console.log(docs);
    return (
        
        <motion.div 
        className = "img-grid" 
        variants={containerVariants}
        initial="changeFrom"
        animate="changeTo"
        transition={{delay:1.5, duration:0.5, type:'spring', stiffness:120}}>
            {docs && docs.map(doc => (
                <motion.div className = "img-wrap" key = {doc.id} 
                layout
                whileHover = {{ opacity: 1, scale:1.1}}
                transition = {{type:'spring', stiffness:300}}
                onClick = {() => setSelectedImg(doc.url)}>
                    <motion.img src={doc.url} alt="uploaded pic" 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible" />
                </motion.div>
            ))}
        </motion.div>
    )
}

export default ImageGrid;