import { NavLink } from 'react-router-dom'
import './Navbar.css'
const MobileNavbar = () => {
  return (
    <nav id="mobile-nav">
      <div className="content">
        <NavLink to="/" className="links">
          Home
        </NavLink>
        <NavLink to="/about" className="links">
          About us
        </NavLink>
        <NavLink to="/documents" className="links">
          Documents
        </NavLink>
        <NavLink to="/blog" className="links">
          Blogs
        </NavLink>
      </div>
    </nav>
  )
}

export default MobileNavbar
