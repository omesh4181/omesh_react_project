import  { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faVideo, faGamepad, faPuzzlePiece, faRobot, faLaptopCode, faCaretUp,faMap } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css"; // Custom styling
import './ToursTravels.css'
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const [footerExpanded, setFooterExpanded] = useState(false);

  return (
    <div className={`d-flex flex-column bg-dark text-light p-3 ${isExpanded ? "expanded" : "collapsed"}`} id="nav-bar">
      {/* Navbar Header */}
      <div className="d-flex align-items-center justify-content-between">
        {/* <a href="https://codepen.io" target="_blank" className="text-light text-decoration-none fs-4">
          C<FontAwesomeIcon icon={faCodepen} />DEPEN
        </a> */}
        <button className="btn btn-sm btn-outline-light" id="menu" onClick={() => setIsExpanded(!isExpanded)}>
          ☰
        </button>
      </div>
      <hr className="bg-secondary" />

      {/* Navbar Content */}
      <div className="nav-content">
        <div className="nav-button">
          <Link to='/syntax'>
          <FontAwesomeIcon icon={faCode} title="Syntax" /> <span>Home</span>
          </Link>
        </div>
        <div className="nav-button">
          <Link to='/videos'>
          
          <FontAwesomeIcon icon={faVideo} title="Videos" /> <span>Videos</span>
          </Link>
        </div>
        <div className="nav-button">
          <Link to='/puzzels'>
          
          <FontAwesomeIcon icon={faGamepad} title="Games" /> <span>Games</span>
          </Link>
        </div>
        <hr className="bg-secondary" />
        <div className="nav-button">
          <Link to='/puzzels'>
          <FontAwesomeIcon icon={faPuzzlePiece} title="Puzzels" /> <span>Puzzels</span>
          
          </Link>
        </div>
        <div className="nav-button">
          <Link to='/AI'>
          
          <FontAwesomeIcon icon={faRobot} title="AI" /> <span></span>
          </Link>
        </div>
        <div className="nav-button">
          <Link to='/compailer'>
          <FontAwesomeIcon icon={faLaptopCode} title="Compailer" /> <span></span>
          </Link>
        </div>
        <div className="nav-button">
            <Link to='./'>
                <FontAwesomeIcon icon={faMap} /> <span>Map</span>
            </Link>
        </div>
        <hr className="bg-secondary" />
        {/* <div className="nav-button">
            <Link to='./'>
                <FontAwesomeIcon icon={faPayment} /> <span>Payment</span>
            </Link>
        </div>
        <div className="nav-button">
            <Link to='./'>
                <FontAwesomeIcon icon={faRental} /> <span>Rental Vehicle</span>
            </Link>
        </div> */}
        {/* <div className="nav-button">
          <FontAwesomeIcon icon={faGem} /> <span>CodePen Pro</span>
        </div>  */}
      </div>
    </div>
  );
};

export default Sidebar;



// import React from "react";
// import {Link} from 'react-router-dom';
// import "./ToursTravels.css";



// function TourTravels(){
//     return (
//         <nav className="nav flex-column">
//             <Link className="nav-link active" aria-current="page" to="#">Active</Link>
//             <Link className="nav-link" to="#">Link</Link>
//             <Link className="nav-link" to="#">Link</Link>
//             <Link className="nav-link disabled" aria-disabled="true" to="#">Disabled</Link>
//         </nav>
//     );
// }
// export default TourTravels;