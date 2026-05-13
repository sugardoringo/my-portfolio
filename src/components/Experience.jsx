import "./Experience.css"
import Spinner from "../assets/spinner-removebg-preview.png"

function Experience(){
    return(
        <div id="experience">
            <h1><span className="hero-special-letter">E</span>xperience</h1>

            <div className="exp-content">
                
                <img src={Spinner} className="Vinyl" alt="vinyl" />

                <div className="exp">
                    <hr className="bold-vertical-line-exp"/>
                    <h2>UI/UX Intern</h2>
                    <hr className="vertical-line-exp"/>
                    <h3>Dexterton Corporation</h3>
                    <h5>Jan 2026 - April 2026</h5>
                </div>
            
            </div>
        </div>
    )
}
export default Experience