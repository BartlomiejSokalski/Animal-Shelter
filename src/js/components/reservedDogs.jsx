import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/_reservedDogs.scss';
import Weather from "./weather.jsx";

const ReservedDogs = () => {
    const [userData, setUserData] = useState(() => {
        const storedUserData = localStorage.getItem('userData');
        return storedUserData ? JSON.parse(storedUserData) : null;
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (!userData) {
            navigate('/login');
        }
    }, [userData, navigate]);
// usuń rezerwacje
    const handleClearReservation = (dogName) => {
        if (userData && userData.selectedDates) {
            const updatedSelectedDates = { ...userData.selectedDates };
            delete updatedSelectedDates[dogName]; // Usuń daty dla wybranego psa
            const updatedUserData = {
                ...userData,
                selectedDates: updatedSelectedDates,
            };
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
            setUserData(updatedUserData);
        }
    };
// logout
    const handleLogout = () => {
        localStorage.removeItem('userData');
        localStorage.removeItem('adoptedDogs');
        navigate('/login');
    };

    return (

        <div className="container-main-reservedDogs">
            <header className="reservedDogsHeader">
                <div className="localName">Twoje zarezerwowane psy!</div>
                <button onClick={handleLogout} className='reservedDogsButtonCancel'>Wyloguj</button>
            </header>
            <div className="asideReservedDogs">
                <Link to="/userPanel" className="asideReservedDogs-content">galeria psów</Link>
                <Link to="/calculator" className="asideReservedDogs-content">kalkulator</Link>
                <div className="weather">
                    <Weather />
                </div>
                <div className={'userNameAside-pretty'}></div>
            </div>
            <div className="reservedDogs">
            {/* Wyświetl listę zapisanych psów */}
                {userData && userData.selectedDates && Object.keys(userData.selectedDates).map((dogName, index) => (
                    <div className="reservedDogsNotButtons" key={index}>
                        <div className="reservedDogsList">
                            <div>psiak {index + 1}</div>
                            <div>{dogName}</div> {/* Wyświetl imię psa */}
                            {/* Wyświetl daty dla każdego psa */}
                            <div className="reservedDates">
                                {userData.selectedDates[dogName].join(', ')}
                            </div>
                            <button onClick={() => handleClearReservation(dogName)} className="reservedDogsButtonCancel">Usuń rezerwację</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReservedDogs;
