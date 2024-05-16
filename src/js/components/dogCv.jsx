import React, { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
import UserPanel from "./userPanel.jsx"; // Import komponentu UserPanel

const DogCvPage = () => {

    const [username, setUsername] = useState('');
    const [selectedDogName, setSelectedDogName] = useState('');
    const [selectedDogImageUrl, setSelectedDogImageUrl] = useState('');

    const [username, setUsername] = useState(''); // Stan dla nazwy użytkownika


    useEffect(() => {
        // Efekt pobierający nazwę użytkownika z local storage przy załadowaniu komponentu
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }

        // Pobierz imię psa z Local Storage
        const storedDogName = localStorage.getItem('selectedDogName');
        if (storedDogName) {
            setSelectedDogName(storedDogName);
        }

        // Pobierz URL obrazka psa z Local Storage
        const storedDogImageUrl = localStorage.getItem('selectedDogImageUrl');
        if (storedDogImageUrl) {
            setSelectedDogImageUrl(storedDogImageUrl);
        }
    }, []); // Pobieranie danych tylko raz przy załadowaniu komponentu


    // Funkcja obsługująca kliknięcie w psa
    const handleDogClick = (dogName, imageUrl) => {
        // Zapisz imię psa do lokalnego przechowywania (localStorage)
        localStorage.setItem('selectedDogName', dogName);
        // Zapisz URL obrazka psa do lokalnego przechowywania (localStorage)
        localStorage.setItem('selectedDogImageUrl', imageUrl);
        // Ustaw aktualnie wybranego psa
        setSelectedDogName(dogName);
        setSelectedDogImageUrl(imageUrl);
    };



    return (
        <div className="container-main">
            <header className="dogCvHeader">
                <div className="dogCvHeaderLogo">Logo</div>
                <div className="localName">{username && `Witaj, ${username}!`}</div>
                <div className={'dogCvHeaderButtons'}>
                    <a href="dogCalendar.html"><button>Zarezerwój</button></a>
                    <a href="dogAdoptForm.html"><button>Adoptuj</button></a>

                </div>
            </header>
            {/*boczny pasek zakładek*/}
            <div className="aside">
                <a href={'userPanel.html'} className="aside-content">galeria psów</a>
                <a href={'reservedDogs.html'} className="aside-content">Zarezerwowane psy</a>
                <a href={'weather.html'} className="aside-content">pogoda</a>
                <a href={'calculator.html'} className="aside-content">kalkulator</a>
            </div>
            {/*info pod zdjeciem psa*/}
            <div className="dogCv">
                <div className="dogCvAside">
                    {/* Wyświetl obrazek wybranego psa */}
                    <img src={selectedDogImageUrl} alt="" />
                    <div>co robie w wolnym czasie</div>
                    <ul>
                        <li>duzo szczekam</li>
                        <li>gryze kapcie</li>
                        <li>uwielbiam sie przytulac</li>
                        <li>zjem wszystko</li>
                    </ul>
                    <div>choroby z którymi sie mierze</div>
                    <ul>
                        <li>bialaczka</li>
                        <li>bialaczka</li>
                    </ul>
                    <div>wszystko co musiz o mnie wiedziec</div>
                    <ul>
                        <li>samiec</li>
                        <li>włosy</li>
                        <li>średni pies</li>
                        <li>wykastrowany</li>
                    </ul>
                </div>
                {/*główny text psa*/}
                <div className="dogCvMainContentHeader">
                    {/* Wyświetl imię wybranego psa */}
                    <h1>Cześć jestem {selectedDogName}!, nie moge sie doczekać adopcji</h1>
                    <p>jestem engergiczny i zabawny uwielbiam gryźć koty i kapcie ale za to jest przesłodki i nie jem aż tak dużo</p>

                    <div className="dogCvMainContentHistory">
                        <h2>dlaczego jest w schronisku?</h2>
                        <p>jak byłem sie urodziłem to mojej pani nie bylo stać na kolejne psy</p>
                    </div>
                    <div className="dogCvMainContentPrice">
                        <h3>Ile kosztuje utrzymanie mnie miesiecznie?</h3>
                        <p> zjadam około tyle karmy a leki dla malego psa koszuja od $ do $ zł</p>
                    </div>
                    <div className="dogCvNainContetGallery">
                        <h3>  tutaj jest wiecej moich zdjęć!</h3>
                        <div className="gallery">
                            {/* Tutaj wyświetl dodatkowe zdjęcia psa */}
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

const dududupson = document.querySelector('.userPanel')

const root = createRoot(dududupson)
root.render(<DogCvPage/>)

export default DogCvPage;
