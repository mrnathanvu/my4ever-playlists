import React from 'react'

import './Login.css';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className='login'>
            <img src={process.env.PUBLIC_URL + '/spotify_logo.jpg'} alt='' />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;
