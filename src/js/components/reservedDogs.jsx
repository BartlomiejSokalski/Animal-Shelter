import {createRoot} from "react-dom/client";
import React, { useEffect, useState } from 'react';
import UserPanel from "./userPanel.jsx";

const ReservedDogs = () => {
    const [selectedDogName, setSelectedDogName] = useState('');
    const [allDogNames, setAllDogNames] = useState([]);

    useEffect(() => {
        const storedDogName = localStorage.getItem('selectedDogName');
        if (storedDogName) {
            setSelectedDogName(storedDogName);
        }

        // Pobierz wszystkie imiona zapisanych psów z localStorage
        const storedDogNames = Object.keys(localStorage)
            .filter(key => key.startsWith('selectedDates'))
            .map(key => JSON.parse(localStorage.getItem(key)))
            .map(selectedDates => Object.keys(selectedDates))
            .flat();
        setAllDogNames(storedDogNames);
    }, []);

    const handleDogClick = (dogName, imageUrl) => {
        // Zapisz imię psa do lokalnego przechowywania (localStorage)
        setSelectedDogName(dogName);
    };

    return (
        <div className="container-main">
            <header className="dogCvHeader">
                <div className="localName">{selectedDogName}</div> {/* Wyświetl imię zapisanego psa */}
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
                            <div>data rezerwacji</div>
                        </div>
                        <div className="resevedDogsButtons">
                            <button onClick={() => handleDogClick(dogName)}>Wybierz</button> {/* Obsługa kliknięcia, aby wybrać psa */}
                            <button>anuluj rezerwacje</button>
                            <button>edytuj date rezerwacji</button>
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