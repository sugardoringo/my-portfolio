import SurfaceBanner from '../assets/surface-banner.png'
import "./Projects.css"

const projects =[
    {
        title: "Surface Artistry",
        image: SurfaceBanner,
        description: "Surface Artistry is a premium tiles and surfaces platform designed to simplify material selection by delivering a seamless and visually refined browsing experience."
    },
    {
        title: "Dexterton Shop",
        image: SurfaceBanner,
        description: "Dexterton Shop is an e-commerce platform offering premium tiles, bath fixtures, and luxury home and lifestyle products, designed to provide a seamless and refined shopping experience."
    },
    {
        title: "Portfolio",
        image: SurfaceBanner,
        description: "A modern design portfolio showcasing my work in front-end development and UI/UX design."
    }

];

function Projects(){
    return(
        <div id="project">
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

                    <button className="project-view-button">View</button>
                </div>
                ))}
            </div>
            <hr className="project-line"/>
        </div>
    )
}
export default Projects;