import { NavLink } from 'react-router-dom'
import { images } from '../../images'
import { useAccount } from 'wagmi'
import { useLoginWithAbstract } from '@abstract-foundation/agw-react'

import './Navbar.css'


const DesktopNavbar = () => {
  const { address, status } = useAccount()
  const { login } = useLoginWithAbstract()
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
          {(status === 'disconnected' || status === 'connecting') && <button onClick={login}>Connect Wallet</button>}
          {status === 'connected' && <span>{`${address.slice(0, 6)}...${address.slice(-6)}`}</span>}
        </div>
      </div>
    </nav>
  )
}

export default DesktopNavbar
