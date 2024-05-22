import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Weather from "./weather.jsx";
import '../pages/_dogCalendar.scss';

const DogCalendar = () => {
    const [userData, setUserData] = useState(() => {
        const storedUserData = localStorage.getItem('userData');
        return storedUserData ? JSON.parse(storedUserData) : null;
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (!userData) {
            navigate('/login');
        }
    }, [userData, navigate]);

    const handleDayClick = (date) => {
        if (!userData || !userData.selectedDogName || !userData.selectedDogImageUrl) return;

        const updatedSelectedDates = { ...userData.selectedDates };
        const dogName = userData.selectedDogName;

        if (!updatedSelectedDates[dogName]) {
            updatedSelectedDates[dogName] = [];
        }

        updatedSelectedDates[dogName] = updatedSelectedDates[dogName].includes(date)
            ? updatedSelectedDates[dogName].filter(d => d !== date)
            : [...updatedSelectedDates[dogName], date];

        const updatedUserData = {
            ...userData,
            selectedDates: updatedSelectedDates,
        };
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
        setUserData(updatedUserData);
    };

    const isDateSelected = (date) => {
        return userData?.selectedDates?.[userData.selectedDogName]?.includes(date);
    };

    const handleLogout = () => {
        localStorage.removeItem('userData');
        localStorage.removeItem('adoptedDogs');
        navigate('/login');
    };

    return (
        <div className="container-main-dogCalendar">
            <header className="dogCalendarHeader">
                <div className="localName">Kalendarz rezerwacji psa</div>
                <button className='dogCalendarButton' onClick={handleLogout}>Wyloguj</button>
            </header>
            <div className="asideDogCalendar">
                <Link to="/userPanel" className="asideDogCalendar-content">galeria psów</Link>
                <Link to="/reservedDogs" className="asideDogCalendar-content">Zarezerwowane psy</Link>
                <Link to="/calculator" className="asideDogCalendar-content">kalkulator</Link>
                <div className="weather">
                    <Weather />
                </div>
            </div>

            <div className="dogCalendar">
                <div className="dogCalendarDate">Zarezerwój psy na 02.2025</div>
                <div className="dogCalendarWeek">week1
                    <button
                        className={isDateSelected('01.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('01.02')}
                    >
                        poniedziałek <br />01.02
                    </button>
                    <button
                        className={isDateSelected('02.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('02.02')}
                    >
                        wtorek <br />02.02
                    </button>
                    <button
                        className={isDateSelected('03.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('03.02')}
                    >
                        środa <br />03.02
                    </button>
                    <button
                        className={isDateSelected('04.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('04.02')}
                    >
                        czwartek <br />04.02
                    </button>
                    <button
                        className={isDateSelected('05.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('05.02')}
                    >
                        piątek <br />05.02
                    </button>
                    <button
                        className={isDateSelected('06.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('06.02')}
                    >
                        sobota <br />06.02
                    </button>
                    <button
                        className={isDateSelected('07.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('07.02')}
                    >
                        niedziela <br />07.02
                    </button>
                </div>
                <div className="dogCalendarWeek">week2
                    <button
                        className={isDateSelected('08.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('08.02')}
                    >
                        poniedziałek <br />08.02
                    </button>
                    <button
                        className={isDateSelected('09.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('09.02')}
                    >
                        wtorek <br />09.02
                    </button>
                    <button
                        className={isDateSelected('10.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('10.02')}
                    >
                        środa <br />10.02
                    </button>
                    <button
                        className={isDateSelected('11.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('11.02')}
                    >
                        czwartek <br />11.02
                    </button>
                    <button
                        className={isDateSelected('12.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('12.02')}
                    >
                        piątek <br />12.02
                    </button>
                    <button
                        className={isDateSelected('13.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('13.02')}
                    >
                        sobota <br />13.02
                    </button>
                    <button
                        className={isDateSelected('14.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('14.02')}
                    >
                        niedziela <br />14.02
                    </button>
                </div>
                <div className="dogCalendarWeek">week3
                    <button
                        className={isDateSelected('15.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('15.02')}
                    >
                        poniedziałek <br />15.02
                    </button>
                    <button
                        className={isDateSelected('16.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('16.02')}
                    >
                        wtorek <br />16.02
                    </button>
                    <button
                        className={isDateSelected('17.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('17.02')}
                    >
                        środa <br />17.02
                    </button>
                    <button
                        className={isDateSelected('18.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('18.02')}
                    >
                        czwartek <br />18.02
                    </button>
                    <button
                        className={isDateSelected('19.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('19.02')}
                    >
                        piątek <br />19.02
                    </button>
                    <button
                        className={isDateSelected('20.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('20.02')}
                    >
                        sobota <br />20.02
                    </button>
                    <button
                        className={isDateSelected('21.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('21.02')}
                    >
                        niedziela <br />21.02
                    </button>
                </div>
                <div className="dogCalendarWeek">week4
                    <button
                        className={isDateSelected('22.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('22.02')}
                    >
                        poniedziałek <br />22.02
                    </button>
                    <button
                        className={isDateSelected('23.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('23.02')}
                    >
                        wtorek <br />23.02
                    </button>
                    <button
                        className={isDateSelected('24.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('24.02')}
                    >
                        środa <br />24.02
                    </button>
                    <button
                        className={isDateSelected('25.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('25.02')}
                    >
                        czwartek <br />25.02
                    </button>
                    <button
                        className={isDateSelected('26.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('26.02')}
                    >
                        piątek <br />26.02
                    </button>
                    <button
                        className={isDateSelected('27.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('27.02')}
                    >
                        sobota <br />27.02
                    </button>
                    <button
                        className={isDateSelected('28.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('28.02')}
                    >
                        niedziela <br />28.02
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DogCalendar;
