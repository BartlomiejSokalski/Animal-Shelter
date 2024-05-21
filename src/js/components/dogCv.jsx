import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPanel from "./userPanel.jsx";
import '../pages/_dogCv.scss';

const DogCvPage = () => {
    const [username, setUsername] = useState('');
    const [selectedDogName, setSelectedDogName] = useState('');
    const [selectedDogImageUrl, setSelectedDogImageUrl] = useState('');

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

    return (
        <div className="container-main">
            <header className="dogCvHeader">
                <div className="dogCvHeaderLogo">Logo</div>
                <div className="localName">{username && `Witaj, ${username}!`}</div>
                <div className={'dogCvHeaderButtons'}>
                    <Link to="/dogCalendar"><button>Zarezerwój</button></Link>
                    <Link to="/dogAdoptForm"><button>Adoptuj</button></Link>
                </div>
            </header>
            {/*boczny pasek zakładek*/}
            <div className="aside">
                <Link to="/userPanel" className="aside-content">galeria psów</Link>
                <Link to="/reservedDogs" className="aside-content">Zarezerwowane psy</Link>
                <Link to="/weather" className="aside-content">pogoda</Link>
                <Link to="/calculator" className="aside-content">kalkulator</Link>
            </div>
            {/*info pod zdjeciem psa*/}
            <div className="dogCv">
                <div className="dogCvAside">
                    {/* Wyświetl obrazek wybranego psa */}
                    <img src={selectedDogImageUrl} alt={selectedDogName} />
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

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/userPanel" element={<UserPanel />} />
                <Route path="/dogCv" element={<DogCvPage />} />
                <Route path="/reservedDogs" element={<div>Reserved Dogs Page</div>} />
                <Route path="/calculator" element={<div>Calculator Page</div>} />
                <Route path="/weather" element={<div>Weather Page</div>} />
                <Route path="/dogCalendar" element={<div>Dog Calendar Page</div>} />
                <Route path="/dogAdoptForm" element={<div>Dog Adopt Form Page</div>} />
            </Routes>
        </Router>
    );
};



export default DogCvPage;
