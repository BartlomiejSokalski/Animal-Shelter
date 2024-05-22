import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Weather from "./weather.jsx";
import '../pages/_dogAdoptForm.scss';

const DogAdoptForm = () => {
    const navigate = useNavigate();
    const [adoptedDogs, setAdoptedDogs] = useState([]);
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
        localStorage.removeItem('adoptedDogs');
        navigate('/login');
    };

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedAdoptedDogs = JSON.parse(localStorage.getItem('adoptedDogs')) || [];
        if (storedUsername) {
            setUsername(storedUsername);
        }
        setAdoptedDogs(storedAdoptedDogs);
    }, []);

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName) newErrors.firstName = 'Podaj imię';
        if (!formData.lastName) newErrors.lastName = 'Podaj nazwisko';
        if (!formData.street) newErrors.street = 'Podaj ulicę';
        if (!formData.houseNumber) newErrors.houseNumber = 'Podaj numer domu';
        if (!formData.email) newErrors.email = 'Podaj adres email';
        if (!formData.phone) newErrors.phone = 'Podaj numer telefonu';
        if (!formData.dog) newErrors.dog = 'Wybierz psa do adopcji';
        if (adoptedDogs.includes(formData.dog)) newErrors.dog = 'Ten pies został już zaadoptowany';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAdopt = (e) => {
        e.preventDefault();
        if (validate()) {
            const updatedAdoptedDogs = [...adoptedDogs, formData.dog];
            localStorage.setItem("adoptedDogs", JSON.stringify(updatedAdoptedDogs));
            setAdoptedDogs(updatedAdoptedDogs);
            handleSubmit(e);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let newValue = value;

        if (type === 'checkbox') {
            newValue = checked;
        }

        if (name === 'phone' || name === 'houseNumber') {
            newValue = value.replace(/\D/g, '');
        }

        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Formularz został przesłany!');

    };

    return (
        <div className="container-main-dogAdoptForm">
            <header className="dogAdoptFormHeader">
                <div>już zaraz psiak będzie twój</div>
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
            <form className="dogAdoptionForm">
                <div className="dogAdoptionFormSelect">
                    <select name="dog" value={formData.dog} onChange={handleChange}>
                        <option value="">Wybierz psa</option>
                        <option value="brajan">Brajan</option>
                        <option value="kubson">kubson</option>
                        <option value="alojzy">Alojzy</option>
                        <option value="marek">Marek</option>
                        <option value="mieniu">Mieniu</option>
                        <option value="czorej">Czorej</option>
                        <option value="kraus">Kraus</option>
                        <option value="kapen">Kapen</option>
                    </select>
                    {errors.dog && <div className="error">{errors.dog}</div>}
                    <div className="dogAdoptionFormCheckbox">
                        <input type="checkbox" name="food" checked={formData.food} onChange={handleChange} /> miesięczny zapas karmy
                        <input type="checkbox" name="collar" checked={formData.collar} onChange={handleChange} /> dopasowana obroża
                        <input type="checkbox" name="leash" checked={formData.leash} onChange={handleChange} /> dopasowana smycz
                    </div>
                    <div className="dogAdoptionFormOwner">Dane osoby adopcyjnej:</div>
                    <input type="text" name="firstName" placeholder="Imię" value={formData.firstName} className='dogAdoptionFormOwnerInput' onChange={handleChange} /> <br/>
                    {errors.firstName && <div className="error">{errors.firstName}</div>}
                    <input type="text" name="lastName" placeholder="Nazwisko" value={formData.lastName} className='dogAdoptionFormOwnerInput' onChange={handleChange} /><br/>
                    {errors.lastName && <div className="error">{errors.lastName}</div>}
                    <input type="text" name="street" placeholder="Ulica" value={formData.street} className='dogAdoptionFormOwnerInput' onChange={handleChange} /><br/>
                    {errors.street && <div className="error">{errors.street}</div>}
                    <input type="text" name="houseNumber" placeholder="Numer domu" value={formData.houseNumber} className='dogAdoptionFormOwnerInput' onChange={handleChange} /><br/>
                    {errors.houseNumber && <div className="error">{errors.houseNumber}</div>}
                    <input type="email" name="email" placeholder="Email" value={formData.email} className='dogAdoptionFormOwnerInput' onChange={handleChange} /><br/>
                    {errors.email && <div className="error">{errors.email}</div>}
                    <input type="text" name="phone" placeholder="Telefon" value={formData.phone} className='dogAdoptionFormOwnerInput' onChange={handleChange} /><br/>
                    {errors.phone && <div className="error">{errors.phone}</div>}
                    <button onClick={handleAdopt}>Adoptuj</button>
                </div>
            </form>
        </div>
    );
};

export default DogAdoptForm;
