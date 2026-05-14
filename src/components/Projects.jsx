import DXTBanner from '../assets/dxtbanner.PNG'
import SurfaceBanner from '../assets/surface-banner.png'
import PortfolioBanner from '../assets/portfolioMini.png'
import "./Projects.css"
import { Link } from "react-router-dom";

const projects =[
    {
        title: "Surface Artistry",
        image: SurfaceBanner,
        description: "Surface Artistry is a premium tiles and surfaces platform designed to simplify material selection by delivering a seamless and visually refined browsing experience.",
        link: "/surface-artistry"
    },
    {
        title: "Dexterton Shop",
        image: DXTBanner,
        description: "Dexterton Shop is an e-commerce platform offering premium tiles, bath fixtures, and luxury home and lifestyle products, designed to provide a seamless and refined shopping experience.",
        link: "/dexterton-shop"
    },
    {
        title: "Portfolio",
        image: PortfolioBanner,
        description: "A modern design portfolio showcasing my work in front-end development and UI/UX design.",
        link: "/my-portfolio"
    }

];

function Projects(){
    return(
        <div id="projects">
            <div className="project-title">
            <h2><span className="hero-special-letter">P</span>rojects/Case Study</h2>
            </div>

            <hr className="project-line"/>

            <div className="list-container">
                {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    
                    <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    </div>

                    <h4 className="project-card-title">{project.title}</h4>

                    <p className="project-description">{project.description}</p>

                    <Link to={project.link}>
                        <button className="project-view-button">
                            View
                        </button>
                    </Link>
                </div>
                ))}
            </div>
            <hr className="project-line"/>
        </div>
    )
}
export default Projects;