// UserPanel.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/_userPanel.scss';
import Weather from './weather.jsx';

const UserPanel = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        } else {
            // Jeśli użytkownik nie jest zalogowany, przekieruj na stronę logowania
            navigate('/login');
        }
    }, [navigate]);

    const handleDogClick = (dogName, imageUrl) => {
        localStorage.setItem('selectedDogName', dogName);
        localStorage.setItem('selectedDogImageUrl', imageUrl);
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        navigate('/login');
    };

    return (
        <div className="container-main-userPanel">
            <header className="userPanelHeader">
                <div className="localName">Witaj! {username} tutaj znajdziesz wszystkie psy do adopcji</div>
                <button  onClick={handleLogout} className="userPanelButton">Wyloguj</button>
            </header>
            <div className="userNameAside">
                <Link to={'/reservedDogs'} className="userNameAside-content">Zarezerwowane psy</Link>
                <Link to={'/calculator'} className="userNameAside-content">Kalkulator</Link>
                <div className="weather">
                    <Weather />
                </div>
            </div>
            <div className="userPanelMainContent">
                <div className="userPanelDogCards">
                    <Link to="/dogCv" onClick={() => handleDogClick('brajan', 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg')}>
                        <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" alt="Brajan" />
                        <p><div className={'dogName1'}>brajan</div></p>
                    </Link>
                </div>
                {/* Kolejne karty psów */}
                <div className="userPanelDogCards">
                    <Link to="/dogCv" onClick={() => handleDogClick('dudek', 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*')}>
                        <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*" alt="Dudek" />
                        <p><div className={'dogName2'}>dudek</div></p>
                    </Link>
                </div>
                <div className="userPanelDogCards">
                    <Link to="/dogCv" onClick={() => handleDogClick('alojzy', 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445')}>
                        <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" alt="Alojzy" />
                        <p><div className={'dogName3'}>alojzy</div></p>
                    </Link>
                </div>
                <div className="userPanelDogCards">
                    <Link to="/dogCv" onClick={() => handleDogClick('marek', 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445')}>
                        <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" alt="Marek" />
                        <p><div className={'dogName4'}>marek</div></p>
                    </Link>
                </div>
                <div className="userPanelDogCards">
                    <Link to="/dogCv" onClick={() => handleDogClick('mieniu', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9d7B1q2N8oAorqXC8zdbbVqJYKJjbWDGyd_KdfSncBQ&s')}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9d7B1q2N8oAorqXC8zdbbVqJYKJjbWDGyd_KdfSncBQ&s" alt="Mieniu" />
                        <p><div className={'dogName5'}>mieniu</div></p>
                    </Link>
                </div>
                <div className="userPanelDogCards">
                    <Link to="/dogCv" onClick={() => handleDogClick('czorej', 'https://b1157417.smushcdn.com/1157417/wp-content/uploads/2023/06/cute-french-bulldog-close-up-eye-contact-outdoors-825x550.jpg?lossy=1&strip=1&webp=0')}>
                        <img src="https://b1157417.smushcdn.com/1157417/wp-content/uploads/2023/06/cute-french-bulldog-close-up-eye-contact-outdoors-825x550.jpg?lossy=1&strip=1&webp=0" alt="Czorej" />
                        <p><div className={'dogName6'}>czorej</div></p>
                    </Link>
                </div>
                <div className="userPanelDogCards">
                    <Link to="/dogCv" onClick={() => handleDogClick('kraus', 'https://media.wired.com/photos/65651b7225ccbd8cc7d5403c/master/pass/Science-Life-Extension-Drug-for-Big-Dogs-Is-Getting-Closer-1330545769.jpg')}>
                        <img src="https://media.wired.com/photos/65651b7225ccbd8cc7d5403c/master/pass/Science-Life-Extension-Drug-for-Big-Dogs-Is-Getting-Closer-1330545769.jpg" alt="Kraus" />
                        <p><div className={'dogName7'}>kraus</div></p>
                    </Link>
                </div>
                <div className="userPanelDogCards">
                    <Link to="/dogCv" onClick={() => handleDogClick('kapen', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QAflBhYPp957wxpJ-Q0bbssUBEKkSrCPmRZLn6-qHA&s')}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QAflBhYPp957wxpJ-Q0bbssUBEKkSrCPmRZLn6-qHA&s" alt="Kapen" />
                        <p><div className={'dogName8'}>kapen</div></p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserPanel;
