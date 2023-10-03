import React from 'react';
import { Link } from 'react-router-dom';
import './css/card.css';

function Card() {
    return (
        <Link to="/card-detail" style={{ textDecoration: 'none' }}>
            <div className="card mainpage-card">
                <div className="card-img-wrapper">
                    <img src="https://via.placeholder.com/50" className="card-img" alt="Placeholder" />
                </div>
                <div className="card-body">
                <div className="card-details">
                        <h6 className="card-title">Card Title</h6>
                        
                    </div>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    
                    <div className="card-stats">
                    <p className="card-location">Location</p>
                        <p className="card-author">Author</p>
                        <span className="card-likes">Likes</span>
                        <span className="card-favorites">Favorites</span>
                    </div>
                    <a href="#" className="btn">Learn More</a>
                </div>
            </div>
        </Link>
    );
}

export default Card;
