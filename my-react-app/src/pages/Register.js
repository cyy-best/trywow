import React, { useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../NavigationBar';
import {Link, useNavigate} from 'react-router-dom';
import "../css/register.css";
import axios from "axios";
// import User from '../../server/models/user';


function Register() {

    const [inputs,setInputs] = useState({
        username:"",
        email:"",
        password:"",
    });
    const [err,setError] = useState(null);

    const navigate = useNavigate()

    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post("/auth/register", inputs)
            navigate("/login");
        } catch (err) {
            setError(err.response.data)
        }
    }

    return (
        <div>
            <Navbar />
            <Container className='register-container'>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2>Register</h2>
                        <Form >
                            <input required type='text' placeholder='username' name='username' onChange={handleChange}></input>
                            <input required type='email' placeholder='email' name='email' onChange={handleChange}></input>
                            <input required type='password' placeholder='password' name='password' onChange={handleChange}></input>

                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                Register
                            </Button>
                            {err && <p>{err}</p>}
                            <span>Do you have an account?<Link to="/login">Login</Link></span>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;
