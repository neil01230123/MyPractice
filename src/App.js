import React from 'react';
import './index.css';
import Navbar from './Code/Navbar';
import {Routes, Route} from 'react-router-dom';
import Shopping from './Code/Shopping';


export default function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <Shopping />
    </React.StrictMode>
  );
}