import "./Contact.css"
import Envelope from '../assets/envelope.png'


function Contact(){
    return(
        <div id="contact">
            <div className="contact-text-content">
                <h2>
                    <span className="hero-special-letter">S</span>ay Hello
                </h2>

                <h1>sugarmaeadoringo@gmail.com</h1>

                <p>I’d love to hear from you! Whether you have a project in mind, a collaboration idea, or just want to say hello, feel free to reach out. As a front-end and UI/UX designer, I’m always excited to connect, share ideas, and create meaningful digital experiences together. Let’s build something thoughtful, user-friendly, and visually engaging—together.
                </p>
            </div>
            <div className="contact-img">
                    <img src={Envelope} alt="envelope-img" />
            </div>
        </div>
        
    )
}
export default Contact