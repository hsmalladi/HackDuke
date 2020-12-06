import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
	  <Navbar />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
