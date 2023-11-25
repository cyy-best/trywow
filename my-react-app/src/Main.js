// import { useEffect, useState } from 'react';
import React from 'react';
import Navbar from './NavigationBar';
import Card from './Card';
import CardDetail from './pages/CardDetail'; // 新添加的CardDetail组件
import Login from './pages/Login';
import Register from './pages/Register';
import NewCard from './pages/NewCard';
import { Container} from 'react-bootstrap'; // 导入 Bootstrap 组件
import { Pencil, CreditCard, SuitHeart, People, Puzzle } from 'react-bootstrap-icons';
import MyCarousel from './Carousel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 导入React Routers
import './css/index.css';
import './css/card.css';



function Main() {

    return (
        <div>
            <Router>


                <Routes> {/* 使用Routes来包装Route */}
                    <Route path="/card-detail" element={<CardDetail />} />
                    <Route path='/new-card' element={<NewCard />} />
                    <Route path="/" element={ // 使用element属性指定要渲染的组件
                        <div>
                            <Navbar />
                            <MyCarousel />
                            <div className='fix-side'>
                                        {/* 中间内容 */}
                                        <div className='btn-container'>
                                            
                                        </div>
                                        <div className='btn-container'>
                                            <button
                                                className="btn btn-link"
                                                onClick={() =>
                                                    (window.location.href = '/new-card')
                                                }

                                            >
                                                <Pencil className="icon" /> 写游记
                                            </button>
                                        </div>
                                        <div className='btn-container'>
                                            <button
                                                className="btn btn-link"
                                                onClick={() => (window.location.href = '/visa')}
                                            >
                                                <CreditCard className="icon" />办签证
                                            </button>
                                        </div>
                                        <div className='btn-container'> 
                                            <button
                                                className="btn btn-link"
                                                onClick={() =>
                                                    (window.location.href = '/free-travel')
                                                }
                                            >
                                                <SuitHeart className="icon" />自由行
                                            </button>
                                        </div>
                                        <div className='btn-container'>
                                            <button
                                                className="btn btn-link"
                                                onClick={() =>
                                                    (window.location.href = '/group-tour')
                                                }
                                            >
                                                <People className="icon" />跟团游
                                            </button>
                                        </div>
                                        <div className='btn-container'>
                                            <button
                                                className="btn btn-link"
                                                onClick={() =>
                                                    (window.location.href = '/customized')
                                                }
                                            >
                                                <Puzzle className="icon" />客制化
                                            </button>
                                        </div>
                                        {/* 其他右侧内容 */}
                                    </div>
                            <Container fluid className='main-page flex'>
                            
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />

                                        {/* 其他左侧内容 */}                                   
                                
                            </Container>

                        </div>
                    } />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>

            </Router>
        </div >
    );
}

export default Main;
