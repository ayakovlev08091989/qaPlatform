import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return <div className="login-box">
        <input className="login-username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="login-password" type="text" value={password} onChange={(e) => setPassword(e.target.value) } />
        <input className="login-submit" type="button" value="Login" />
    </div>
}

export default Login;