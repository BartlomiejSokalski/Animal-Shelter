import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../pages/_loginPage.scss';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Walidacja loginu
        if (username.length < 5 || username.length > 11) {
            setError('Login musi mieć od 5 do 11 znaków');
            return;
        }

        // Walidacja hasła
        if (!/(?=.*[A-Z])/.test(password) || password.length < 5 || password.length > 11) {
            setError('Hasło musi zawierać co najmniej jedną dużą literę oraz mieć od 5 do 11 znaków');
            return;
        }

        // Jeśli dane logowania są poprawne, zapisz je w Local Storage
        const userData = {
            username,
            password,
            selectedDates: {},
            selectedDogName: null
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Przekieruj użytkownika do strony użytkownika po zalogowaniu
        navigate('/userPanel');
    };

    return (
        <div className="container-main container-main-loginPage">
            <div className="login-form">
                <h1>Login</h1>
                <div className="input-box">
                    <i className="bx bxs-user"></i>
                    <input
                        type="text"
                        placeholder="Nazwa Użytkownika"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <i className="bx bxs-lock-alt"></i>
                    <input
                        type="password"
                        placeholder="Hasło"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button onClick={handleLogin} className="login-btn input-box">Login</button>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
};

export default LoginPage;
