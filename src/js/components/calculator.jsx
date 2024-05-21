import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Link } from 'react-router-dom';
import '../pages/_calculator.scss';

const Calculator = () => {
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

    const handleDogSizeChange = (event) => {
        setDogSize(event.target.value);
    };

    const handleShampooTypeChange = (event) => {
        setShampooType(event.target.value);
    };

    const handleDiseaseTypeChange = (event) => {
        setDiseaseType(event.target.value);
    };

    const handleSleepTypeChange = (event) => {
        setSleepType(event.target.value);
    };

    const handleDiseaseCheckboxChange = () => {
        setShowDiseaseOptions(prevState => !prevState);
        setCheckboxesChecked(prevState => ({
            ...prevState,
            disease: !prevState.disease,
        }));
        setDiseaseType(''); // Resetujemy wybrany typ choroby
    };

    const handleSleepCheckboxChange = () => {
        setShowSleepOptions(prevState => !prevState);
        setCheckboxesChecked(prevState => ({
            ...prevState,
            sleep: !prevState.sleep,
        }));
        setSleepType(''); // Resetujemy wybrane miejsce do spania dla psa
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

    const handleClearAll = () => {
        setCheckboxesChecked({
            disease: false,
            sleep: false,
            shampoo: false,
            monthlyFood: false,
            muzzle: false,
            leash: false,
            collar: false,
        });
    };

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

    return (
        <div className="container-main">
            <header className="calculatorHeader">
                <div className="localName"></div>
            </header>
            <div className="asideCalculator">
                <Link to="/userPanel" className="asideCalculator-content">galeria psów</Link>
                <Link to="/reservedDogs" className="asideCalculator-content">Zarezerwowane psy</Link>
                <Link to="/weather" className="asideCalculator-content">pogoda</Link>
            </div>
            <div className="calculator">
                <div>
                    <form>
                        <div>
                            <input
                                className="calculatorInput"
                                type="checkbox"
                                id="shampooCheckbox"
                                checked={checkboxesChecked.shampoo}
                                onChange={handleShampooCheckboxChange}
                            />
                            <label htmlFor="shampooCheckbox">szampon</label>
                        </div>

                        {showShampooOptions && (
                            <select className="calculatorSelect" value={shampooType} onChange={handleShampooTypeChange}>
                                <option>wybierz rodzaj szamponu:</option>
                                <option>włosy</option>
                                <option>sierść</option>
                                <option>łysy</option>
                            </select>
                        )}

                        <div>
                            <input
                                className="calculatorInput"
                                type="checkbox"
                                id="diseaseCheckbox"
                                checked={checkboxesChecked.disease}
                                onChange={handleDiseaseCheckboxChange}
                            />
                            <label htmlFor="diseaseCheckbox">Choroby</label>
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
                                <option value="prolemy pokarmowe">problemy pokarmowe</option>
                            </select>
                        )}

                        <div>
                            <input
                                className="calculatorInput"
                                type="checkbox"
                                id="sleepCheckbox"
                                checked={checkboxesChecked.sleep}
                                onChange={handleSleepCheckboxChange}
                            />
                            <label htmlFor="sleepCheckbox">spanie dla pieska</label>
                        </div>

                        {showSleepOptions && (
                            <select className="calculatorSelect" value={sleepType} onChange={handleSleepTypeChange}>
                                <option value="">wybierz miejsce do spania:</option>
                                <option value="legowisko">legowisko</option>
                                <option value="buda">buda</option>
                            </select>
                        )}

                        <div>
                            <input
                                className="calculatorInput"
                                type="checkbox"
                                id="monthlyFoodCheckbox"
                                checked={checkboxesChecked.monthlyFood}
                                onChange={() => handleCheckboxChange('monthlyFood')}
                            />
                            <label htmlFor="monthlyFoodCheckbox">miesięczny zapas karmy</label>
                        </div>

                        <div>
                            <input
                                className="calculatorInput"
                                type="checkbox"
                                id="muzzleCheckbox"
                                checked={checkboxesChecked.muzzle}
                                onChange={() => handleCheckboxChange('muzzle')}
                            />
                            <label htmlFor="muzzleCheckbox">kaganiec</label>
                        </div>

                        <div>
                            <input
                                className="calculatorInput"
                                type="checkbox"
                                id="leashCheckbox"
                                checked={checkboxesChecked.leash}
                                onChange={() => handleCheckboxChange('leash')}
                            />
                            <label htmlFor="leashCheckbox">smycz</label>
                        </div>

                        <div>
                            <input
                                className="calculatorInput"
                                type="checkbox"
                                id="collarCheckbox"
                                checked={checkboxesChecked.collar}
                                onChange={() => handleCheckboxChange('collar')}
                            />
                            <label htmlFor="collarCheckbox">obroża</label>
                        </div>

                        <div className="btn-group mt-2">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleClearAll}
                            >
                                Wyczyść
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col" style={{ maxWidth: '300px' }}>
                    <div className="card bg-light">
                        <div className="card-body">
                            <p className="card-text">szacowane wydatki </p>
                            <p className="card-text order-info">{additionalCost} zł</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;

