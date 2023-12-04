// App.js
import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import BodyContent from './components/BodyContent';
import SampleWorks from './components/SampleWork';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Teams from './components/Teams';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BodyContent />
       <SampleWorks />
      <Testimonials />
      <Teams/>
       <Footer />  

       
    </div>
  );
}

export default App;




