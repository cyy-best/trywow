import { Link } from 'react-router-dom';
import './css/card.css';
import jsonData from './db.json';
import slide from './image/slide1.jpg';
import avatar from './image/yuCao.jpg';


function Card({post}) {
    const handleDetails = () =>{
        return jsonData.posts.map((post) => (
            <Card key={post.id} post={post}/>
            
        ));
    }

    return (
        <Link to={{ pathname: "/card-detail" }}   state= {{ post:post }} className='card-container' style={{ textDecoration: 'none' }} onClick={handleDetails}>
            <div className="card mainpage-card">

                <img src={slide} className="card-img" alt="cover" />

                <div className='article-info'>
                    <p className='card-title'> {post.title}</p>
                    <div className='card-avatar'><img src={avatar} alt='avatar' className='card-avatar'></img></div>
                </div>
            </div>
        </Link>
    );
}

export default Card;
