import React from "react";
import { Link } from 'react-router-dom';
import './css/author.css';
import pic from './image/slide3.jpg'
function Author() {

    return (
        <div className="author-info">
            <div className='avatar'>
                <img src={pic} ></img>
                <i></i>
            </div>
            <Link style={{textDecoration:'none'}}><h3 className='h3 author'>author</h3></Link>
            <div className='author-intro'>author intro</div>
        </div>
    );
}

export default Author;