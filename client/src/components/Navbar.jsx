import { Link } from 'react-router-dom';
function BasicExample() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="/Strive-Logo.jpg" alt="Logo" className="logo" />
        </Link>
        <button className="navbar-toggle" aria-controls="basic-navbar-nav">
          ☰
        </button>
        <div className="navbar-collapse" id="basic-navbar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/landing" className="nav-link">Landing</Link>
            </li>
            <li className="nav-item">
              <Link to="/taskboard" className="nav-link">TaskBoard</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item dropdown">
              <button className="dropdown-toggle">More</button>
              <div className="dropdown-menu">
                <Link to="#action/3.1" className="dropdown-item">Action</Link>
                <Link to="#action/3.2" className="dropdown-item">Another action</Link>
                <Link to="#action/3.3" className="dropdown-item">Something else here</Link>
                <div className="dropdown-divider"></div>
                <Link to="#action/3.4" className="dropdown-item">Separated link</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default BasicExample;