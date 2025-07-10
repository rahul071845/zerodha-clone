import { useState } from 'react';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/home/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  )
}

export default App;