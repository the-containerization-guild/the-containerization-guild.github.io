export default function Welcome() {
    return (
        <div className="welcome viewport welcome-grid">
          <div className="welcome-info">
            <h1 className="header">Name of project</h1>
            <h2 className="welcome-h2">
              Flavour text for project
            </h2>
            <ul>
              <li>
                  <button className="static-button" href="#">
                    <img alt="Button 1"></img>
                    Link 1
                  </button>
              </li>
              <li>
                  <button className="static-button" href="#">
                    <img alt="Button 2"></img>
                    Link 2
                  </button>
              </li>
              <li>
                  <button className="static-button" href="#">
                    <img alt="Button 3"></img>
                    Link 3
                  </button>
              </li>
              <li>
                  <button className="static-button" href="#">
                    <img alt="Button 4"></img>
                    Link 4
                  </button>
              </li>
            </ul>
          </div>
          <div className="welcome-image">
            <img
              className="logo-full"
              alt=""
            ></img>
          </div>
        </div>
    )
}