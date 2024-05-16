import React from 'react';
import {createRoot} from "react-dom/client";
import UserPanel from "./userPanel.jsx";

const DogAdoptForm = () => {
    return (
        <div className="container-main">
            <header className="dogCvHeader">
                <div className="localName"></div>
            </header>
            <div className="aside">
                <a href={'userPanel.html'} className="aside-content">galeria psów</a>
                <a href={'reservedDogs.html'} className="aside-content">Zarezerwowane psy</a>
                <a href={'weather.html'} className="aside-content">pogoda</a>
                <a href={'calculator.html'} className="aside-content">kalkulator</a>
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

const dududupson = document.querySelector('.userPanel')

const root = createRoot(dududupson)
root.render(<DogAdoptForm/>)
export default DogAdoptForm;