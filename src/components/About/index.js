import styles from "./styles.module.css";
import GIF from "../../../static/img/gif-2.gif";

export default function About() {
  return (
    <div className="about about-viewport" id="about">
      <div className="about-info">
        <div className="about-grid">
          <div className="about-text">
            <h1 className="about-header">About the Guild</h1>
            <p className="about-para" role="paragraph">
              The Containerization Guild was formed in response to rapidly
              evolving infrastructure needs and capabilities. The technology to
              deliver containerization, as a solution to meet those needs,
              needed to evolve rapidly as well. We wanted a space where folks
              excited (or very concerned!) about the possibilities could share
              ideas without the burden of defending the ideas.
            </p>
          </div>
          <img className="about-gif" alt="About Graphic 1" src={GIF}></img>
        </div>
      </div>
    </div>
  );
}
