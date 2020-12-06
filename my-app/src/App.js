import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Footer from "./components/Footer";
import Inputs from "./components/Inputs";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
	  <Navbar />
    <Inputs />

      </div>
      <Footer />
    </div>
  );
}

export default App;
