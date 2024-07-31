import React, { useState, useEffect } from 'react';

  export default function Data(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogin = () => {
    setErrorMessage('');
    if (email === '') {
      setErrorMessage('Please enter email');
      return;
    }
    if (password === '') {
      setErrorMessage('Please enter password');
      return;
    }
    
    const filter_val = users.filter((user) => user.email === email && user.password === password);

    if (filter_val.length >= 1) {
      setErrorMessage('Login successful');
      localStorage.setItem('id', filter_val[0].id);
      localStorage.setItem('firstname', filter_val[0].firstname);
      localStorage.setItem('lastname', filter_val[0].lastname);
      localStorage.setItem('email', filter_val[0].email);
      setIsLoggedIn(true);
    } else {
      setErrorMessage('Username and password do not match');
    }
  };

  const checkAuth = () => {
    const id = localStorage.getItem('id');
    if (id) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" id="pwd" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
          <p id="error_message">{errorMessage}</p>
        </div>
      ) : (
        <div>
          <p id="error_message">{errorMessage}</p>
          <div id="welcomediv">
            <p id="fullname">{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</p>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
   ); 
}
  
  
  
  