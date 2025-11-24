import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios';
import './AuthPage.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        if (formData.password !== formData.confirmPassword) {
            setMessage('Passwords do not match!');
            setLoading(false);
            return;
        }

        try {
            const { confirmPassword, ...userData } = formData;
            
            const response = await axios.post('/register', userData);
            setMessage(response.data);
            
            if (response.data.includes('successfully')) {
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
                
                // Redirect to login after 2 seconds
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
            
        } catch (error) {
            setMessage(error.response?.data || 'Registration failed!');
        }
        
        setLoading(false);
    };

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <button className="auth-close-btn" onClick={handleClose}>×</button>
                
                <h2 className="auth-title">Sign Up</h2>
                
                {message && (
                    <div className={`auth-alert ${message.includes('successfully') ? 'auth-alert-success' : 'auth-alert-danger'}`}>
                        {message}
                    </div>
                )}
                
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-form-group">
                        <label className="auth-label">Username</label>
                        <input
                            type="text"
                            className="auth-input"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="auth-form-group">
                        <label className="auth-label">Email</label>
                        <input
                            type="email"
                            className="auth-input"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="auth-form-group">
                        <label className="auth-label">Password</label>
                        <input
                            type="password"
                            className="auth-input"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="auth-form-group">
                        <label className="auth-label">Confirm Password</label>
                        <input
                            type="password"
                            className="auth-input"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="auth-button"
                        disabled={loading}
                    >
                        {loading ? 'Signing up...' : 'Sign Up'}
                    </button>
                </form>
                
                <div className="auth-link">
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
