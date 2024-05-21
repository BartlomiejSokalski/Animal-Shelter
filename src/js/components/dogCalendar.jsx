import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Weather from "./weather.jsx";

const DogCalendar = () => {
    const [selectedDates, setSelectedDates] = useState(() => {
        const storedDates = localStorage.getItem('selectedDates');
        return storedDates ? JSON.parse(storedDates) : {};
    });
    const navigate = useNavigate();

    const handleDayClick = (date) => {
        const selectedDog = localStorage.getItem('selectedDogName');
        const updatedSelectedDates = { ...selectedDates };

        if (!updatedSelectedDates[selectedDog]) {
            updatedSelectedDates[selectedDog] = [];
        }

        updatedSelectedDates[selectedDog] = updatedSelectedDates[selectedDog].includes(date)
            ? updatedSelectedDates[selectedDog].filter(d => d !== date)
            : [...updatedSelectedDates[selectedDog], date];

        localStorage.setItem('selectedDates', JSON.stringify(updatedSelectedDates));
        setSelectedDates(updatedSelectedDates);
    };

    const isDateSelected = (date) => {
        const selectedDog = localStorage.getItem('selectedDogName');
        return selectedDates[selectedDog] && selectedDates[selectedDog].includes(date);
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        navigate('/login');
    };

    return (
        <div className="container-main-dogCalendar">
            <header className="dogCalendarHeader">
                <div className="localName">Kalendarz rezerwacji psa</div>
                <button onClick={handleLogout}>Wyloguj</button>
            </header>
            <div className="asideDogCalendar">
                <Link to="/userPanel" className="asideDogCalendar-content">galeria psów</Link>
                <Link to="/reservedDogs" className="asideDogCalendar-content">Zarezerwowane psy</Link>
                <Link to="/calculator" className="asideDogCalendar-content">kalkulator</Link>
                <div className="weather">
                    <Weather />
                </div>
            </div>

            <div className="dogCalendar">
                {/* Tutaj pozostała część kodu komponentu DogCalendar */}
            </div>
        </div>
    );
};

export default DogCalendar;
