import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from 'react';
import UserPanel from "./userPanel.jsx";

const ReservedDogs = () => {
    const [allDogNames, setAllDogNames] = useState([]);
    const [allDogDates, setAllDogDates] = useState([]);

    useEffect(() => {
        // Pobierz wszystkie imiona zapisanych psów z localStorage
        const storedDogNames = Object.keys(localStorage)
            .filter(key => key.startsWith('selectedDates'))
            .map(key => JSON.parse(localStorage.getItem(key)))
            .map(selectedDates => Object.keys(selectedDates))
            .flat();
        setAllDogNames(storedDogNames);

        // Pobierz daty dla wszystkich zapisanych psów z localStorage
        const storedDogDates = Object.keys(localStorage)
            .filter(key => key.startsWith('selectedDates'))
            .map(key => JSON.parse(localStorage.getItem(key)))
            .map(selectedDates => Object.values(selectedDates))
            .flat();
        setAllDogDates(storedDogDates);
    }, []);
    const handleCancelReservation = (dogName) => {
        // Usuń daty dla wybranego psa z localStorage
        const storedDates = JSON.parse(localStorage.getItem('selectedDates'));
        delete storedDates[dogName];
        localStorage.setItem('selectedDates', JSON.stringify(storedDates));

        // Aktualizuj stan
        setAllDogNames(allDogNames.filter(name => name !== dogName));
        setAllDogDates(allDogDates.filter((date, idx) => allDogNames[idx] !== dogName));
    };
    const handleEditReservation = (dogName) => {
        // Zapisz wybranego psa do localStorage
        localStorage.setItem('selectedDogName', dogName);

        // Przekieruj do strony dogCalendar.html
        window.location.href = 'dogCalendar.html';
    };




    return (
        <div className="container-main">
            <header className="dogCvHeader">
                <div className="localName">Twoje zarezerwowane psy!</div>
            </header>
            <div className="aside">
                <a href={'userPanel.html'} className="aside-content">galeria psów</a>
                <a href={'weather.html'} className="aside-content">pogoda</a>
                <a href={'calculator.html'} className="aside-content">kalkulator</a>
            </div>
            <div className="reservedDogs">
                {/* Wyświetl listę zapisanych psów */}
                {allDogNames.map((dogName, index) => (
                    <div className="reservedDogsNotButtons" key={index}>
                        <div className="reservedDogsList">numer {index + 1}
                            <div>{dogName}</div> {/* Wyświetl imię psa */}
                            {/* Wyświetl daty dla każdego psa */}
                            <div className="reservedDates">
                                {allDogDates
                                    .filter((date, idx) => allDogNames[idx] === dogName)
                                    .join(', ')
                                }
                            </div>
                        </div>
                        <div className="resevedDogsButtons">
                            <button onClick={() => handleCancelReservation(dogName)}>anuluj rezerwacje</button>
                            <button onClick={() => handleEditReservation(dogName)}>edytuj date rezerwacji</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const dududupson = document.querySelector('.userPanel')

const root = createRoot(dududupson)
root.render(<ReservedDogs/>)
export default ReservedDogs;
