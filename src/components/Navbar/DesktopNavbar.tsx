import { NavLink } from 'react-router-dom'
import './Navbar.css'

const DesktopNavbar = () => {
  return (
    <nav id="desktop-nav">
      <div className="content">
        <div className="middle">
          <NavLink to="/about" className="links disabled">
            Sharky World
          </NavLink>
          <NavLink to="/" className="links">
            Sharky club
          </NavLink>
          <NavLink to="/documents" className="links disabled">
            Sharky labs
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default DesktopNavbar
