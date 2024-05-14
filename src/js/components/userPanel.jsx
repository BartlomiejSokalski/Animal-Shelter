
import React, { useEffect, useState } from 'react';
import {createRoot} from "react-dom/client";

// Stan przechowujący nazwę użytkownika
const UserPanel = () => {
    const [username, setUsername] = useState('');
// Efekt pobierający nazwę użytkownika z Local Storage przy pierwszym renderowaniu
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
            {/*boczny pasek (nakładka)*/}
            <div className="aside">
                <a href={'userPanel.html'} className="aside-content">galeria psów</a>
                <a href={'reservedDogs.html'} className="aside-content">Zarezerwowane psy</a>
                <a href={'weather.html'} className="aside-content">pogoda</a>
                <a href={'calculator.html'} className="aside-content">kalkulator</a>
                <div> filtry</div>
            </div>
            <div className="userPanelMainContent">
                <div className="userPanelDogCards">
                    <a href="dogCv.html">
                        <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" alt="" />
                        <p>Brajan</p>
                    </a>
                </div>
                <div className="userPanelDogCards">
                    <a href="">
                        <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*" alt=""/>
                        <p>Dudek</p>
                    </a>
                </div>
                <div className="userPanelDogCards">
                    <a href="">
                        <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" alt=""/>
                            <p>alojzy</p>
                        </a>
                    </div>
                <div className="userPanelDogCards">
                    <a href=""><img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" alt=""/>
                        <p>marek</p>
                    </a>
                </div>
                <div className="userPanelDogCards">
                    <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9d7B1q2N8oAorqXC8zdbbVqJYKJjbWDGyd_KdfSncBQ&s" alt=""/>
                        <p>meniu</p>
                    </a>
                </div>
                <div className="userPanelDogCards">
                    <a href="">
                        <img src="https://b1157417.smushcdn.com/1157417/wp-content/uploads/2023/06/cute-french-bulldog-close-up-eye-contact-outdoors-825x550.jpg?lossy=1&strip=1&webp=0" alt=""/>
                        <p>czorej</p>
                    </a>
                </div>
                <div className="userPanelDogCards">
                    <a href="">
                        <img src="https://media.wired.com/photos/65651b7225ccbd8cc7d5403c/master/pass/Science-Life-Extension-Drug-for-Big-Dogs-Is-Getting-Closer-1330545769.jpg" alt=""/>
                        <p>kraus</p>
                    </a>
                </div>
                <div className="userPanelDogCards">
                    <a href="">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QAflBhYPp957wxpJ-Q0bbssUBEKkSrCPmRZLn6-qHA&s" alt=""/>
                        <p>kapen</p>
                    </a>
                </div>

            </div>
        </div>
    );
};


const dududupson = document.querySelector('.userPanel')

const root = createRoot(dududupson)
root.render(<UserPanel/>)
export default UserPanel;