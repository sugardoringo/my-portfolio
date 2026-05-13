import { motion } from "framer-motion";
import './About.css'
const text =
  "I am an aspiring front-end developer and UI/UX designer passionate about creating clean, responsive, and user-friendly web experiences, combining design and development to build interfaces that are both visually appealing and functional.  As a recent graduate with hands-on experience as a UI/UX design intern, I have worked on real-world projects such as designing an e-commerce platform and improving user flows, which helped me develop a strong eye for detail and a solid understanding of user-centered design, and I continue to grow my skills using tools and technologies such as Figma, HTML, CSS, JavaScript, React, Git, and GitHub while consistently building projects and exploring modern web design trends.";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function AboutText() {
  return (
    <div id="about">
      <div className="about-title">
          <h2><span className="hero-special-letter">A</span>bout Me</h2> <hr/>
      </div>
        <motion.p
          className="text"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          {text.split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariant}
              style={{
                display: "inline-block",
                marginRight: "6px",
                fontSize: "24px",
              }}
             className="word-by-word">
              {word}
            </motion.span>
          ))}
        </motion.p>
        <hr className="bottom-underline"/>
    </div>
  );
}