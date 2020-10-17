import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import './Login.css';
import logo from '../../../images/logos/logo.png';
import google from '../../../images/icons/google.png';
import {useHistory, useLocation} from 'react-router-dom';
import { handleGoogleSignIn, initializeLoginFramework } from './loginManager';
import { UserContext } from '../../../App';

initializeLoginFramework();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/dashboard" }};

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            if(res.success){
                handleResponse(res, true);
            } else {
                alert(res.message);
            }
        })
    }
    
    const handleResponse = (res, redirect) => {
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
    }
    return (
        <div>
            <div style={{marginTop: '50px'}}>
                <center><img src={logo} style={{width: '200px'}} alt=""/></center>
            </div>
            <div className="box">
                <h2 style={{textAlign: 'center'}}>Login With</h2>
                <center>
                    <Button variant="outline-primary" className="login-with" onClick={googleSignIn}>
                        <img src={google} style={{width: '20px', marginRight: '5px'}} alt=""/>
                        Continue with Google
                    </Button>
                    <p className="mt-2">Don't have an account? <a href="/login">Create an account</a></p>
                </center>
            </div>
        </div>
    );
};

export default Login;