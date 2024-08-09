import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/_userPanel.scss';
import Weather from './weather.jsx';

const UserPanel = () => {
    const [userData, setUserData] = useState(() => {
        const storedUserData = localStorage.getItem('userData');
        return storedUserData ? JSON.parse(storedUserData) : null;
    });
    const navigate = useNavigate();
// przenies do login page jak wylogujesz
    useEffect(() => {
        if (!userData) {
            navigate('/login');
        }
    }, [userData, navigate]);
// przenoszenie do wybranego psa w dogCv
    const handleDogClick = (dogName, imageUrl) => {
        const updatedUserData = { ...userData, selectedDogName: dogName, selectedDogImageUrl: imageUrl };
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
        setUserData(updatedUserData);
    };
// logout
    const handleLogout = () => {
        localStorage.removeItem('userData');
        localStorage.removeItem('adoptedDogs');
        navigate('/login');
    };
// psy i zdjecia
    const dogs = [
        { name: 'brajan', imageUrl: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg' },
        { name: 'kubson', imageUrl: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*' },
        { name: 'alojzy', imageUrl: 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445' },
        { name: 'marek', imageUrl: 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445' },
        { name: 'mieniu', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9d7B1q2N8oAorqXC8zdbbVqJYKJjbWDGyd_KdfSncBQ&s' },
        { name: 'czorej', imageUrl: 'https://b1157417.smushcdn.com/1157417/wp-content/uploads/2023/06/cute-french-bulldog-close-up-eye-contact-outdoors-825x550.jpg?lossy=1&strip=1&webp=0' },
        { name: 'kraus', imageUrl: 'https://media.wired.com/photos/65651b7225ccbd8cc7d5403c/master/pass/Science-Life-Extension-Drug-for-Big-Dogs-Is-Getting-Closer-1330545769.jpg' },
        { name: 'kapen', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QAflBhYPp957wxpJ-Q0bbssUBEKkSrCPmRZLn6-qHA&s' }
    ];

    const adoptedDogs = JSON.parse(localStorage.getItem('adoptedDogs')) || [];

    return (
        <div className="container-main-userPanel">
            <header className="userPanelHeader">
                <div className="localName">Witaj! {userData ? userData.username : 'Użytkownik'} tutaj znajdziesz wszystkie psy do adopcji</div>
                <button onClick={handleLogout} className="userPanelButton">Wyloguj</button>
            </header>
            <div className="userNameAside">
                <Link to={'/reservedDogs'} className="userNameAside-content">Zarezerwowane psy</Link>
                <Link to={'/calculator'} className="userNameAside-content">Kalkulator</Link>
                <div className="weather">
                    <Weather />
                </div>
                <div className={'userNameAside-pretty'}></div>
            </div>
            <div className="userPanelMainContent">
                {dogs.map((dog, index) => (
                    <div className="userPanelDogCards" key={index}>
                        <Link to="/dogCv" onClick={() => handleDogClick(dog.name, dog.imageUrl)}>
                            <img src={dog.imageUrl} alt={dog.name} />
                            <div><p className={adoptedDogs.includes(dog.name) ? 'adoptedDogName' : 'dogName'}>{dog.name}</p></div>
                            {adoptedDogs.includes(dog.name) && <p className="adoptedStatus">Zaadoptowany</p>}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPanel;
