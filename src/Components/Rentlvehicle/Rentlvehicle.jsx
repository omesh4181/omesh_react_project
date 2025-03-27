import React, { useState, useEffect } from 'react';
import { img14 } from '../../assets';
import { useNavigate } from 'react-router-dom';
// import 'Rentlvehicle.css'


const RentalVehicleProcess = () => {
  // State management
  const [step, setStep] = useState(1);
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    licenseNumber: '',
    address: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [confirmation, setConfirmation] = useState(null);
  const navigate = useNavigate();

  const payment = () => {
    navigate('/payment'); // Navigates to the Payment page
  };

  // Mock data - in a real app this would come from an API
  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      setVehicles([
        // { 
        //   id: 1, 
        //   name: 'Economy Car', 
        //   make: 'Toyota', 
        //   model: 'Corolla', 
        //   year: 2023, 
        //   pricePerDay: 45, 
        //   seats: 5, 
        //   transmission: 'Automatic',
        //   fuelType: 'Gasoline',
        //   imageUrl: img14,
        //   available: true
        // },
        // { 
        //   id: 2, 
        //   name: 'SUV', 
        //   make: 'Honda', 
        //   model: 'CR-V', 
        //   year: 2023, 
        //   pricePerDay: 65, 
        //   seats: 5, 
        //   transmission: 'Automatic',
        //   fuelType: 'Gasoline',
        //   imageUrl: '/api/placeholder/300/200',
        //   available: true
        // },
        { 
          id: 3, 
          name: 'Luxury Sedan', 
          make: 'Mercedes', 
          model: 'E-Class', 
          year: 2023, 
          pricePerDay: 95, 
          seats: 5, 
          transmission: 'Automatic',
          fuelType: 'Gasoline',
          imageUrl: '/api/placeholder/300/200',
          available: true
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);


  const handleDateChange = (e) => {
    setDateRange({
      ...dateRange,
      [e.target.name]: e.target.value
    });
  };

  const handleCustomerInfoChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
    setStep(2);
  };

  const handleDateSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleCustomerInfoSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call for booking
    setTimeout(() => {
      setConfirmation({
        confirmationNumber: `RV${Math.floor(Math.random() * 10000)}`,
        vehicleName: selectedVehicle.name,
        pickupDate: dateRange.startDate,
        returnDate: dateRange.endDate,
        totalCost: calculateTotalCost(),
        customerName: `${customerInfo.firstName} ${customerInfo.lastName}`
      });
      setLoading(false);
      setStep(4);
    }, 1500);
  };

  const calculateTotalCost = () => {
    if (!selectedVehicle || !dateRange.startDate || !dateRange.endDate) return 0;
    
    const start = new Date(dateRange.startDate);
    const end = new Date(dateRange.endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    
    return selectedVehicle.pricePerDay * days;
  };

  const goToPreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Render helpers
  const renderVehicleSelection = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Select a Vehicle</h2>
      {loading ? (
        <p className="text-gray-500">Loading vehicles...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map(vehicle => (
            <div 
              key={vehicle.id} 
              className="border rounded-lg p-4 hover:shadow-lg cursor-pointer"
              onClick={() => handleVehicleSelect(vehicle)}
            >
              <img 
                src={vehicle.img13} 
                alt={`${vehicle.make} ${vehicle.model}`} 
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="font-bold">{vehicle.name}</h3>
              <p className="text-gray-600">{vehicle.make} {vehicle.model} ({vehicle.year})</p>
              <p className="text-green-600 font-bold">${vehicle.pricePerDay}/day</p>
              <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-gray-500">
                <span>Seats: {vehicle.seats}</span>
                <span>{vehicle.transmission}</span>
                <span>{vehicle.fuelType}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderDateSelection = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Select Rental Dates</h2>
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h3 className="font-bold">Selected Vehicle:</h3>
        <p>{selectedVehicle.make} {selectedVehicle.model} - {selectedVehicle.name}</p>
        <p className="text-green-600">${selectedVehicle.pricePerDay}/day</p>
      </div>
      <form onSubmit={handleDateSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Pickup Date</label>
          <input 
            type="date" 
            name="startDate"
            value={dateRange.startDate}
            onChange={handleDateChange}
            min={new Date().toISOString().split('T')[0]}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Return Date</label>
          <input 
            type="date" 
            name="endDate"
            value={dateRange.endDate}
            onChange={handleDateChange}
            min={dateRange.startDate || new Date().toISOString().split('T')[0]}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        {dateRange.startDate && dateRange.endDate && (
          <div className="bg-green-50 p-3 rounded">
            <p className="font-bold">Total Cost: ${calculateTotalCost()}</p>
          </div>
        )}
        <div className="flex justify-between pt-4">
          <button 
            type="button" 
            onClick={goToPreviousStep}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            style={{backgroundColor:"red"}}
          >
            Back
          </button>
          <button  
            type="submit" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            style={{backgroundColor:"green"}}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );

  const renderCustomerInfo = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Your Information</h2>
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h3 className="font-bold">Booking Summary:</h3>
        <p>{selectedVehicle.make} {selectedVehicle.model} - {selectedVehicle.name}</p>
        <p>Pickup: {dateRange.startDate}</p>
        <p>Return: {dateRange.endDate}</p>
        <p className="font-bold mt-2">Total: ${calculateTotalCost()}</p>
      </div>
      <form onSubmit={handleCustomerInfoSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">First Name</label>
            <input 
              type="text" 
              name="firstName"
              value={customerInfo.firstName}
              onChange={handleCustomerInfoChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Last Name</label>
            <input 
              type="text" 
              name="lastName"
              value={customerInfo.lastName}
              onChange={handleCustomerInfoChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              value={customerInfo.email}
              onChange={handleCustomerInfoChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Phone</label>
            <input 
              type="tel" 
              name="phone"
              value={customerInfo.phone}
              onChange={handleCustomerInfoChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Driver's License Number</label>
            <input 
              type="text" 
              name="licenseNumber"
              value={customerInfo.licenseNumber}
              onChange={handleCustomerInfoChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1">Address</label>
            <textarea 
              name="address"
              value={customerInfo.address}
              onChange={handleCustomerInfoChange}
              required
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>
        </div>
        <div className="flex justify-between pt-4">
          <button 
            type="button" 
            onClick={goToPreviousStep}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            style={{backgroundColor:"red"}}
          >
            Back
          </button>
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            style={{backgroundColor:"green"}}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Complete Booking'}
          </button>
        </div>
      </form>
    </div>
  );

  const renderConfirmation = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-green-600">Booking Confirmed!</h2>
        <p>Your vehicle has been reserved successfully.</p>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="font-bold text-lg mb-4">Confirmation Details</h3>
        <div className="space-y-2">
          <p><span className="font-semibold">Confirmation #:</span> {confirmation.confirmationNumber}</p>
          <p><span className="font-semibold">Vehicle:</span> {confirmation.vehicleName}</p>
          <p><span className="font-semibold">Customer:</span> {confirmation.customerName}</p>
          <p><span className="font-semibold">Pickup Date:</span> {confirmation.pickupDate}</p>
          <p><span className="font-semibold">Return Date:</span> {confirmation.returnDate}</p>
          <p className="text-lg font-bold mt-4"><span>Total Cost:</span> ${confirmation.totalCost}</p>
        </div>
      </div>
      <p className="text-gray-600 text-center">
        A confirmation email has been sent to {customerInfo.email}
      </p>
      <div className="text-center mt-6">
        <button 
          onClick={() => window.print()} 
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 mr-2"
          style={{backgroundColor:"green"}}
        >
          Print Confirmation
        </button>
        <button 
          onClick={() => {
            setStep(1);
            setSelectedVehicle(null);
            setDateRange({ startDate: '', endDate: '' });
            setCustomerInfo({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              licenseNumber: '',
              address: ''
            });
            setConfirmation(null);
          }} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          style={{backgroundColor:"red"}}
        >
          Book Another Vehicle
        </button>
        <button 
          onClick={payment} 
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 mr-2"
          style={{backgroundColor:"green"}}
        >
          Payment 
        </button>
      </div>
    </div>
  );

  // Progress indicator
  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between">
        {['Select Vehicle', 'Choose Dates', 'Your Details', 'Confirmation'].map((label, index) => (
          <div 
            key={index} 
            className={`text-xs md:text-sm text-center ${index + 1 <= step ? 'text-blue-600 font-bold' : 'text-gray-400'}`}
            style={{ width: '25%' }}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="h-2 bg-gray-200 rounded-full mt-2">
        <div 
          className="h-full bg-blue-500 rounded-full" 
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  // Main render
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Rental Vehicle Booking</h1>
      
      {renderProgressBar()}
      
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {step === 1 && renderVehicleSelection()}
      {step === 2 && selectedVehicle && renderDateSelection()}
      {step === 3 && selectedVehicle && renderCustomerInfo()}
      {step === 4 && confirmation && renderConfirmation()}
    </div>
  );
};

export default RentalVehicleProcess;