import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Weather from "./weather.jsx";
import '../pages/_dogAdoptForm.scss';

const DogAdoptForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [formData, setFormData] = useState({
        dog: '',
        food: false,
        collar: false,
        leash: false,
        firstName: '',
        lastName: '',
        street: '',
        houseNumber: '',
        email: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        navigate('/login');
    };

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const validate = () => {
        const newErrors = {};
        if (!formData.dog) newErrors.dog = 'Wybierz psa';
        if (!formData.firstName) newErrors.firstName = 'Podaj imię';
        if (!formData.lastName) newErrors.lastName = 'Podaj nazwisko';
        if (!formData.street) newErrors.street = 'Podaj ulicę';
        if (!formData.houseNumber) newErrors.houseNumber = 'Podaj numer domu';
        if (!formData.email) newErrors.email = 'Podaj adres email';
        if (!formData.phone) newErrors.phone = 'Podaj numer telefonu';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Perform the adoption action
            alert('Formularz został przesłany!');
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <div className="container-main-dogAdoptForm">
            <header className="dogAdoptFormHeader">
                <div className="localName">{username && ` ${username} już zaraz psiak będzie twój `}</div>
                <button onClick={handleLogout}>Wyloguj</button>
            </header>
            <div className="asideDogAdoptForm">
                <Link to={'/userPanel'} className="asideDogAdoptForm-content">galeria psów</Link>
                <Link to={'/reservedDogs'} className="asideDogAdoptForm-content">Zarezerwowane psy</Link>
                <Link to={'/calculator'} className="asideDogAdoptForm-content">kalkulator</Link>
                <div className="weather">
                    <Weather />
                </div>
            </div>
            <form className="dogAdoptionForm" onSubmit={handleSubmit}>
                <div className="dogAdoptionFormSelect">
                    <label>dajemy to za free no wez cos</label>
                    <select name="dog" value={formData.dog} onChange={handleChange}>
                        <option value="select"></option>
                        <option value="brajan">brajan</option>
                        <option value="kubson">kubson</option>
                    </select>
                    {errors.dog && <div className="error">{errors.dog}</div>}
                    <div className="dogAdoptionFormCheckbox">
                        <input type="checkbox" name="food" checked={formData.food} onChange={handleChange} /> miesięczny zapas karmy
                        <input type="checkbox" name="collar" checked={formData.collar} onChange={handleChange} /> dopasowana obroża
                        <input type="checkbox" name="leash" checked={formData.leash} onChange={handleChange} /> dopasowana smycz
                    </div>
                    <div className="dogAdoptionFormOwner">Dane właściciela
                        <div className="dogAdoptionFormInput">
                            <label>imie</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                            {errors.firstName && <div className="error">{errors.firstName}</div>}
                            <label>nazwisko</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                            {errors.lastName && <div className="error">{errors.lastName}</div>}
                            <br />
                            <label>ulica</label>
                            <input type="text" name="street" value={formData.street} onChange={handleChange} />
                            {errors.street && <div className="error">{errors.street}</div>}
                            <label>nr domu</label>
                            <input type="text" name="houseNumber" value={formData.houseNumber} onChange={handleChange} />
                            {errors.houseNumber && <div className="error">{errors.houseNumber}</div>}
                            <br />
                            <label>adres email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                            {errors.email && <div className="error">{errors.email}</div>}
                            <label>telefon</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                            {errors.phone && <div className="error">{errors.phone}</div>}
                        </div>
                    </div>
                    <button type="submit">Zaadoptuj</button>
                </div>
            </form>
        </div>
    );
};

export default DogAdoptForm;
