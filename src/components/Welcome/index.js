import styles from "./styles.module.css";
import logo from "../../../static/img/full-logo-2.png";

export default function Welcome() {
  return (
    <div className="welcome viewport">
      <div className="welcome-info">
        <h1 className="header">Welcome to</h1>
        <img className="welcome-logo" width="75%" src={logo}></img>
        <div className="button-group">
          <button className="static-button-bluesky" href="https://bsky.app/profile/container-guild.bsky.social">
            Follow us on BlueSky
          </button>
          <button className="static-button-discord" href="https://discord.gg/aJdVtxEm">
            Join our Discord
          </button>
          <button className="static-button" href="#">
            Watch previous gatherings
          </button>
        </div>
      </div>
    </div>
  );
};
