import { Container } from "postcss";
import React from "react";

import {motion} from 'framer-motion';

const GalleryGrid = ({images,onImageClick})=>{
    return(
        <div className="grid-container">
            {images.map((image,index) =>(
                
                <motion.div key = {index}  whileHover = {{scale:1.1}} onClick = {()=> onImageClick(image.url)} className="grid-item">
                    <img src = {image.url} alt={`Image ${index}`}/>
                </motion.div>
            ))}
        </div>
    );
};

export default GalleryGrid;