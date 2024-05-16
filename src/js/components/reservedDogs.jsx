import React from 'react';
import {createRoot} from "react-dom/client";
import UserPanel from "./userPanel.jsx";

const ReservedDogs = () => {
    return (
        <div className="container-main">
            <header className="dogCvHeader">
                <div className="localName"></div>
            </header>
            <div className="aside">
                <button className="aside-content"><a href="userPanel.html">galeria psów</a></button>
                <div className="aside-content">Zarezerwowane psy</div>
                <div className="aside-content">pogoda</div>
            </div>
        <div className="reservedDogs">
            <div className="reservedDogsNotButtons">
                <div className="reservedDogsList">numer 1
                    <div>imie psa</div>
                    <div>data rezerwacji</div>
                </div>
                <div className="resevedDogsButtons">
                    <button>anuluj rezerwacje</button>
                    <button>edytuj date rezerwacji</button>
                </div>
            </div>

            <div className="reservedDogsNotButtons">
                <div className="reservedDogsList">numer 1
                    <div>imie psa</div>
                    <div>data rezerwacji</div>
                </div>
                <div className="resevedDogsButtons">
                    <button>anuluj rezerwacje</button>
                    <button>edytuj date rezerwacji</button>
                </div>
            </div>
            <div className="reservedDogsNotButtons">
                <div className="reservedDogsList">numer 1
                    <div>imie psa</div>
                    <div>data rezerwacji</div>
                </div>
                <div className="resevedDogsButtons">
                    <button>anuluj rezerwacje</button>
                    <button>edytuj date rezerwacji</button>
                </div>
            </div>
            <div className="reservedDogsNotButtons">
                <div className="reservedDogsList">numer 1
                    <div>imie psa</div>
                    <div>data rezerwacji</div>
                </div>
                <div className="resevedDogsButtons">
                    <button>anuluj rezerwacje</button>
                    <button>edytuj date rezerwacji</button>
                </div>
            </div>
        </div>
            </div>
    );
};
const dududupson = document.querySelector('.userPanel')

const root = createRoot(dududupson)
root.render(<ReservedDogs/>)
export default ReservedDogs;