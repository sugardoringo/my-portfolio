import "./Stacks.css"

function Stacks(){
    return(
        <div id="stacks">
            <div className="stack-title">
                <h2><span className="hero-special-letter">S</span>tacks</h2>
            </div>

            <div className="first-row">
                <div className="container-icons">
                    <img src="/html.png" alt="html-icon" />
                   <h5>HTML</h5>
                </div>

                <div className="container-icons">
                    <img src="/css.png" alt="html-icon" />
                   <h5>CSS</h5>
                </div>

                <div className="container-icons">
                    <img src="/js.png" alt="html-icon" />
                   <h5>Javascript</h5>
                </div>

                <div className="container-icons">
                    <img src="/tailwind.png" alt="html-icon"   style={{ width: "45px", height: "30px" }} />
                   <h5>Tailwind</h5>
                </div>

                <div className="container-icons">
                    <img src="/react.png" alt="html-icon" />
                   <h5>React</h5>
                </div>

            </div>
            <div className="second-row">
                <div className="container-icons">
                    <img src="/java.png" alt="html-icon" style={{height: "45px"}} />
                   <h5>Java</h5>
                </div>

                <div className="container-icons">
                    <img src="/c.png" alt="html-icon" />
                   <h5>C</h5>
                </div>

                <div className="container-icons">
                    <img src="/c-plus.png" alt="html-icon" />
                   <h5>C++</h5>
                </div>

                <div className="container-icons">
                    <img src="/python.png" alt="html-icon" />
                   <h5>Python</h5>
                </div>

            </div>

            <div className="third-row">
                <div className="container-icons">
                    <img src="/figma.png" alt="html-icon" style={{height: "45px"}} />
                   <h5>Figma</h5>
                </div>
            </div>


        </div>
    )
}
export default Stacks