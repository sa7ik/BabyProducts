import React, { useState } from 'react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [emailBlured, setEmailBlured] = useState(false);
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordBlured, setPasswordBlured] = useState(false);

  const validate = () => {
    setEmailBlured(true);
    setPasswordBlured(true);

    if (validEmail(email) && validPassword(password)) {
      setValid(true);
    }
  };

  const validEmail = (email) => {
    const re = /(.+)@(.+){2,}\.(.+){2,}/;
    return re.test(email.toLowerCase());
  };

  const validPassword = (password) => {
    return password.length > 7;
  };

  const handleSubmit = () => {
    validate();
    if (valid) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <label>
        Email:<br/>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailBlured(true)}
        /><br/>
        {emailBlured && !validEmail(email) && <span>Email is not valid</span>}
      </label>

      <label>
        Password:<br/>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordBlured(true)}
        /><br/>
        {passwordBlured && !validPassword(password) && (
          <span>Password must be at least 8 characters long</span>
        )}<br/>
      </label>

      <button onClick={handleSubmit}>Submit</button>

      {submitted && <p>Form submitted successfully!</p>}
    </div>
  );
};

export default AdminLogin;
