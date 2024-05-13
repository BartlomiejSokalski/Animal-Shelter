import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Tutaj można dodać logikę weryfikacji danych logowania
        // Na potrzeby tego przykładu, po prostu zapisujemy dane logowania w localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        // Przekierowanie do strony po zalogowaniu
        window.location.href = '/userPanel.html';
    };

    return (
        <div className="container-main">
            <div className="login-form">
                <h1>Login</h1>
                <div className="input-box">
                    <i className='bx bxs-user'></i>
                    <input type="text" placeholder="Nazwa Użytkownika" value={username} onChange={handleUsernameChange} required />
                </div>
                <div className="input-box">
                    <i className='bx bxs-lock-alt'></i>
                    <input type="password" placeholder="Hasło" value={password} onChange={handlePasswordChange} required />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Zapamiętaj mnie</label>
                </div>
                <button className="login-btn input-box" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default LoginPage;