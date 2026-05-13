import './Hero.css'
import Flower from '../assets/flower.png'

function Hero(){
    return(
        <div id="home">
            <div className="hero-text-content">
                <div className="aspiring">
                    <h6>Aspiring</h6>
                </div>
                <div className="frontend">
                    <h2><span className="hero-special-letter">F</span>ront-End Developer</h2>
                </div>
                <div className="and">
                    <h2>&</h2>
                </div>
                <div className="ui-ux">
                    <h2>UI/UX Designer</h2>
                </div>
                <div className="paragraph">
                    <p >
                        I design and build responsive, user-centered digital experiences that are both functional and visually engaging.
                    </p>

                </div>
            </div>
            
            <div className="hero-img">
                <img className="flower" src={Flower} alt='flower-img'/>
            </div>
        </div>

    )
}
export default Hero