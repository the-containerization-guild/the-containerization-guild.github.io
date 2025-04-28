import styles from "./styles.module.css";
import GIF from "../../../static/img/gif-1.gif"

export default function WhatHappens() {
  return (
    <div className="about about-viewport" id="about">
      <div className="about-info">
          <div className="about-grid">
            <div>
            <h1 className="about-header">What happens at Gatherings?</h1>
            <p className="about-para" role="paragraph">
              Gatherings are opportunities to share new and evolving ideas
              pertaining to containerization. This is a safe space to explore
              what could be and appreciate our shared love of engineering. All
              ideas are welcome: from shower thoughts to manifestos to maybe the
              worst idea ever. We are not here to judge.
              <br />
              <br />
              Talks are capped at 10-12 minutes. Participants are expected to
              encourage the speaker with emojis, positive feedback, suggestions
              for next steps, and/or connections to likeminded folks. Gatherings
              currently occur online each quarter. Each gathering is 2-3 hours
              long. It flies by.
            </p></div>
            <img className="about-gif" alt="About Graphic 1" src={GIF}></img>
          </div>
      </div>
    </div>
  );
}
