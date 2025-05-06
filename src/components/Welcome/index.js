import styles from "./styles.module.css";

export default function Welcome() {
  return (
    <div className="welcome viewport">
      <div className="welcome-info">
        <h1 className="header">Welcome to the Guild</h1>
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
