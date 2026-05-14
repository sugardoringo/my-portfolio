
import "./Pages.css";
import SurfaceMain from "../assets/SurfaceArtistryMain.png";

import UI1 from "../assets/1.png";
import UI2 from "../assets/2.png";
import UI3 from "../assets/3.png";
import UI4 from "../assets/4.png";

function SurfaceArtistry() {
  return (
    <>
    <div className="surface-page">

      {/* HERO IMAGE */}
      <div className="surface-hero">
        <img src={SurfaceMain} alt="Surface Artistry" />
      </div>

      {/* PROJECT INFO */}
      <div className="surface-content">

        <div className="project-heading">
          <h1><span className="page-special-letter">S</span>urface Artistry</h1>
          <p>
            Surface Artistry is a premium tiles and surfaces platform designed
            to simplify material selection by delivering a seamless and visually
            refined browsing experience. It enables users to explore curated
            collections through intuitive navigation and immersive design.
          </p>
        </div>

        {/* COLUMN LAYOUT */}
        <div className="info-columns">

          <div className="info-card">
            <h3>Problem</h3>
            <p>
              Excess inventory in the warehouse needs to be sold efficiently to
              reduce stock levels and minimize holding costs.
            </p>
          </div>

          <div className="info-card">
            <h3>Solution</h3>
            <p>
              Designed and developed a website that organizes extensive
              inventory into structured categories and curated collections.
            </p>
          </div>

          <div className="info-card">
            <h3>Tools Used</h3>
            <ul>
              <li>Figma</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Role</h3>
            <ul>
              <li>UI/UX Designer</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Target Audience</h3>
            <ul>
              <li>Middle-High Class Homeowners</li>
              <li>Interior Designers</li>
              <li>Architects</li>
            </ul>
          </div>
          {/* UI SHOWCASE */}
          <div className="ui-showcase">

            <div className="ui-heading">
              <h2>UI Design Showcase</h2>
              <p>
                A collection of interface screens designed for Surface Artistry,
                focused on elegance, usability, and immersive browsing experience.
              </p>
            </div>

            <div className="ui-gallery">

              <div className="ui-card">
                <img src={UI1} alt="Surface Artistry UI 1" />
              </div>

              <div className="ui-card">
                <img src={UI2} alt="Surface Artistry UI 2" />
              </div>

              <div className="ui-card">
                <img src={UI3} alt="Surface Artistry UI 3" />
              </div>

              <div className="ui-card">
                <img src={UI4} alt="Surface Artistry UI 4" />
              </div>

            </div>
          </div>

          <div className="website-btn">
            <a
              href="https://surfaceartistry.com/"
              target="_blank"
              rel="noreferrer"
            >
              View Website
            </a>
          </div>
        </div>
      </div>
      <div className="project-nav">

      <a href="/" className="nav-home-link">
        ← Back to Home
      </a>

      <a href="/dexterton-shop" className="nav-next-link">
        Next Project →
      </a>

    </div>
    </div>
    </>
  );
}

export default SurfaceArtistry;