import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons/css/boxicons.min.css';
import './App.css';
// import './Components/DestinationCards.css'
import LoginPage from './Components/Login';
import { Routes, Route } from 'react-router-dom';
import All from './Components/All';
import TourTravels from './Components/TourTravels';
import Signup from './Components/Sign';
// import Login from './Components/Login'
// import ImageCarousel from './Components/ImageCarousel';
import Home from './Components/Home';
import HomeVideos from './Components/HomeVideos';



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
      </Routes>

    </div>
  );
}

export default App;