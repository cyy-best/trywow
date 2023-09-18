import { useEffect, useState } from 'react';
import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import { Container, Row, Col } from 'react-bootstrap'; // 导入 Bootstrap 组件
import './index.css';
import MyCarousel from './Carousel';

function Main() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        // 检测屏幕宽度是否小于760px
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 760);
        };

        // 添加窗口大小变化的事件监听器
        window.addEventListener('resize', handleResize);

        // 初始化屏幕尺寸
        handleResize();

        // 清除事件监听器
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
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
                <Row>
                    {/* 继续添加更多行，每行 4 个卡片 */}
                </Row>
            </Container>
        </div>
    );
}

export default Main;
