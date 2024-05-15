import React, { useState } from 'react';
import { createRoot } from "react-dom/client";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Przekieruj użytkownika do strony użytkownika po zalogowaniu
        window.location.href = 'userPanel.html';
    };

    return (
        // login form
        <div className="container-main">
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

                <button className="login-btn input-box" onClick={handleLogin}>Login</button>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
};

const container = document.querySelector('.local')
const root = createRoot(container)
root.render(<LoginPage/>)
export default LoginPage;
