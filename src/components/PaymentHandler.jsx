import React, { useState } from 'react';
import axios from 'axios';
import PaymentForm from './PaymentForm';

// Access environment variables
const BASE_URL = import.meta.env.VITE_BASE_URL;
const SAYS_SWITCH_PUBLIC_KEY = import.meta.env.VITE_SAYS_SWITCH_PUBLIC_KEY;

const PaymentHandler = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handlePayment = async (details) => {
    setLoading(true);
    setMessage(null);
    try {
      const response = await axios.post(`${BASE_URL}/payment`, {
        ...details,
        publicKey: SAYS_SWITCH_PUBLIC_KEY,
      });
      setMessage({ type: 'success', text: 'Payment successful!' });
      console.log('Payment successful', response.data);
    } catch (error) {
      setMessage({ type: 'error', text: 'Payment failed. Please try again.' });
      console.error('Payment error', error);
    }
    setLoading(false);
  };

  return (
    <div>
      {message && (
        <div className={`mb-4 p-2 rounded ${message.type === 'success' ? 'bg-green-200' : 'bg-red-200'}`}>
          <p className={`text-sm ${message.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>{message.text}</p>
        </div>
      )}
      <PaymentForm handlePayment={handlePayment} loading={loading} />
    </div>
  );
};

export default PaymentHandler;
