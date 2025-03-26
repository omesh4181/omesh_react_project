import React, { useState } from 'react';

const HotelBookingApp = () => {
  // Sample hotel data
  const hotels = [
    {
      id: 1,
      name: "Luxury Ocean Resort",
      rating: 4.8,
      price: 299,
      description: "Beachfront luxury resort with stunning ocean views and world-class amenities.",
      location: "Miami Beach, FL",
      amenities: ["Pool", "Spa", "Restaurant", "Gym", "Beach Access"],
      reviews: 382
    },
    
    {
      id: 2,
      name: "Mountain View Lodge",
      rating: 4.5,
      price: 189,
      description: "Cozy mountain retreat with panoramic views and outdoor adventures.",
      location: "Aspen, CO",
      amenities: ["Fireplace", "Hot Tub", "Hiking Trails", "Restaurant"],
      reviews: 245
    },
    {
      id: 3,
      name: "Urban Boutique Hotel",
      rating: 4.6,
      price: 249,
      description: "Stylish downtown hotel with modern amenities and easy access to attractions.",
      location: "New York, NY",
      amenities: ["Rooftop Bar", "Restaurant", "Fitness Center", "Concierge"],
      reviews: 312
    }
  ];

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [dateRange, setDateRange] = useState({ checkIn: "", checkOut: "" });
  const [guests, setGuests] = useState(2);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Generate stars based on rating
  const renderStars = (rating) => {
    let stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="text-yellow-500">✫</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    
    return stars;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Hotel Bookings</h1>
      
      {bookingConfirmed ? (
        <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded mb-4">
          <h2 className="text-xl font-bold">Booking Confirmed!</h2>
          <p>You have successfully booked {selectedHotel.name} for {guests} guests.</p>
          <p>Check-in: {dateRange.checkIn} | Check-out: {dateRange.checkOut}</p>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
            onClick={() => {
              setSelectedHotel(null);
              setBookingConfirmed(false);
            }}
          >
            Book Another Hotel
          </button>
        </div>
      ) : selectedHotel ? (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt={selectedHotel.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">{selectedHotel.name}</h2>
                  <div className="flex items-center">
                    <div className="mr-2">{renderStars(selectedHotel.rating)}</div>
                    <span className="text-sm text-gray-600">({selectedHotel.reviews} reviews)</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{selectedHotel.location}</p>
                <p className="mb-4">{selectedHotel.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Amenities:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedHotel.amenities.map((amenity, index) => (
                      <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-2xl font-bold text-right">
                  ${selectedHotel.price}<span className="text-sm font-normal text-gray-600">/night</span>
                </div>
              </div>
            </div>
            <button 
              className="mt-4 py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 w-full"
              style={{backgroundColor:"black"}}
              onClick={() => setSelectedHotel(null)}
            >
              Back to Hotels
            </button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Book Your Stay</h2>
              <form onSubmit={handleBookingSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Check-in Date</label>
                  <input 
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={dateRange.checkIn}
                    onChange={(e) => setDateRange({...dateRange, checkIn: e.target.value})}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Check-out Date</label>
                  <input 
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={dateRange.checkOut}
                    onChange={(e) => setDateRange({...dateRange, checkOut: e.target.value})}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Number of Guests</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-6">
                  <div className="flex justify-between mb-2">
                    <span>Room rate</span>
                    <span>${selectedHotel.price}/night</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Taxes & fees</span>
                    <span>${Math.round(selectedHotel.price * 0.15)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>${selectedHotel.price + Math.round(selectedHotel.price * 0.15)}</span>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded font-bold mt-6 hover:bg-blue-600"
                  style={{backgroundColor:"black"}}
                >
                  Complete Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map(hotel => (
              <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={`/api/placeholder/400/250`} 
                  alt={hotel.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-bold mb-2">{hotel.name}</h2>
                    <div className="text-lg font-bold">${hotel.price}<span className="text-xs text-gray-600">/night</span></div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{hotel.location}</p>
                  <div className="flex items-center mb-3">
                    <div className="mr-2">{renderStars(hotel.rating)}</div>
                    <span className="text-sm text-gray-600">({hotel.reviews})</span>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm line-clamp-2">{hotel.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs">
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 3 && (
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                        +{hotel.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                  <button 
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    style={{backgroundColor:"black"}}
                    onClick={() => setSelectedHotel(hotel)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HotelBookingApp;