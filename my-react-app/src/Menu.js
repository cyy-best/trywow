import React from 'react';
import jsonData from './db.json';

const Menu = () => {
  return (
    <div className='menu-interest'>
        <h4>Other posts you may like</h4>
        {jsonData.posts.map(post => (
            <div className='menu-list' key={post.id}>
                <h5 className='post-title'>{post.title}</h5>
                <button>read more</button>
            </div>
        )) }
        
      
    </div>
  )
}

export default Menu
