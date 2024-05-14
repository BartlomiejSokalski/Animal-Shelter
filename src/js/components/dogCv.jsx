import React, { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
import UserPanel from "./userPanel.jsx";

const DogCvPage = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Pobierz nazwę użytkownika z Local Storage
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []); // Pobieranie danych tylko raz przy załadowaniu komponentu

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
            <div className="aside">
                <a href={'userPanel.html'} className="aside-content">galeria psów</a>
                <a href={'reservedDogs.html'} className="aside-content">Zarezerwowane psy</a>
                <a href={'weather.html'} className="aside-content">pogoda</a>
                <a href={'calculator.html'} className="aside-content">kalkulator</a>
            </div>

            <div className="dogCv">
                <div className="dogCvAside">
                    <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" alt=""/>
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
                <div className="dogCvMainContentHeader">
                    <h1>Cześć jestem Dog1 name!, nie moge sie doczekać adopcji</h1>
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
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
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