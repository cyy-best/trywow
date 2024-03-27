import React, { useContext, useState } from 'react';
import './css/nav.css'; // 导入自定义的 CSS 样式
import { AuthContext } from './context/authContext';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const {currentUser,logout} = useContext(AuthContext);

  return (
    <div>
      <div className={`hamburger-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <span>{currentUser?.username}</span>
        {currentUser ?<span onClick={logout}>Logout</span>: <Link to="/login">Login</Link>}
        <ul>
          <li><a href="/">首页</a></li>
          <li><a href="#">产品</a></li>
          <li><a href="#">关于我们</a></li>
          <li ><a >联系我们</a></li>
        </ul>
      </nav>
      
    </div>
  );
}

export default NavigationBar;
