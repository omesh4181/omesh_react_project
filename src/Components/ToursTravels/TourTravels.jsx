import  { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faVideo,faMapLocationDot,faIndianRupeeSign,faTruckPlane,faHotel,faCartPlus,faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faHome} title="Syntax" /> <span>Home</span>
          </Link>
        </div>
        <div className="nav-button">
          <Link to='/videos'>
          
          <FontAwesomeIcon icon={faVideo} title="Videos" /> <span>Videos</span>
          </Link>
        </div>
        <hr className="bg-secondary" />
        <div className="nav-button">
            <Link to='./'>
                <FontAwesomeIcon icon={faMapLocationDot} /> <span>Map</span>
            </Link>
        </div>
        <hr className="bg-secondary" />
        <div className="nav-button">
            <Link to='/payment'>
                <FontAwesomeIcon icon={faIndianRupeeSign} title="Payment" /><span>Payment</span>
            </Link>
        </div>
        <div className="nav-button">
            <Link to='/Rentelvechile'>
                <FontAwesomeIcon icon={faTruckPlane} title="Rental" /> <span>Rental Vehicle</span>
            </Link>
        </div>
        <hr className="bg-secondary" />
        <div className="nav-button">
            <Link to='/Hotel'>
                <FontAwesomeIcon icon={faHotel} title="Hotel" /> <span>Hotels</span>
            </Link>
        </div>
        <div className="nav-button">
            <Link to='/Addplace'>
                <FontAwesomeIcon icon={faCartPlus} title="AddPlaces" /> <span>Add Places</span>
            </Link>
        </div>
         <hr className="bg-secondary" />
         <div className="nav-button">
            <Link to='/'>
                <FontAwesomeIcon icon={faRightFromBracket} title="AddPlaces" /> <span>Logout</span>
            </Link>
        </div> 
        {/* <div className="nav-button">
          <FontAwesomeIcon icon={faGem} /> <span>CodePen Pro</span>
        </div>  */}
      </div>
    </div>
  );
};

export default Sidebar;



