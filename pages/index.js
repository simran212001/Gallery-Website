import { useState, useEffect } from "react";
import GalleryGrid from "../components/GalleryGrid";

const Home = ()=>{
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    const fetchImages = async()=>{
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=16`);

        const data = await response.json();
        setImages((prevImages) => [...prevImages, ...data]);
        setPage(page+1);

    };

    useEffect(() =>{
        fetchImages();
        window.addEventListener('scroll',handleScroll);
        return()=>{
            window.removeEventListener('scroll',handleScroll);

        };
    },[]);

    const handleScroll = () =>{
        if(
            window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        ){
            fetchImages();
        }
    };

    return(
        <div>
            <GalleryGrid images= {images} />
        </div>
    );
};

export default Home;