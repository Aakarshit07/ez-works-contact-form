import { useState } from 'react';
import '../index.css';
import Logo from "../assets/logo.png";
import { data } from "../utils/constants";
import { validateEmail } from '../utils/constants';
import Card from './Cards';

/**
 * Form component.
 * Renders a form to collect user email addresses.
 * Handles form submission and displays error and success messages.
 * @returns {JSX.Element} The rendered form component.
 */
const Form = () => {
    // State variables to store email, error message, and success message
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    // Validate email on component mount
    validateEmail(email);

    /**
     * Handles form submission.
     * @param {Event} e - The form submit event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        // Validate email input
        if (!email) {
            setError('Email is required.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Invalid email format.');
            return;
        }

        if (email.endsWith('@ez.works')) {
            setError('Email cannot end with @ez.works');
            return;
        }

        // Submit the form to backend
        try {
            const response = await fetch('http://34.225.132.160:8002/api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.status === 200) {
                console.log(response);
                setMessage('Form Submitted');
            } else {
                const data = await response.json();
                setError(data.message || 'Something went wrong.');
            }
        } catch (error) {
            setError('Error submitting form.');
        }
    };

    return (
        <div className="main-container">
            <div className="left-sub-container">
                <img src={Logo} alt="EZ Works" className="logo" />
                <div className='left-content'>
                    <h3>Suite Of Business Support Services</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium eveniet accusamus fugiat. Ipsam eligendi quidem officiis! Impedit quidem recusandae porro?</p>
                </div>
                <div className='left-form-container left-form-display'>
                    {error && <div><p className='error-text'>{error}</p></div>}
                    {message && <div><p className='message-text'>{message}</p></div>}
                    <form className='form' onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />  
                        <button type="submit" className='submit-button'>Contact Me</button>
                    </form>
                </div>
            </div>
            <div className="right-sub-container">
                {data.map((item) => (
                    <Card key={item.id} item={item} /> 
                ))}
            </div>
            <div className='left-form-container' id="small-screen-form">
                {error && <div><p className='error-text'>{error}</p></div>}
                {message && <div><p className='message-text'>{message}</p></div>}
                <form className='form' id="form-container" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />  
                    <button type="submit" className='submit-button'>Contact Me</button>
                </form>
            </div>
        </div>  
    );
};

export default Form;