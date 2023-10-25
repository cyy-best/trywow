import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { FaStar} from 'react-icons/fa'; // 导入一些图标
import Navbar from '../NavigationBar';
import Author from '../author';
import Comment from '../comment';
import '../css/index.css';
import '../css/c-detail.css';

function CardDetail() {
    return (
        <div className='card-detail'>
            <Navbar />
            {/* 主要内容 */}

            <Container className="section">
                <Row>

                    {/* 中间图文内容 */}
                    <Col md={9} >
                        <div className='main-section'>
                            <h3 className='h3'>Main Content</h3>
                            <div className='img-container'>
                                <div className='card-image image1'></div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    facilisi. Sed at efficitur odio. Integer eget lorem ac quam
                                    malesuada ullamcorper. Quisque feugiat diam a odio euismod, eu
                                    vestibulum nunc fermentum. Vivamus at dui et metus ullamcorper
                                    auctor. Sed vel purus ut ex consectetur dignissim.
                                </p>
                                <div className='card-image image2'></div>
                                <div className='card-image image3'></div>



                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    facilisi. Sed at efficitur odio. Integer eget lorem ac quam
                                    malesuada ullamcorper. Quisque feugiat diam a odio euismod, eu
                                    vestibulum nunc fermentum. Vivamus at dui et metus ullamcorper
                                    auctor. Sed vel purus ut ex consectetur dignissim.
                                </p>
                            </div>
                            <Row>
                                <Col>
                                    <p>Published on: September 1, 2023</p>
                                    <p>Author: John Doe</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    {/* 右侧评论和评分 */}
                    <Col md={3}>
                        {/* 右侧评论和评分 */}
                        <div className='side-section d-flex flex-column justify-content-between'>                          
                                <Author />
                                <div className="comment-list">
                                    <p>User 1: This is great!</p>
                                    <div className="icons">
                                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                    </div>
                                {/* 添加更多评论 */}
                            </div>
                            <Comment />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    );
}

export default CardDetail;
