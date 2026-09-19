import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleOpenBooking = (pkgName = '') => {
    setSelectedPackage(pkgName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="App">
      <Navbar />
      <Hero onBook={handleOpenBooking} />
      <About />
      <Services />
      <Packages onBook={handleOpenBooking} />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
      {isBookingOpen && (
        <BookingModal 
          onClose={handleCloseBooking} 
          preselectedPackage={selectedPackage} 
        />
      )}
    </div>
  );
}

export default App;
