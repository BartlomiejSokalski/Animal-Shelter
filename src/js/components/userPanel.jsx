
import React, { useEffect, useState } from 'react';
import {createRoot} from "react-dom/client";

const UserPanel = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return (
        <div className="container-main">
            <header className="dogCvHeader">
                <div className="localName">{username}</div>
            </header>
            <div className="aside">
                <div className="aside-content"> galeria psów</div>
                <div className="aside-content"> Zarezerwowane psy</div>
                <div className="aside-content"> pogoda</div>
                <div className="aside-content"> kalkulator</div>
                <div> filtry</div>
            </div>
            <div className="userPanelMainContent">
                <div className="userPanelDogCards">
                    <a href="dogCv.html">
                        <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" alt="" />
                        <p>Brajan</p>
                    </a>
                </div>
                {/* Pozostałe karty psów */}
            </div>
        </div>
    );
};


const dududupson = document.querySelector('.userPanel')

const root = createRoot(dududupson)
root.render(<UserPanel/>)
export default UserPanel;