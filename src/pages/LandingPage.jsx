import React from 'react';
import PaymentHandler from '../components/PaymentHandler';
import logo from '../assets/logo.svg';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <header className="w-full text-center mb-8">
        <img src={logo} className="h-10 mx-auto mb-4" alt="SaySwitch Logo" />
        <h1 className="text-xl font-bold text-primary">Welcome to SaySwitch Payment Gateway</h1>
        <p className="text-md text-contrast">Secure and seamless payments</p>
      </header>
      <main className="w-full max-w-md bg-white p-4 md:p-8 rounded-3xl shadow-lg">
        <h2 className="font-semibold text-contrast text-center mb-4">Make a Payment</h2>
        <PaymentHandler />
      </main>
    </div>
  );
};

export default LandingPage;
