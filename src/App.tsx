import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerService from 'pages/CustomerService';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Routes>
            <Route path="/" element={<CustomerService />} />
      </Routes>
    </div>
  );
}

export default App;
