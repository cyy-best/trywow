import { useEffect, useState } from 'react';
import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import CardDetail from './pages/CardDetail'; // 新添加的CardDetail组件
import Login from './pages/Login';
import Register from './pages/Register';
import { Container, Row, Col } from 'react-bootstrap'; // 导入 Bootstrap 组件
import './css/index.css';
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
                            <Container className="mt-4">
                                <Row>
                                    <Col md={3} sm={4} xs={6}>
                                        <Card />
                                    </Col>
                                    <Col md={3} sm={4} xs={6}>
                                        <Card />
                                    </Col>
                                    <Col md={3} sm={4} xs={6}>
                                        <Card />
                                    </Col>
                                    <Col md={3} sm={4} xs={6}>
                                        <Card />
                                    </Col>
                                </Row>
                                {/* 继续添加更多行，每行 4 个卡片 */}
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
