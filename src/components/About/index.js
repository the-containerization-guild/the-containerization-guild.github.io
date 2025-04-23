import styles from "./styles.module.css";

export default function About() {
  return (
    <div className="about about-viewport" id="about">
      <div className="about-info">
        <h1 className="about-header">What happens at Gatherings?</h1>

        <div className="about-grid">
          <p className="about-para" role="paragraph">
            Gatherings are opportunities to share new and evolving ideas
            pertaining to containerization. This is a safe space to explore what
            could be and appreciate our shared love of engineering. All ideas
            are welcome: from shower thoughts to manifestos to maybe the worst
            idea ever. We are not here to judge.
            <br/>
            <br/>
            Talks are capped at 10-12 minutes. Participants are expected to
            encourage the speaker with emojis, positive feedback, suggestions
            for next steps, and/or connections to likeminded folks. Gatherings
            currently occur online each quarter. Each gathering is 2-3 hours
            long. It flies by.
          </p>
          <img className="about-gif" alt="About Graphic 1"></img>
        </div>

        <h1 className="about-header">About the Containerization Guild</h1>

        <div className="about-grid">
          <p className="about-para" role="paragraph">
            The Containerization Guild was formed in response to rapidly
            evolving infrastructure needs and capabilities. The technology to
            deliver containerization, as a solution to meet those needs, needed
            to evolve rapidly as well. We wanted a space where folks excited (or
            very concerned!) about the possibilities could share ideas without
            the burden of defending the ideas.
          </p>
          <img className="about-gif" alt="About Graphic 1"></img>
        </div>
      </div>
    </div>
  );
}
