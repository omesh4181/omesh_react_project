
import React, { useState } from 'react';
import './payment.css';

const PaymentProcess = () => {
  const [step, setStep] = useState(1);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Format card number with spaces every 4 digits
    if (name === 'cardNumber') {
      const formattedValue = value
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim()
        .slice(0, 19); // 16 digits + 3 spaces
      
      setPaymentData({
        ...paymentData,
        [name]: formattedValue
      });
      return;
    }
    
    // Regular updates for other fields
    setPaymentData({
      ...paymentData,
      [name]: value
    });
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    
    // Card number validation (16 digits)
    if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(paymentData.cardNumber)) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }
    
    // Card holder validation
    if (!paymentData.cardHolder.trim()) {
      newErrors.cardHolder = 'Cardholder name is required';
    }
    
    // Expiry date validation
    const currentYear = new Date().getFullYear() % 100; // Get last 2 digits of year
    const currentMonth = new Date().getMonth() + 1; // Get current month (1-12)
    
    if (!paymentData.expiryMonth || parseInt(paymentData.expiryMonth) < 1 || parseInt(paymentData.expiryMonth) > 12) {
      newErrors.expiryMonth = 'Enter a valid month (1-12)';
    }
    
    if (!paymentData.expiryYear || paymentData.expiryYear.length !== 2) {
      newErrors.expiryYear = 'Enter a valid 2-digit year';
    } else if (parseInt(paymentData.expiryYear) < currentYear || 
              (parseInt(paymentData.expiryYear) === currentYear && 
               parseInt(paymentData.expiryMonth) < currentMonth)) {
      newErrors.expiryDate = 'Card has expired';
    }
    
    // CVV validation (3-4 digits)
    if (!/^\d{3,4}$/.test(paymentData.cvv)) {
      newErrors.cvv = 'CVV must be 3-4 digits';
    }
    
    if (step === 2) {
      // Address validation
      if (!paymentData.address.trim()) {
        newErrors.address = 'Address is required';
      }
      
      // City validation
      if (!paymentData.city.trim()) {
        newErrors.city = 'City is required';
      }
      
      // Zip code validation
      if (!paymentData.zipCode.trim()) {
        newErrors.zipCode = 'Zip code is required';
      }
      
      // Country validation
      if (!paymentData.country.trim()) {
        newErrors.country = 'Country is required';
      }
      
      // Email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(paymentData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle next step
  const handleNext = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setStep(2);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsProcessing(true);
      
      try {
        // Simulate API call to payment processor
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Successful payment
        setIsComplete(true);
        setIsProcessing(false);
      } catch (error) {
        setErrors({ form: 'Payment processing failed. Please try again.' });
        setIsProcessing(false);
      }
    }
  };

  // Handle going back to previous step
  const handleBack = () => {
    setStep(1);
  };

  // Render card details form (Step 1)
  const renderCardDetailsForm = () => (
    <div className="payment-form-container">
      <h2>Card Details</h2>
      <form onSubmit={handleNext}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={paymentData.cardNumber}
            onChange={handleChange}
            maxLength="19"
            className={errors.cardNumber ? 'error' : ''}
          />
          {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="cardHolder">Cardholder Name</label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            placeholder="Cardholder Name"
            value={paymentData.cardHolder}
            onChange={handleChange}
            className={errors.cardHolder ? 'error' : ''}
          />
          {errors.cardHolder && <p className="error-message">{errors.cardHolder}</p>}
        </div>

        <div className="form-row">
          <div className="form-group expiry-date">
            <label>Expiry Date</label>
            <div className="expiry-inputs">
              <input
                type="text"
                name="expiryMonth"
                placeholder="MM"
                value={paymentData.expiryMonth}
                onChange={handleChange}
                maxLength="2"
                className={errors.expiryMonth ? 'error' : ''}
              />
              <span>/</span>
              <input
                type="text"
                name="expiryYear"
                placeholder="YY"
                value={paymentData.expiryYear}
                onChange={handleChange}
                maxLength="2"
                className={errors.expiryYear ? 'error' : ''}
              />
            </div>
            {errors.expiryMonth && <p className="error-message">{errors.expiryMonth}</p>}
            {errors.expiryYear && <p className="error-message">{errors.expiryYear}</p>}
            {errors.expiryDate && <p className="error-message">{errors.expiryDate}</p>}
          </div>

          <div className="form-group cvv">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="123"
              value={paymentData.cvv}
              onChange={handleChange}
              maxLength="3"
              className={errors.cvv ? 'error' : ''}
            />
            {errors.cvv && <p className="error-message">{errors.cvv}</p>}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Next</button>
      </form>
    </div>
  );

  // Render billing information form (Step 2)
  const renderBillingForm = () => (
    <div className="payment-form-container">
      <h2>Billing Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="123 Main St"
            value={paymentData.address}
            onChange={handleChange}
            className={errors.address ? 'error' : ''}
          />
          {errors.address && <p className="error-message">{errors.address}</p>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={paymentData.city}
              onChange={handleChange}
              className={errors.city ? 'error' : ''}
            />
            {errors.city && <p className="error-message">{errors.city}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              placeholder="10001"
              value={paymentData.zipCode}
              onChange={handleChange}
              className={errors.zipCode ? 'error' : ''}
            />
            {errors.zipCode && <p className="error-message">{errors.zipCode}</p>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={paymentData.country}
            onChange={handleChange}
            className={errors.country ? 'error' : ''}
          >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="AU">Australia</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="BR">Brazil</option>
            <option value="RU">Russia</option>
            <option value="IN">India</option>
          </select>
          {errors.country && <p className="error-message">{errors.country}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email (for receipt)</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
            value={paymentData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        {errors.form && <p className="error-message form-error">{errors.form}</p>}

        <div className="buttons-row">
          <button type="button" className="btn btn-secondary" onClick={handleBack}>Back</button>
          <button type="submit" className="btn btn-primary" disabled={isProcessing}>
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
      </form>
    </div>
  );

  // Render success message
  const renderSuccessMessage = () => (
    <div className="payment-success">
      <div className="success-icon">✓</div>
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase. A receipt has been sent to {paymentData.email}.</p>
      <p>Transaction ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
      <button className="btn btn-primary" onClick={() => window.location.reload()}>
        Return to Store
      </button>
    </div>
  );

  // Progress indicator
  const renderProgressBar = () => (
    <div className="progress-bar">
      <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
        <div className="step-number">1</div>
        <div className="step-label">Card Details</div>
      </div>
      <div className="progress-line"></div>
      <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
        <div className="step-number">2</div>
        <div className="step-label">Billing Info</div>
      </div>
      <div className="progress-line"></div>
      <div className={`progress-step ${isComplete ? 'active' : ''}`}>
        <div className="step-number">3</div>
        <div className="step-label">Confirmation</div>
      </div>
    </div>
  );

  return (
    <div className="payment-process">
      {!isComplete && renderProgressBar()}
      
      <div className="payment-container">
        {step === 1 && renderCardDetailsForm()}
        {step === 2 && !isComplete && renderBillingForm()}
        {isComplete && renderSuccessMessage()}
      </div>
    </div>
  );
};

export default PaymentProcess;