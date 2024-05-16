import React, { useEffect, useState } from 'react';
import { createRoot } from "react-dom/client";

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

    // Funkcja obsługująca kliknięcie w obrazek psa
    const handleDogClick = (dogName, imageUrl) => {
        // Zapisz imię psa do lokalnego przechowywania (localStorage)
        localStorage.setItem('selectedDogName', dogName);
        // Zapisz URL obrazka psa do lokalnego przechowywania (localStorage)
        localStorage.setItem('selectedDogImageUrl', imageUrl);
    };

    return (
        <div className="container-main">
            <header className="dogCvHeader">
                <div className="localName">Witaj! {username}</div>
            </header>
            {/*boczny pasek (nakładka)*/}
            <div className="aside">

                <a href={'reservedDogs.html'} className="aside-content">Zarezerwowane psy</a>
                <a href={'weather.html'} className="aside-content">pogoda</a>
                <a href={'calculator.html'} className="aside-content">kalkulator</a>

            </div>
            <div className="userPanelMainContent">
                <div className="userPanelDogCards">
                    <a href="dogCv.html" onClick={() => handleDogClick("brajan", "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg")}>
                        <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" alt="" />
                        <p><div className={'dogName1'}>brajan</div></p>
                    </a>
                </div>
                <div className="userPanelDogCards">
                    <a href="dogCv.html" onClick={() => handleDogClick("dudek", "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*")}>
                        <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*" alt="" />
                        <p><div className={'dogName2'}>dudek</div></p>
                    </a>
                </div>
                <div className="userPanelDogCards">
                    <a href="dogCv.html" onClick={() => handleDogClick("alojzy", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445")}>
                        <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" alt="" />
                        <p><div className={'dogName3'}>alojzy</div></p>
                    </a>
                </div>
                <div className="userPanelDogCards">
                    <a href="dogCv.html" onClick={() => handleDogClick("marek", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445")}>
                        <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" alt="" />
                        <p><div className={'dogName4'}>marek</div></p>
                    </a>
                </div>
                <div className="userPanelDogCards">
                    <a href="dogCv.html" onClick={() => handleDogClick("mieniu", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9d7B1q2N8oAorqXC8zdbbVqJYKJjbWDGyd_KdfSncBQ&s")}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9d7B1q2N8oAorqXC8zdbbVqJYKJjbWDGyd_KdfSncBQ&s" alt="" />
                        <p><div className={'dogName5'}>mieniu</div></p>
                    </a>
                </div>
                <div className="userPanelDogCards">
                    <a href="dogCv.html" onClick={() => handleDogClick("czorej", "https://b1157417.smushcdn.com/1157417/wp-content/uploads/2023/06/cute-french-bulldog-close-up-eye-contact-outdoors-825x550.jpg?lossy=1&strip=1&webp=0")}>
                        <img src="https://b1157417.smushcdn.com/1157417/wp-content/uploads/2023/06/cute-french-bulldog-close-up-eye-contact-outdoors-825x550.jpg?lossy=1&strip=1&webp=0" alt="" />
                        <p><div className={'dogName6'}>czorej</div></p>
                    </a>
                </div>
                <div className="userPanelDogCards">
                    <a href="dogCv.html" onClick={() => handleDogClick("kraus", "https://media.wired.com/photos/65651b7225ccbd8cc7d5403c/master/pass/Science-Life-Extension-Drug-for-Big-Dogs-Is-Getting-Closer-1330545769.jpg")}>
                        <img src="https://media.wired.com/photos/65651b7225ccbd8cc7d5403c/master/pass/Science-Life-Extension-Drug-for-Big-Dogs-Is-Getting-Closer-1330545769.jpg" alt="" />
                        <p><div className={'dogName7'}>kraus</div></p>
                    </a>
                </div>
                <div className="userPanelDogCards">
                    <a href="dogCv.html" onClick={() => handleDogClick("kapen", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QAflBhYPp957wxpJ-Q0bbssUBEKkSrCPmRZLn6-qHA&s")}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QAflBhYPp957wxpJ-Q0bbssUBEKkSrCPmRZLn6-qHA&s" alt="" />
                        <p><div className={'dogName8'}>kapen</div></p>
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
