import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // 导入 BrowserRouter
// import ReactDOM from 'react-dom';
import Main from './Main'; // 导入主页面组件
import 'bootstrap/dist/css/bootstrap.min.css'; // 导入 Bootstrap 样式
import { createRoot } from 'react-dom/client';
import './css/index.css';

const root = createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <Main /> {/* 渲染主页面组件 */}
  </React.StrictMode>

);
