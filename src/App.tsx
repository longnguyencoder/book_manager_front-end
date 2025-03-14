import React from 'react';

import './App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import HomePages from './layouts/HomePages/HomePages';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <HomePages />
      <Footer />
    </div>
  );
}

export default App;
