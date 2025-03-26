import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons/css/boxicons.min.css';
import './App.css';
import LoginPage from './Cradentials/Login';
import { Routes, Route } from 'react-router-dom';
import All from './Components/All';
import TourTravels from './Components/ToursTravels/TourTravels';
import Signup from './Cradentials/Sign';
import Home from './Components/HomePage/Home';
import HomeVideos from './Components/HomeVideos/HomeVideos';
import PaymentProcess from './Components/Payment/Payment';
import RentalVehicleProcess from './Components/Rentlvehicle/Rentlvehicle';
import Places from './Components/Addplaces/Addplace';
import HotelBookingApp from './Components/Hotel/Hotel';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<All />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/home' element={<TourTravels />}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/syntax' element={<Home />}></Route>
        <Route path='/videos' element={<HomeVideos/>}></Route>
        <Route path='*' element={<h1>404 -Page Not Found</h1>}></Route> 
        <Route path='Payment' element={<PaymentProcess/>}></Route>
        <Route path='Rentelvechile' element={<RentalVehicleProcess/>}></Route>
        <Route path='Addplace' element={< Places />}></Route>
        <Route path='Hotel' element={<HotelBookingApp/>}></Route>
      </Routes>

    </div>
  );
}

export default App;