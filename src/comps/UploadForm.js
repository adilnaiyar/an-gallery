import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
import { motion } from 'framer-motion';

const UploadForm = () => {
    const[file, setFile] = useState(null);
    const[error,setError] = useState(null);

    const containerVariants = {
        hidden: {
            x:'-100vw'
        },
        visible: {
            x: 0
        },
      }

    const types = ['image/png', 'image/jpeg'];

    const changehandler = (e) => {
        let selected = e.target.files[0];
        //console.log(selected);
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    };

    return(
        <form>
            <motion.label
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.5, duration:0.5, type:'spring', stiffness:120}}>
                <input  type="file" onChange = {changehandler}/>
                <span>+</span>
            </motion.label>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div>{file.name}</div>}
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
};

export default UploadForm;