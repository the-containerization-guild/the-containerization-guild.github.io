import styles from './styles.module.css'

export default function Welcome() {
  return (
    <div className="welcome viewport">
      <div className="welcome-info">
        <h1 className="header">Welcome to the Guild</h1>
        <ul>
          <li>
            <button className="static-button" href="#">
              Join a gathering
            </button>
          </li>
          <li>
            <button className="static-button" href="#">
              Watch previous gatherings
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
