import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const [checkError, setCheckError] = useState({
    email: false,
    password: false
  });

  const navigate = useNavigate();

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Simple login validation (replace with actual API call)
    if (input.email === 'user@example.com' && input.password === 'password') {
      navigate('/home');  // Redirect to the home page
    } else {
      // Display an alert or show an error message
      alert('Invalid email or password');
    }
  }

  // Handle input changes
  function handleInput(key, value) {
    setInput(prevInput => ({
      ...prevInput,
      [key]: value
    }));
    setCheckError(prevValid => ({
      ...prevValid,
      [key]: false
    }));
  }

  // Handle field validation on blur
  function handleCheck(key) {
    setCheckError(prevValid => ({
      ...prevValid,
      [key]: true
    }));
  }

  // Validation checks
  const emailValidation = checkError.email && !input.email.includes('@');
  const passwordValidation = checkError.password && input.password.length === 0;

  return (
    <center>
      <form id="login-form" onSubmit={handleSubmit}> 
        <h2 className='text-1000 fs-3 fw-bold ms-2 text-gradient'>Login</h2>
        <div className="control-row main">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(event) => handleInput('email', event.target.value)}
              onBlur={() => handleCheck('email')}
            />
            {emailValidation && <p className="text-danger">Please enter a valid email</p>}
          </div>

          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(event) => handleInput('password', event.target.value)}
              onBlur={() => handleCheck('password')}
            />
            {passwordValidation && <p className="text-danger">Please enter a password</p>}
          </div>
        </div>
        <p className="form-actions">
          <button
            type="submit"  // Ensure the button type is "submit" to trigger the form submission
            className="btn btn-white shadow-warning text-warning"
          >
            Login
          </button>
        </p>
      </form>
    </center>
  );
};

export default Login;
