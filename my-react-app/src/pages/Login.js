import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../NavigationBar';
import { Link } from 'react-router-dom';
import '../css/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // 处理登录逻辑
    };

    return (
        <div className='login-page'>
            <Navbar className="login-navbar" />
            <Container className='login-container'>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2>Login</h2>
                        <Form onSubmit={handleLogin}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    pattern="^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,18})"
                                    required
                                />

                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <Link to="/register">
                                <Button variant="secondary" className="ml-2">
                                    Register
                                </Button>
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
