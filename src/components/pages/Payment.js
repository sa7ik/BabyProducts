import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [paymentValue, setPaymentValue] = useState({ number: '', name: '', expiration: '', cvv: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentValue((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentValue.number || !paymentValue.name || !paymentValue.cvv) {
      alert("Please fill in all the required fields");
    } else {
      alert('Payment successfully completed!');
      navigate('/');
      // Add your logic for form submission here
    }
  };

  return (
    <div>
      <h1>Payment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Card number:<br />
          <input
            type="text"
            name="number"
            value={paymentValue.number}
            onChange={handleChange}
          /><br />
        </label>

        <label>
          Name on card:<br />
          <input
            type="text"
            name="name"
            value={paymentValue.name}
            onChange={handleChange}
            placeholder="Enter your name"
          /><br />
        </label>

        <div>
          <label>
            Expiration (MM/YYYY):<br />
            <input
              type="text"
              name="expiration"
              value={paymentValue.expiration}
              onChange={handleChange}
              minLength="7"
              maxLength="7"
              placeholder="MM/YYYY"
            /><br />
          </label>
        </div>

        <div>
          <label>
            CVV:<br />
            <input
              type="text"
              name="cvv"
              value={paymentValue.cvv}
              onChange={handleChange}
              minLength="3"
              maxLength="3"
              placeholder="&#9679;&#9679;&#9679;"
            /><br />
          </label>
        </div>

        <button type="submit">Proceed To Buy</button>
      </form>
    </div>
  );
};

export default Payment;
