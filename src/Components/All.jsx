import React from 'react'
import Navbar from './Navbar'
import ImageCarousel from './ImageCarousel'
// import SearchSection from './SearchSection'
import DestinationCards from './DestinationCards'
// import Gallery from './Gallery'
import VideoCard from './VideoCard'
import ContactSection from './ContactSection'
import './Navbar.css'
// import TourTravels from './TourTravels'
const All = () => {
    return (
        <>
            <Navbar />
            <br/>
            <br/>
            <ImageCarousel />
            <DestinationCards />
            <VideoCard />
            <ContactSection />
        </>
    )
}

export default All