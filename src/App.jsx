import { useState } from 'react'
import Button from './components/reuseable/Button.jsx'
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from './components/Header.jsx';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Collaboration from './components/Collaboration';
import Services from './components/Services';
import Pricing from './components/Pricing.jsx';
import Roadmap from './components/Roadmap.jsx';
import Footer from './components/Footer.jsx';


function App() {

  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
    </div>
    
    <ButtonGradient />
    </>
  )
}

export default App
