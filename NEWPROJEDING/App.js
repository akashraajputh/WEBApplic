import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Courses />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
