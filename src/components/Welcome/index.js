import styles from "./styles.module.css";
import logo1 from "../../../static/img/full-logo-2.png";
import logo2 from "../../../static/img/full-logo.png";

export default function Welcome() {
  return (
    <div className="welcome viewport">
      <div className="welcome-info">
        <h1 className="header">Welcome to</h1>
        <img className="welcome-logo" width="75%" src={logo1}></img>
        <img className="welcome-logo-small" width="100%" src={logo2}></img>
        <div className="button-group">
          <button className="static-button-bluesky">
            <a href="https://bsky.app/profile/container-guild.bsky.social" target="_blank">
              Follow us on BlueSky
            </a>
          </button>
          <button className="static-button-discord">
            {" "}
            <a href="https://discord.gg/78UWpqumcm" target="_blank">Join our Discord</a>
          </button>
          <button className="static-button">
            {" "}
            <a href="/blog">Watch previous gatherings</a>
          </button>
        </div>
      </div>
    </div>
  );
}
