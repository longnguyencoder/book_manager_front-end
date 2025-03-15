import React, { useState } from 'react';

import './App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import HomePages from './layouts/HomePages/HomePages';




function App() {
  const [tuKhoaTimKiem, setTuKhoaTimKiem] = useState('');


  return (
    <div className='App'>
      <Navbar tuKhoaTimKiem={tuKhoaTimKiem} setTuKhoaTimKiem={setTuKhoaTimKiem} />
      <HomePages tuKhoaTimKiem={tuKhoaTimKiem} />

      <Footer />
    </div>
  );
}

export default App;
