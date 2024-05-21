import React from "react";
import { BrowserRouter, Route,  Routes, Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <div className="container-main">
                {/* landing page */}
                <header className="header-main">
                    <div className="header-logo">
                        <img className="paw-logo" src="src/icons/paw-solid.svg" alt="" />
                        <button className="btn-logo">Animal Shelter</button>
                    </div>
                    <div className="header-hrefs">
                        <button className="btn-header">Dlaczego my?</button>
                        <button className="btn-header">Pies</button>
                        <button className="btn-header">Kontakt</button>
                        <Link to="/login" className="btn-header">Zaloguj</Link> {/* Użyj komponentu Link zamiast znacznika <a> */}
                    </div>
                </header>
                <div className="header-main-img"><img src="src/images/dogs.jpg" alt="" /></div>
                <footer className="footer-main">footer text</footer>
            </div>
        </>
    )
}

export default LandingPage;
