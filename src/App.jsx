import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Stacks from "./components/Stacks.jsx"
import Projects from "./components/Projects.jsx"
import Experience from "./components/Experience.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

import { useEffect } from "react"
import './App.css'

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
      <Hero />
      <About />
      <Stacks />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
