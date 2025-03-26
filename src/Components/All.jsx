import React from 'react'
import Navbar from './Navbar/Navbar'
import ImageCarousel from './Landingimg/ImageCarousel'
import DestinationCards from './Destination/DestinationCards'
import VideoCard from './Video/VideoCard'
import ContactSection from './LandingContant/ContactSection'

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
            {/* <ThemeToggle /> */}
        </>
    )
}

export default All