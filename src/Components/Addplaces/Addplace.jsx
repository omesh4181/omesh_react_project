
import React, { useState } from 'react';
import { BsPlusCircle, BsTrash, BsGeoAlt, BsPerson } from 'react-icons/bs';
import './AddPlace.css';

const Places = () => {
  const [places, setPlaces] = useState([
    {
      id: 1,
      name: 'Manali',
      location: 'India',
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/The-Best-Adventure-Experiences-in-Manali1-popular?qlt=82&ts=1726730921047',
      userName: 'TravelLover22'
    },
    {
      id: 2,
      name: 'Vizag',
      location: 'AndhraPradesh',
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-for-Things-To-Do-In-Andhra-Pradesh-_18th-Dec.jpg',
      userName: 'AsiaExplorer'
    },
    {
      id: 3,
      name: 'Paradise on Earth',
      location: 'Kashmir',
      image: 'https://www.ghumindiaghum.com/blog/wp-content/uploads/2023/03/Neeulm_Valley_AJK.jpg',
      userName: 'AdventureSeeker'
    }
  ]);

  const [newPlace, setNewPlace] = useState({
    name: '',
    location: '',
    image: '',
    userName: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlace(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddPlace = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!newPlace.name || !newPlace.location || !newPlace.userName) {
      alert('Please fill all required fields');
      return;
    }
    
    // Use a placeholder image if none provided
    const imageUrl = newPlace.image || `https://source.unsplash.com/random/300x200/?${newPlace.name.toLowerCase()}`;
    
    const placeToAdd = {
      id: places.length > 0 ? Math.max(...places.map(place => place.id)) + 1 : 1,
      name: newPlace.name,
      location: newPlace.location,
      image: imageUrl,
      userName: newPlace.userName
    };
    
    setPlaces([...places, placeToAdd]);
    
    // Reset form
    setNewPlace({
      name: '',
      location: '',
      image: '',
      userName: ''
    });
    
    setShowForm(false);
  };

  const handleDeletePlace = (id) => {
    if (window.confirm('Are you sure you want to delete this place?')) {
      setPlaces(places.filter(place => place.id !== id));
    }
  };

  return (
    <div className="places-container">
      <div className="places-header">
        <h2>Travel Destinations</h2>
        <button 
          className="add-place-btn"
          onClick={() => setShowForm(!showForm)}
        >
          <BsPlusCircle /> {showForm ? 'Cancel' : 'Add New Place'}
        </button>
      </div>
      
      {showForm && (
        <div className="add-place-form-container">
          <form onSubmit={handleAddPlace} className="add-place-form">
            <div className="form-group">
              <label htmlFor="name">Place Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newPlace.name}
                onChange={handleInputChange}
                placeholder="Enter destination name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={newPlace.location}
                onChange={handleInputChange}
                placeholder="Country/Region"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                id="image"
                name="image"
                value={newPlace.image}
                onChange={handleInputChange}
                placeholder="Enter image URL (optional)"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="userName">Your Username *</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={newPlace.userName}
                onChange={handleInputChange}
                placeholder="Your username"
                required
              />
            </div>
            
            <button type="submit" className="submit-place-btn">Add Destination</button>
          </form>
        </div>
      )}
      
      <div className="places-grid">
        {places.map(place => (
          <div key={place.id} className="place-card">
            <div className="place-image-container">
              <img src={place.image} alt={place.name} className="place-image" />
            </div>
            <div className="place-info">
              <h3>{place.name}</h3>
              <p className="place-location">
                <BsGeoAlt /> {place.location}
              </p>
              <p className="place-user">
                <BsPerson /> {place.userName}
              </p>
            </div>
            <button 
              className="delete-place-btn"
              onClick={() => handleDeletePlace(place.id)}
            >
              <BsTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;



// import React, { useState } from 'react';
// // import {Link} from 'react-router-dom'

// const AddPlace = () => {
//     const [places, setPlaces] = useState([]);
//     const [newPlace, setNewPlace] = useState('');

//     const handleAddPlace = () => {
//         if (newPlace.trim() !== '') {
//             setPlaces([...places, newPlace]);
//             setNewPlace('');
//         }
//     };

//     return (
//         <div>
//             <h2>Add a New Place</h2>
//             <input
//                 type="text"
//                 value={newPlace}
//                 onChange={(e) => setNewPlace(e.target.value)}
//                 placeholder="Enter place name"
//             />
//             <button onClick={handleAddPlace}>Add Place</button>
//             <div>
//                 {places.map((place, index) => (
//                     <div key={index} className="card">
//                         <h3>{place}</h3>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AddPlace;