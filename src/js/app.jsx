import React, {useState} from 'react';
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

import LandingPage from "./components/LandingPage.jsx"
import Login from "./components/login.jsx";
import UserPanel from "./components/userPanel.jsx";
import DogCvPage from "./components/dogCv.jsx";
import Calculator from "./components/calculator.jsx";
import ReservedDogs from "./components/reservedDogs.jsx";
import DogCalendar from "./components/dogCalendar.jsx";
import Weather from "./components/weather.jsx";
import DogAdoptForm from "./components/dogAdoptForm.jsx";
import LoginPage from "./components/login.jsx";





function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/userPanel' element={<UserPanel/>}/>
                <Route path='/dogCv' element={<DogCvPage/>}/>
                <Route path='/Calculator' element={<Calculator/>}/>
                <Route path='/reservedDogs' element={<ReservedDogs/>}/>
                <Route path='/dogCalendar' element={<DogCalendar/>}/>
                <Route path='/weather' element={<Weather/>}/>
                <Route path='/dogAdoptForm' element={<DogAdoptForm/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const container = document.querySelector('.container')
const root  = createRoot(container)
root.render(<App/>)
export default App;
