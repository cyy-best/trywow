import React from 'react';
import { Link } from 'react-router-dom';

function Card() {
    return (
        <Link to="/card-detail" style={{ textDecoration: 'none' }}>
            <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
                <div className="card-body">
                    <h6 className="card-title">Card Title</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn">Learn More</a>
                </div>
            </div>
        </Link>
    );
}

export default Card;
