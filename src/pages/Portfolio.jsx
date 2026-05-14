
import "./Pages.css";
import PortfolioMain from "../assets/PortfolioBanner.png";


function Portfolio() {
  return (
    <>
    <div className="surface-page">

      {/* HERO IMAGE */}
      <div className="surface-hero">
        <img src={PortfolioMain} alt="Surface Artistry" />
      </div>

      {/* PROJECT INFO */}
      <div className="surface-content">

        <div className="project-heading">
          <h1><span className="page-special-letter">P</span>ortfolio</h1>
          <p>
            A collection of my work as a Front-End Developer and UI/UX Designer, showcasing modern, responsive, and user-focused web experiences built with React and contemporary design practices.
          </p>
        </div>

        {/* COLUMN LAYOUT */}
        <div className="info-columns">

          

          <div className="info-card">
            <h3>Tools Used</h3>
            <ul>
              <li>Visual Code Studio</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Language/Framework</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>REACT</li> 
            </ul>
          </div>
  
        </div>
      </div>
      <div className="project-nav">

      <a href="/" className="nav-home-link">
        ← Back to Home
      </a>

      <a href="/surface-artistry" className="nav-next-link">
        Next Project →
      </a>

    </div>
    </div>
    </>
  );
}

export default Portfolio