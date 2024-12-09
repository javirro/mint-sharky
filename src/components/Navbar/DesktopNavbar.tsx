import { NavLink } from 'react-router-dom'
import { images } from '../../images'
import './Navbar.css'


const DesktopNavbar = () => {
  return (
    <nav id="desktop-nav">
      <div className="content">
        <div className="left">
          <img src={images.logoSharky} alt="Sharky Logo" />
          <strong>Sharky World NFTs</strong>
        </div>
        <div className="middle">
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

        <div className="right">
          <button>Connect Wallet</button>
        </div>
      </div>
    </nav>
  )
}

export default DesktopNavbar
