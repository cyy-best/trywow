import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaStar, FaHeart, FaExclamationCircle } from 'react-icons/fa'; // 导入一些图标
import Navbar from './../Navbar';
import '../css/index.css';
import '../css/c-detail.css';

function CardDetail() {
    return (
        <div className='card-detail'>
            {/* 主要内容 */}
            <header className='f-nav'></header>
            <Container className="section">
                <Row>

                    <Col md={3} >
                        <div className='side-section d-flex flex-column justify-content-between'>
                            <div>
                                <h3>Relavant</h3>
                                <div className="comment">
                                    <a href="#" className="btn">Learn More</a>
                                    <br />
                                    <a href="#" className="btn">Learn More</a>
                                    {/* 添加更多评论 */}
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* 中间图文内容 */}
                    <Col md={6} >
                        <div className='main-section'>
                            <h2>Main Content</h2>
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
                            <div>
                                <h3>Comments</h3>
                                <div className="comment">
                                    <p>User 1: This is great!</p>
                                    <div className="icons">
                                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                    </div>
                                </div>
                                {/* 添加更多评论 */}
                            </div>
                            <div>
                                {/* 评论输入框 */}
                                <Form>
                                    <Form.Group controlId="commentInput">
                                        <Form.Control type="text" placeholder="Add a comment..." />
                                    </Form.Group>
                                    <Button variant="primary" className="align-self-end">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    );
}

export default CardDetail;
