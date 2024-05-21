import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import '../pages/_weather.scss';

const apiKey = 'XRqnOs9+NKymcMEkekhr3g==nD3VIVUDcy0o3uvI';
const city = 'Bydgoszcz';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setWeatherData(data);
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
    }, []);

    return (
        <div className="container-main">
            <header className="dogCvHeader">
                <div className="localName">Sprawdź pogode na dziś!</div>
            </header>
            <div className="aside">
                <Link to="/userPanel" className="aside-content">Galeria psów</Link>
                <Link to="/reservedDogs" className="aside-content">Zarezerwowane psy</Link>
                <Link to="/calculator" className="aside-content">Kalkulator</Link>
            </div>
            <div className="weather">
                {weatherData ? (
                    <div>
                        <h2>Pogoda w {city}</h2>
                        <p>Temperatura: {weatherData.temp}°C</p>
                        <p>Prędkość wiatru: {weatherData.wind_speed} m/s</p>
                    </div>
                ) : (
                    <p>Ładowanie...</p>
                )}
            </div>
        </div>
    );
};



export default App;
