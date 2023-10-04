import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from './../Navbar';
import axios from 'axios'; // 导入axios
// import User from '../../server/models/user';


function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateName = (name) => {
        const namePattern = /^[A-Za-z]+$/;
        if (!namePattern.test(name)) {
            setNameError('Name should contain only letters.');
        } else {
            setNameError('');
        }
    };

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        // 创建一个新用户对象
        const newUser = {
            name: name,
            email: email,
            password: password,
        };

        try {
            // 使用axios发送POST请求来保存用户到数据库
            const response = await axios.post('/register', newUser);

            // 检查响应并处理成功或失败的情况
            if (response.data.success) {
                // 用户注册成功
                console.log('Registration successful.');
            } else {
                // 用户注册失败
                console.error('Registration failed:', response.data.message);
            }
        } catch (err) {
            // 处理注册失败的情况
            console.error('Error registering user:', err);
        }
    };

    return (
        <div>
            <Navbar />
            <Container className='register-container'>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2>Register</h2>
                        <Form onSubmit={handleRegister}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        validateName(e.target.value);
                                    }}
                                    required
                                />
                                {nameError && <div className="text-danger">{nameError}</div>}
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        validateEmail(e.target.value);
                                    }}
                                    required
                                />
                                {emailError && <div className="text-danger">{emailError}</div>}
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    required
                                />
                                <small className="text-muted">
                                    密码：长度至少为8个字符，必须包含数字、小写字母和大写字母
                                </small>
                            </Form.Group>

                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;
