import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css';

function Home() {
    return (
        <div className="app">
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <h1>Your Journey, Your Story</h1>
                    </div>
                    <ul className="nav-links1">
                        <li><Link to="#home">Home</Link></li>
                        <li><Link to="#services">Services</Link></li>
                        <li><Link to="#portfolio">Portfolio</Link></li>
                        <li><Link to="#contact">Contact</Link></li>
                        <li><Link to="#about">About</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
            {/* <button type="button" class="btn btn-outline-light">Light</button>
            <button type="button" class="btn btn-outline-dark">Dark</button> */}
                <section id="home" className="hero">
                    <div className="hero-content">
                        <h1>Welcome to </h1>
                        <p>Building modern web experiences with Tours</p>
                        <button className="cta-button">Get Started</button>
                    </div>
                </section>

                <section id="about" className="about">
                    <div className="container">
                        <h2>About Us</h2>
                        <div className="about-content">
                            <div className="about-text">
                                <p>Tours and travels represent more than just moving from one place to another; they are transformative experiences that broaden horizons, create lasting memories, and provide opportunities for personal growth and cultural understanding</p>
                                <p>Whether you're a solo adventurer, a family seeking new experiences, or a group of friends exploring the world, tours and travels offer something unique for everyone..</p>
                            </div>
                            <div className="about-image">
                                {/* Placeholder for an image */}
                                <div className="image-placeholder"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="services">
                    <div className="container">
                        <h2>Our Services</h2>
                        <div className="services-grid">
                            <div className="service-card">
                                <h3>Web Development</h3>
                                <p>Custom web applications built with </p>
                            </div>
                            <div className="service-card">
                                <h3>UI/UX Design</h3>
                                <p>Beautiful and intuitive user interfaces</p>
                            </div>
                            <div className="service-card">
                                <h3>Mobile Apps</h3>
                                <p>React Native solutions for iOS and Android</p>
                            </div>
                            <div className="service-card">
                                <h3>Consulting</h3>
                                <p>Expert advice on your React projects</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <h2>Tour's</h2>
                            <p>Building the web of tomorrow</p>
                        </div>
                        <div className="footer-links">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link to="#home">Home</Link></li>
                                <li><Link to="#about">About</Link></li>
                                <li><Link to="#services">Services</Link></li>
                                <li><Link to="#contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h3>Contact Us</h3>
                            <p>Email: info@reactapp.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>&copy; 2025 ReactApp. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
