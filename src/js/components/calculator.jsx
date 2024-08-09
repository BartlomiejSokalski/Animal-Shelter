import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Weather from "./weather.jsx";
import '../pages/_calculator.scss';

const Calculator = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [showDiseaseOptions, setShowDiseaseOptions] = useState(false);
    const [showSleepOptions, setShowSleepOptions] = useState(false);
    const [showShampooOptions, setShowShampooOptions] = useState(false);
    const [diseaseType, setDiseaseType] = useState('');
    const [sleepType, setSleepType] = useState('');
    const [dogSize, setDogSize] = useState('');
    const [shampooType, setShampooType] = useState('');
    const [additionalCost, setAdditionalCost] = useState(0);
    const [checkboxesChecked, setCheckboxesChecked] = useState({
        disease: false,
        sleep: false,
        shampoo: false,
        monthlyFood: false,
        muzzle: false,
        leash: false,
        collar: false,
    });
// dropdowny
    const handleShampooTypeChange = (event) => {
        setShampooType(event.target.value);
    };

    const handleDiseaseTypeChange = (event) => {
        setDiseaseType(event.target.value);
    };

    const handleSleepTypeChange = (event) => {
        setSleepType(event.target.value);
    };
// wybieranie
    const handleDiseaseCheckboxChange = () => {
        setShowDiseaseOptions(prevState => !prevState);
        setCheckboxesChecked(prevState => ({
            ...prevState,
            disease: !prevState.disease,
        }));
        setDiseaseType('');
    };

    const handleSleepCheckboxChange = () => {
        setShowSleepOptions(prevState => !prevState);
        setCheckboxesChecked(prevState => ({
            ...prevState,
            sleep: !prevState.sleep,
        }));
        setSleepType('');
    };

    const handleShampooCheckboxChange = () => {
        setShowShampooOptions(prevState => !prevState);
        setCheckboxesChecked(prevState => ({
            ...prevState,
            shampoo: !prevState.shampoo,
        }));
    };

    const handleCheckboxChange = (option) => {
        setCheckboxesChecked(prevState => ({
            ...prevState,
            [option]: !prevState[option],
        }));
    };

// checkboxy

    useEffect(() => {
        let cost = 0;
        if (checkboxesChecked.monthlyFood) cost += 20;
        if (checkboxesChecked.collar) cost += 20;
        if (checkboxesChecked.muzzle) cost += 20;
        if (checkboxesChecked.leash) cost += 20;

        if (checkboxesChecked.shampoo) {
            if (showShampooOptions && shampooType === 'włosy') {
                cost += 60;
            } else if (showShampooOptions && shampooType === 'sierść') {
                cost += 40;
            } else if (showShampooOptions && shampooType === 'łysy') {
                cost += 0;
            }
        }
// zliczanie swich
        if (checkboxesChecked.disease && diseaseType) {
            switch (diseaseType) {
                case 'białaczka':
                    cost += 200;
                    break;
                case 'epilepsja':
                    cost += 150;
                    break;
                case 'padaczka':
                    cost += 250;
                    break;
                case 'problemy sercowe':
                    cost += 500;
                    break;
                case 'problemy z nerkami':
                    cost += 300;
                    break;
                case 'nowotwór':
                    cost += 130;
                    break;
                case 'problemy pokarmowe':
                    cost += 100;
                    break;
                default:
                    break;
            }
        }

        if (checkboxesChecked.sleep && sleepType) {
            switch (sleepType) {
                case 'buda':
                    cost += 400;
                    break;
                case 'legowisko':
                    cost += 150;
                    break;
                default:
                    break;
            }
        }

        setAdditionalCost(cost);
    }, [checkboxesChecked, shampooType, diseaseType, sleepType, dogSize, showShampooOptions, showDiseaseOptions, showSleepOptions]);
// username
    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        const storedUsername = storedUserData ? JSON.parse(storedUserData).username : null;
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);
// logout
    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('adoptedDogs');
        navigate('/login');
    };

    return (
        <div className="container-main-calculator">
            <header className="calculatorHeader">
                <div className="localName">{username && `Witaj, ${username}! tutaj możesz obliczyć ile mniej więcej kosztuje utrzymanie psa`}</div>
                <button className={'calculatorButton'} onClick={handleLogout}>Wyloguj</button>
            </header>
            <div className="asideCalculator">
                <Link to="/userPanel" className="asideCalculator-content">galeria psów</Link>
                <Link to="/reservedDogs" className="asideCalculator-content">Zarezerwowane psy</Link>
                <div className="weather">
                    <Weather />
                </div>
                <div className={'userNameAside-pretty'}></div>
            </div>
            <div className="calculator">
            <div>
                    <form>
                        <div className="checkbox-wrapper">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={checkboxesChecked.shampoo}
                                    onChange={handleShampooCheckboxChange}
                                />
                                <span className="checkbox-custom"></span>
                                <p>Szampon</p>
                            </label>
                        </div>
                        {showShampooOptions && (
                            <select className="calculatorSelect" value={shampooType} onChange={handleShampooTypeChange}>
                                <option>wybierz rodzaj szamponu:</option>
                                <option>włosy</option>
                                <option>sierść</option>
                                <option>łysy</option>
                            </select>
                        )}
                        <div className="checkbox-wrapper">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={checkboxesChecked.disease}
                                    onChange={handleDiseaseCheckboxChange}
                                />
                                <span className="checkbox-custom"></span>
                                <p>Choroby</p>
                            </label>
                        </div>
                        {showDiseaseOptions && (
                            <select className="calculatorSelect" value={diseaseType} onChange={handleDiseaseTypeChange}>
                                <option value="">wybierz chorobę:</option>
                                <option value="białaczka">białaczka</option>
                                <option value="epilepsja">epilepsja</option>
                                <option value="padaczka">padaczka</option>
                                <option value="problemy sercowe">problemy sercowe</option>
                                <option value="problemy z nerkami">problemy z nerkami</option>
                                <option value="nowotwór">nowotwór</option>
                                <option value="problemy pokarmowe">problemy pokarmowe</option>
                            </select>
                        )}
                        <div className="checkbox-wrapper">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={checkboxesChecked.sleep}
                                    onChange={handleSleepCheckboxChange}
                                />
                                <span className="checkbox-custom"></span>
                                <p>Spanie dla pieska</p>
                            </label>
                        </div>
                        {showSleepOptions && (
                            <select className="calculatorSelect" value={sleepType} onChange={handleSleepTypeChange}>
                                <option value="">wybierz miejsce do spania:</option>
                                <option value="legowisko">legowisko</option>
                                <option value="buda">buda</option>
                            </select>
                        )}
                        <div className="checkbox-wrapper">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={checkboxesChecked.monthlyFood}
                                    onChange={() => handleCheckboxChange('monthlyFood')}
                                />
                                <span className="checkbox-custom"></span>
                                <p>Miesięczny zapas karmy</p>
                            </label>
                        </div>
                        <div className="checkbox-wrapper">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={checkboxesChecked.muzzle}
                                    onChange={() => handleCheckboxChange('muzzle')}
                                />
                                <span className="checkbox-custom"></span>
                                <p>Kaganiec</p>
                            </label>
                        </div>
                        <div className="checkbox-wrapper">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={checkboxesChecked.leash}
                                    onChange={() => handleCheckboxChange('leash')}
                                />
                                <span className="checkbox-custom"></span>
                                <p>Smycz</p>
                            </label>
                        </div>
                        <div className="checkbox-wrapper">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={checkboxesChecked.collar}
                                    onChange={() => handleCheckboxChange('collar')}
                                />
                                <span className="checkbox-custom"></span>
                                <p>Obroża</p>
                            </label>
                        </div>

                    </form>
                </div>
                <div className="col" style={{ maxWidth: '300px' }}>
                    <div className="card bg-light">
                        <div className="card-body">
                            <p className="card-text">Szacowane wydatki</p>
                            <p className="card-text order-info">{additionalCost} zł</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
