import { useState, useContext } from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import Navbar from '../NavigationBar';
import { Link, useNavigate} from 'react-router-dom';
import '../css/login.css';
import axios from "axios";
import { AuthContext } from '../context/authContext';

function Login() {
    const [inputs,setInputs] = useState({
        username:"",
        password:"",
    });
    const [err,setError] = useState(null);

    const navigate = useNavigate()

    const {login} = useContext(AuthContext);
    

    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await login(inputs)
            navigate("/");
        } catch (err) {
            setError(err.response.data)
        }
    }

    return (
        <div className='login-page'>
            <Navbar className="login-navbar" />
            <Container className='login-container'>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2>Login</h2>
                        <Form >
                        <input required type='text' placeholder='username' name='username' onChange={handleChange}></input>
                        <input required type='password' placeholder='password' name='password' onChange={handleChange}></input>
                        <button onClick={handleSubmit}>Login</button>
                        {err&& <p>{err}</p>}
                         <span>Don't you have an account? <Link to="register">Resgister</Link></span>   
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
