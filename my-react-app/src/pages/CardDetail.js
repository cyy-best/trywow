import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../NavigationBar';
import Author from '../Author';
import Comment from '../Comment';
import '../css/index.css';
import '../css/c-detail.css';
import { useLocation } from 'react-router-dom';

function CardDetail() {
    const location = useLocation();
    const { post = null } = location.state;
    
    return (
        <div className='card-detail'>
            <Navbar />
            {/* 主要内容 */}

            <Container className="section">
                <Row>

                    {/* 中间图文内容 */}
                    <Col md={9} >
                        <div className='main-section'>
                            <h3 className='h3'>{post.title}</h3>
                            <div className='img-container'>
                                <div className='card-image image1'></div>
                                <p>
                                    {post.content}
                                </p>
                                <div className='card-image image2'></div>
                                <div className='card-image image3'></div>



                                
                            </div>
                            <Row>
                                <Col>
                                    <p>Published on: {post.date}</p>
                                    <p>Author: {post.author.name}</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    {/* 右侧评论和评分 */}
                    <Col md={3}>
                        {/* 右侧评论和评分 */}
                        <div className='side-section d-flex flex-column justify-content-between'>
                            <Author />
                            {/* 条件渲染 三元表达式*/}
                            

                            <Comment />
                        </div>

                    </Col>
                </Row>
            </Container>

        </div >
    );
}

export default CardDetail;
