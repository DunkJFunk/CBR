import React from "react";
import LandingPage from "./components/LandingPage";
import BottInfo from "./components/BottInfo.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import Mission from "./components/Mission.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Chevron from "./components/Chevron.jsx";


const App = () => {
  return (
    <div className="bg-slate-900">
      <LandingPage />
      <Chevron />
      <Mission />
      <BottInfo />
      <BeforeAfter />
      <Work />
      <Contact />
    </div>
  );
}

export default App;