import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const Calculator = () => {
    const [showDiseaseOptions, setShowDiseaseOptions] = useState(false);
    const [showSleepOptions, setShowSleepOptions] = useState(false);
    const [showShampooOptions, setShowShampooOptions] = useState(false);
    const [diseaseType, setDiseaseType] = useState('');
    const [sleepType, setSleepType] = useState('');
    const [dogSize, setDogSize] = useState('');
    const [shampooType, setShampooType] = useState('');
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

    const [additionalCost, setAdditionalCost] = useState(0);

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
            // Resetujemy wybrany typ choroby
            diseaseType: ''
        }));
    };

    const handleSleepCheckboxChange = () => {
        setShowSleepOptions(prevState => !prevState);
        setCheckboxesChecked(prevState => ({
            ...prevState,
            sleep: !prevState.sleep,
            // Resetujemy wybrane miejsce do spania dla psa
            sleepType: ''
        }));
    };

    const handleShampooCheckboxChange = () => {
        setShowShampooOptions(prevState => !prevState);
        setCheckboxesChecked(prevState => ({
            ...prevState,
            shampoo: !prevState.shampoo
        }));
    };

    const handleCheckboxChange = (option) => {
        setCheckboxesChecked(prevState => ({
            ...prevState,
            [option]: !prevState[option]
        }));
    };

    const handleSelectAll = () => {
        setCheckboxesChecked({
            disease: true,
            sleep: true,
            shampoo: true,
            monthlyFood: true,
            muzzle: true,
            leash: true,
            collar: true,
        });
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

    const calculateAdditionalCost = () => {
        let cost = 0;
        if (dogSize === 'duzy') {
            cost += additionalCost * 2;
        } else if (dogSize === 'maly') {
            cost += additionalCost / 2;
        } else {
            cost += additionalCost;
        }

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

        return cost;
    };

    const handleCalculate = () => {
        let cost = 0;
        if (checkboxesChecked.monthlyFood) cost += 20;
        if (checkboxesChecked.collar) cost += 20;
        if (checkboxesChecked.muzzle) cost += 20;
        if (checkboxesChecked.leash) cost += 20;
        setAdditionalCost(cost);
    };

    return (
        <div className="container-main">
            <header className="dogCvHeader">
                <div className="localName"></div>
            </header>
            <div className="aside">
                <button className="aside-content"><a href="userPanel.html">galeria psów</a></button>
                <div className="aside-content">Zarezerwowane psy</div>
                <div className="aside-content">pogoda</div>
            </div>
            <div className="calculator">
                <div>
                    <form>
                        <select className="calulatorSelect" value={dogSize} onChange={handleDogSizeChange}>
                            <option>wybierz wielkość psa:</option>
                            <option>duzy</option>
                            <option>maly</option>
                            <option>sredni</option>
                        </select> <br/>

                        <div>
                            <input
                                className="calculatorInput"
                                type="checkbox"
                                id="shampooCheckbox"
                                onChange={handleShampooCheckboxChange}
                            />
                            <label htmlFor="shampooCheckbox">szampon</label>
                        </div>

                        {showShampooOptions && (
                            <select className="calculatorSelect" onChange={handleShampooTypeChange}>
                                <option>wybierz rodzaj szamponu:</option>
                                <option>włosy</option>
                                <option>sierść</option>
                                <option>łysy</option>
                            </select>
                        )}

                        <div >
                            <input
                                className="calculatorInput"
                                type="checkbox"
                                id="diseaseCheckbox"
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
                                <option value="problemy pokarmowe">problemy pokarmowe</option>
                            </select>
                        )}

                        <div>
                            <input
                                className="calculatorInput"
                                type="checkbox"
                                id="sleepCheckbox"
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
                                onClick={handleSelectAll}
                            >
                                Zaznacz wszystko
                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleClearAll}
                            >
                                Wyczyść
                            </button>

                            <button
                                type="button"
                                className="btn btn-primary float-right"
                                onClick={handleCalculate}
                            >
                                Policz
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col" style={{ maxWidth: '300px' }}>
                    <div className="card bg-light">
                        <div className="card-body">
                            <p className="card-text">szacowane wydatki </p>
                            <p className="card-text order-info">{calculateAdditionalCost()} zł</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const dududupson = document.querySelector('.userPanel');
const root = createRoot(dududupson);
root.render(<Calculator/>);

export default Calculator;
