import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import '../pages/_weather.scss';

const apiKey = 'XRqnOs9+NKymcMEkekhr3g==nD3VIVUDcy0o3uvI';
const city = 'Bydgoszcz';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
// pobierz dane z api
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
        <div className="weather-container">
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
    );
};

export default Weather;
