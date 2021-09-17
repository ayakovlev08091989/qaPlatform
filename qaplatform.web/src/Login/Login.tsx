import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isInputsHidden, setIsInputsHidden] = useState(false);

    const loginUser = () => {
        if (username && password) {
            setIsInputsHidden(true);
        }
    }
    
    if (isInputsHidden) {
        return null;
    }

    return <div className="login-box">
        <input className="login-username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="login-password" type="text" value={password} onChange={(e) => setPassword(e.target.value) } />
        <button className="login-submit" type="button" onClick={() => {loginUser()}}>Login</button>
    </div>
}

export default Login;