import { useEffect, useState } from 'react';
import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import CardDetail from './pages/CardDetail'; // 新添加的CardDetail组件
import Login from './pages/Login';
import Register from './pages/Register';
import { Container, Row, Col } from 'react-bootstrap'; // 导入 Bootstrap 组件
import './css/index.css';
import './css/card.css';
import MyCarousel from './Carousel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 导入React Router


function Main() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [fetchedData, setFetchedData] = useState([]);


    useEffect(() => {
        // 检测屏幕宽度是否小于760px
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 760);
        };

        // 添加窗口大小变化的事件监听器
        window.addEventListener('resize', handleResize);

        // 初始化屏幕尺寸
        handleResize();

        fetch('/api/data')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setFetchedData(data);
            })
            .catch((error) => {
                console.error('获取数据时发生错误：', error);
            });


        // 清除事件监听器
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div>
            <Router>


                <Routes> {/* 使用Routes来包装Route */}
                    <Route path="/card-detail" element={<CardDetail />} />
                    <Route path="/" element={ // 使用element属性指定要渲染的组件
                        <div>
                            <Navbar />
                            <MyCarousel />
                            <div className='main-page'>
                            <Container fluid>
                                        <Row>
                                            <Col md={9}>
                                                <Card />
                                                <Card />
                                                <Card />
                                                <Card />
                                                <Card />
                                                
                                                {/* 其他左侧内容 */}
                                            </Col>
                                            <Col md={3} className='fix-side'>
                                                {/* 右侧内容 */}
                                                <div>
                                                    <button
                                                        className="btn btn-link"
                                                        onClick={() =>
                                                            (window.location.href = '/write-travel-note')
                                                        }
                                                    >
                                                        写游记
                                                    </button>
                                                </div>
                                                <div>
                                                    <button
                                                        className="btn btn-link"
                                                        onClick={() => (window.location.href = '/visa')}
                                                    >
                                                        办签证
                                                    </button>
                                                </div>
                                                <div>
                                                    <button
                                                        className="btn btn-link"
                                                        onClick={() =>
                                                            (window.location.href = '/free-travel')
                                                        }
                                                    >
                                                        自由行
                                                    </button>
                                                </div>
                                                <div>
                                                    <button
                                                        className="btn btn-link"
                                                        onClick={() =>
                                                            (window.location.href = '/group-tour')
                                                        }
                                                    >
                                                        跟团游
                                                    </button>
                                                </div>
                                                <div>
                                                    <button
                                                        className="btn btn-link"
                                                        onClick={() =>
                                                            (window.location.href = '/customized')
                                                        }
                                                    >
                                                        客制化
                                                    </button>
                                                </div>
                                                {/* 其他右侧内容 */}
                                            </Col>
                                        </Row>
                                    </Container>
                            </div>
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
