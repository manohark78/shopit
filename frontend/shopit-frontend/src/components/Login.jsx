import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios';
import './AuthPage.css';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
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

        try {
            const response = await axios.post('/login', formData);
            setMessage(`Welcome ${response.data.username}! Role: ${response.data.role}`);
            console.log('Login successful:', response.data);
            
            localStorage.setItem('user', JSON.stringify(response.data));
            
            // Redirect to home after 2 seconds
            setTimeout(() => {
                navigate('/');
            }, 2000);
            
        } catch (error) {
            setMessage(error.response?.data || 'Login failed!');
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
                
                <h2 className="auth-title">Login</h2>
                
                {message && (
                    <div className={`auth-alert ${message.includes('Welcome') ? 'auth-alert-success' : 'auth-alert-danger'}`}>
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
                    
                    <button 
                        type="submit" 
                        className="auth-button"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                
                <div className="auth-link">
                    <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
