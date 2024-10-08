import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Weather from "./weather.jsx";
import '../pages/_dogCv.scss';

const DogCvPage = () => {
    const [userData, setUserData] = useState(() => {
        const storedUserData = localStorage.getItem('userData');
        return storedUserData ? JSON.parse(storedUserData) : null;
    });
    const navigate = useNavigate();
// przy wylogowaniu przenies na strone loginpage
    useEffect(() => {
        if (!userData) {
            navigate('/login');
        }
    }, [userData, navigate]);
// logout
    const handleLogout = () => {
        localStorage.removeItem('userData');
        localStorage.removeItem('adoptedDogs');
        navigate('/login');
    };

    return (
        <div className="container-main-dogCv">
            <header className="dogCvHeader">

                <div className="localName">{userData && ` ${userData.username}`}</div>
                <div className={'dogCvHeaderButtons'}>
                    <Link to="/dogCalendar"><button>Zarezerwój</button></Link>
                    <Link to="/dogAdoptForm"><button>Adoptuj</button></Link>
                    <button className={'dogCvButton'} onClick={handleLogout}>Wyloguj</button>
                </div>
            </header>
            {/*boczny pasek zakładek*/}
            <div className="aside">
                <Link to="/userPanel" className="aside-content">galeria psów</Link>
                <Link to="/reservedDogs" className="aside-content">Zarezerwowane psy</Link>
                <Link to="/calculator" className="aside-content">kalkulator</Link>
                <div className="weather">
                    <Weather />
                </div>
                <div className={'userNameAside-pretty'}></div>
            </div>
            {/*info pod zdjeciem psa*/}
            <div className="dogCv">
                <div className="dogCvAside">
                    {/* Wyświetl obrazek wybranego psa */}
                    {userData && userData.selectedDogImageUrl && (
                        <img src={userData.selectedDogImageUrl} alt={userData.selectedDogName} />
                    )}
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
                    <h1>Cześć jestem {userData && userData.selectedDogName}!, nie moge sie doczekać adopcji</h1>
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
                        <h3> Wiecej o mnie powie ci moja pani w schronisku!</h3>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DogCvPage;
