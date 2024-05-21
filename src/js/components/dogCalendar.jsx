import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../pages/_dogCalendar.scss';

const DogCalendar = () => {
    const [selectedDates, setSelectedDates] = useState(() => {
        const storedDates = localStorage.getItem('selectedDates');
        return storedDates ? JSON.parse(storedDates) : {};
    });

    const handleDayClick = (date) => {
        const selectedDog = localStorage.getItem('selectedDogName');
        const updatedSelectedDates = { ...selectedDates };

        if (!updatedSelectedDates[selectedDog]) {
            updatedSelectedDates[selectedDog] = [];
        }

        updatedSelectedDates[selectedDog] = updatedSelectedDates[selectedDog].includes(date)
            ? updatedSelectedDates[selectedDog].filter(d => d !== date)
            : [...updatedSelectedDates[selectedDog], date];

        localStorage.setItem('selectedDates', JSON.stringify(updatedSelectedDates));
        setSelectedDates(updatedSelectedDates);
    };

    const isDateSelected = (date) => {
        const selectedDog = localStorage.getItem('selectedDogName');
        return selectedDates[selectedDog] && selectedDates[selectedDog].includes(date);
    };

    return (
        <div className="container-main">
            <header className="dogCvHeader">
                <div className="localName">Kalendarz rezerwacji psa</div>
            </header>
            <div className="aside">
                <Link to="/userPanel" className="aside-content">galeria psów</Link>
                <Link to="/reservedDogs" className="aside-content">Zarezerwowane psy</Link>
                <Link to="/weather" className="aside-content">pogoda</Link>
                <Link to="/calculator" className="aside-content">kalkulator</Link>
            </div>

            <div className="dogCalendar">
                <div className="dogCalendarDate">Zarezerwój psy na 02.2025</div>
                <div className="dogCalendarWeek">week1
                    <button
                        className={isDateSelected('01.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('01.02')}
                    >
                        niedziela <br />01.02
                    </button>
                    <button
                        className={isDateSelected('02.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('02.02')}
                    >
                        poniedziałek <br />02.02
                    </button>
                    <button
                        className={isDateSelected('03.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('03.02')}
                    >
                        wtorek <br />03.02
                    </button>
                    <button
                        className={isDateSelected('04.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('04.02')}
                    >
                        środa <br />04.02
                    </button>
                    <button
                        className={isDateSelected('05.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('05.02')}
                    >
                        czwartek <br />05.02
                    </button>
                    <button
                        className={isDateSelected('06.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('06.02')}
                    >
                        piątek <br />06.02
                    </button>
                    <button
                        className={isDateSelected('07.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('07.02')}
                    >
                        sobota <br />07.02
                    </button>
                </div>
                <div className="dogCalendarWeek">week2
                    <button
                        className={isDateSelected('08.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('08.02')}
                    >
                        niedziela <br />08.02
                    </button>
                    <button
                        className={isDateSelected('09.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('09.02')}
                    >
                        poniedziałek <br />09.02
                    </button>
                    <button
                        className={isDateSelected('10.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('10.02')}
                    >
                        wtorek <br />10.02
                    </button>
                    <button
                        className={isDateSelected('11.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('11.02')}
                    >
                        środa <br />11.02
                    </button>
                    <button
                        className={isDateSelected('12.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('12.02')}
                    >
                        czwartek <br />12.02
                    </button>
                    <button
                        className={isDateSelected('13.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('13.02')}
                    >
                        piątek <br />13.02
                    </button>
                    <button
                        className={isDateSelected('14.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('14.02')}
                    >
                        sobota <br />14.02
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
                        niedziela <br />22.02
                    </button>
                    <button
                        className={isDateSelected('23.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('23.02')}
                    >
                        poniedziałek <br />23.02
                    </button>
                    <button
                        className={isDateSelected('24.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('24.02')}
                    >
                        wtorek <br />24.02
                    </button>
                    <button
                        className={isDateSelected('25.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('25.02')}
                    >
                        środa <br />25.02
                    </button>
                    <button
                        className={isDateSelected('26.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('26.02')}
                    >
                        czwartek <br />26.02
                    </button>
                    <button
                        className={isDateSelected('27.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('27.02')}
                    >
                        piątek <br />27.02
                    </button>
                    <button
                        className={isDateSelected('28.02') ? 'dogCalendarDay selected' : 'dogCalendarDay'}
                        onClick={() => handleDayClick('28.02')}
                    >
                        sobota <br />28.02
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DogCalendar;