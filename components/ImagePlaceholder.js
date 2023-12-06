import React from "react";
import ContentLoader from 'react-content-loader';
const ImagePlaceholder =()=>(
    <ContentLoader viewBox = "0 0 100 100" height = {100} width = {100}>
        <rect x ='0' y='0' rx='5' ry='5' width='100'height='100'/>
    </ContentLoader>
);

export default ImagePlaceholder;