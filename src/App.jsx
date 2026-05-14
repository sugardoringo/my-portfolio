
import { useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Stacks from "./components/Stacks.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./ScrollToTop"

import SurfaceArtistry from "./pages/SurfaceArtistry.jsx";
import DextertonShop from "./pages/DextertonShop.jsx"
import Portfolio from "./pages/Portfolio.jsx"

import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

function Home() {
  const location = useLocation();

  useEffect(() => {
    let sectionId = location.pathname.replace("/", "");

    if (!sectionId) sectionId = "home";

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Stacks />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

function App() {

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-container">

     <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route
          path="/surface-artistry"
          element={<SurfaceArtistry />}
        />
        <Route
          path="/dexterton-shop"
          element={<DextertonShop />}
        />
       <Route
          path="/my-portfolio"
          element={<Portfolio />}
        /> 
        
        <Route path="/contact" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/stacks" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/experience" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;