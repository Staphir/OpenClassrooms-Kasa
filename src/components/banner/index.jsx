import { Fragment } from "react";
import "./style.scss";

function Banner({text, srcImage, altImage}) {
    return (
        <Fragment>
            <h2 className="banner-text">{text}</h2>
            <img className='banner-image' src={srcImage} alt={altImage}></img>
        </Fragment>
        );
    }
    
    export default Banner;