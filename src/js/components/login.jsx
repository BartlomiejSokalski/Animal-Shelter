import React, { useState } from 'react';
import {createRoot} from "react-dom/client";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleLogin = () => {
        // Sprawdź poprawność danych logowania (np. wysłanie do serwera)

        // Jeśli dane logowania są poprawne, zapisz je w Local Storage
        if (remember) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            // W przypadku, gdy nie zaznaczono opcji "Zapamiętaj mnie", usuń dane z Local Storage
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        // Przekieruj użytkownika do strony użytkownika po zalogowaniu
        window.location.href = 'userPanel.html';

    };

    return (
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
                <div className="remember-forgot">
                    <label>
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                        />
                        Zapamiętaj mnie
                    </label>
                </div>
                <button className="login-btn input-box" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

const container = document.querySelector('.local')

const root = createRoot(container)
root.render(<LoginPage/>)
export default LoginPage;