import { Link } from 'react-router-dom';
import './css/card.css';
import pic from './image/slide3.jpg'


function Card() {
    
    return (
        <Link to="/card-detail" className='card-container' style={{ textDecoration: 'none' }}>
            <div className="card mainpage-card">
                
                    <img src={pic} className="card-img" alt="Placeholder" />
                
            </div>
        </Link>
    );
}

export default Card;
