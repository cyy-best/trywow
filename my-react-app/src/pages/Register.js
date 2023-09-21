import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from './../Navbar';
import axios from 'axios'; // 导入axios

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

        // 在这里处理注册逻辑
        // 创建一个新用户对象并将用户信息存储到数据库中
        const newUser = {
            name: name,
            email: email,
            password: password,
        };

        try {
            // 使用axios发送POST请求来保存用户到数据库
            const response = await axios.post('/api/register', newUser);

            // 检查响应并处理成功或失败的情况
            if (response.data.success) {
                // 用户注册成功
                // 在这里处理注册成功的情况
            } else {
                // 用户注册失败
                // 在这里处理注册失败的情况
                console.error('Registration failed:', response.data.message);
            }
        } catch (err) {
            // 处理注册失败的情况
            console.error('Error registering user:', err);
        }
    };

    return (
        <div>
            <Navbar className="register-navbar" />
            <Container className='register-container'>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2>Register</h2>
                        <Form onSubmit={handleRegister}>
                            {/* ...其他表单输入字段 */}
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
