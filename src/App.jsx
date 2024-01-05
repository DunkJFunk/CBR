import React from "react";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import BottInfo from "./components/BottInfo.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import Mission from "./components/Mission.jsx";
import NavFollow from "./components/NavFollow.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Chevron from "./components/Chevron.jsx";


const App = () => {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <NavFollow />
      <LandingPage />
      <Chevron />
      <Mission />
      <BottInfo />
      <BeforeAfter />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;