
import "./Pages.css";
import DXTMain from "../assets/5.png";

import UI5 from "../assets/5.png";
import UI6 from "../assets/6.png";
import UI7 from "../assets/7.png";
import UI8 from "../assets/8.png";
import UI9 from "../assets/9.png";
import UI10 from "../assets/10.png";
import UI11 from "../assets/11.png";



function DextertonShop() {
  return (
    <>
    <div className="surface-page">

      {/* HERO IMAGE */}
      <div className="surface-hero">
        <img src={DXTMain} alt="Dexterton Shop" />
      </div>

      {/* PROJECT INFO */}
      <div className="surface-content">

        <div className="project-heading">
          <h1><span className="page-special-letter">D</span>exterton Shop</h1>
          <h2>Website Redesign</h2>
          <p>
            During my internship at Dexterton Corporation, I worked on redesigning the Shop Dexterton website to improve its usability, maintainability, and overall user experience.
            The existing website was built using WordPress and heavily relied on a third-party provider for updates and maintenance. Since the website subscription and services were nearing expiration, the company needed a more sustainable and independent solution.
          </p>
        </div>

        {/* COLUMN LAYOUT */}
        <div className="info-columns">

          <div className="info-card">
            <h3>Problem</h3>
            <p>
             The existing Shop Dexterton website was built using WordPress and heavily depended on a third-party provider
              for maintenance and updates. Since the service subscription was nearing expiration, the company faced challenges
              in managing the platform efficiently.
            </p>
          </div>

          <div className="info-card">
            <h3>Solution</h3>
            <p>
              To solve these issues, the website was planned to be transferred to the company’s own server to reduce dependency on third-party services and improve overall management. As part of the transition, I created a new UI/UX design that modernized the platform and enhanced the user experience. The redesign focused on creating a cleaner interface, improving navigation, enhancing product presentation, and making the website more responsive and user-friendly.
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
<div className="ui-showcase">

            <div className="ui-heading">
              <h2>UI Design Showcase</h2>
              <p>
                A collection of interface screens designed for Dexterton Shop,
                focused on elegance, usability, and immersive browsing experience.
              </p>
            </div>

            <div className="ui-gallery">

              <div className="ui-card">
                <img src={UI5} alt="Surface Artistry UI 5" />
              </div>

              <div className="ui-card">
                <img src={UI6} alt="Surface Artistry UI 6" />
              </div>

              <div className="ui-card">
                <img src={UI7} alt="Surface Artistry UI 7" />
              </div>

              <div className="ui-card">
                <img src={UI8} alt="Surface Artistry UI 8" />
              </div>

              <div className="ui-card">
                <img src={UI9} alt="Surface Artistry UI 9" />
              </div>

              <div className="ui-card">
                <img src={UI10} alt="Surface Artistry UI 10" />
              </div>

              <div className="ui-card">
                <img src={UI11} alt="Surface Artistry UI 11" />
              </div>
          </div>

        </div>
      </div>
      <div className="project-nav">

      <a href="/" className="nav-home-link">
        ← Back to Home
      </a>

      <a href="/my-portfolio" className="nav-next-link">
        Next Project →
      </a>

      </div>
    </div>
    </div>
    </>
  );
}

export default DextertonShop