import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sign.css';
import { useNavigate } from 'react-router-dom';
 
// const users = []; // Temporary storage for user data

// const saveUserData = (userData) => {
//     users.push(userData);
// };

// const validateLogin = (email, password) => {
//     return users.some(user => user.email === email && user.password === password);
// };



const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        conformPassword:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="signup-form">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* <div>
                    <label>Conform Password</label>
                    <input
                     type="Conform Password"
                     name='Conform Password'
                     value={formData.conformPassword}
                     onChange={handleChange}
                     required 
                     />
                </div> */}
                <Link to='/Signup'>
                  <button type="submit">Signup</button>
                </Link>
                <Link to='/login'>
                    <button>Back</button>
                </Link>
            </form>
        </div>
    );
};

export default Signup;
