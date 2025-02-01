import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SocialIcons from "./components/SocialIcons";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs"; 
import WhatsAppIcon from "./components/WhatsAppIcon"; 
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
      </Routes>
      <SocialIcons/>
      <WhatsAppIcon />
      {/* <Footer /> */}
    </Router>
    </div>
  );
};

export default App;
