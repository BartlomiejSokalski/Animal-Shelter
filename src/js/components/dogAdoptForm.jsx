import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Weather from "./weather.jsx";

const DogAdoptForm = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        navigate('/login');
    };

    return (
        <div className="container-main-dogAdoptForm">
            <header className="dogAdoptFormHeader">
                <div className="localName"></div>
                <button onClick={handleLogout}>Wyloguj</button>
            </header>
            <div className="asideDogAdoptForm">
                <Link to={'/userPanel'} className="asideDogAdoptForm-content">galeria psów</Link>
                <Link to={'/reservedDogs'} className="asideDogAdoptForm-content">Zarezerwowane psy</Link>
                <div className="weather">
                    <Weather />
                </div>
                <Link to={'/calculator'} className="asideDogAdoptForm-content">kalkulator</Link>
            </div>
            <form className="dogAdoptionForm">
                <div className="dogAdoptionFormSelect">
                    <label>wybierz psa</label>
                    <select>
                        <option value="select"></option>
                        <option value="brajan">brajan</option>
                        <option value="kubson">kubson</option>
                    </select>
                    <div className="dogAdoptionFormCheckbox">
                        <input type="checkbox" /> miesięczny zapas karmy
                        <input type="checkbox" /> dopasowana obroża
                        <input type="checkbox" /> dopasowana smycz
                    </div>
                    <div className="dogAdoptionFormOwner">Dane właściciela
                        <div className="dogAdoptionFormInput">
                            <label>imie</label>
                            <input type="text" />
                            <label>nazwisko</label>
                            <input type="text" /><br />
                            <label>ulica</label>
                            <input type="text" />
                            <label>nr domu</label>
                            <input type="text" /> <br />
                            <label>adres email</label>
                            <input type="text" />
                            <label>telefon</label>
                            <input type="text" />
                        </div>
                    </div>
                    <button>Zaadoptuj</button>
                </div>
            </form>
        </div>
    );
};

export default DogAdoptForm;
