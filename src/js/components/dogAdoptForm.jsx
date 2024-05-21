import React from 'react';

import { Link } from 'react-router-dom';
import '../pages/_dogAdoptForm.scss';

const DogAdoptForm = () => {
    return (
        <div className="container-main">
            <header className="dogCvHeader">
                <div className="localName"></div>
            </header>
            <div className="aside">
                <Link to={'/userPanel'} className="aside-content">galeria psów</Link>
                <Link to={'/reservedDogs'} className="aside-content">Zarezerwowane psy</Link>
                <Link to={'/weather'} className="aside-content">pogoda</Link>
                <Link to={'/calculator'} className="aside-content">kalkulator</Link>
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

export default DogAdoptForm
