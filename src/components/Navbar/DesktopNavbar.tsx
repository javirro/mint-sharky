import { NavLink } from 'react-router-dom'
import { useAccount, useBalance } from 'wagmi'
// import { useGlobalWalletSignerAccount, useLoginWithAbstract } from '@abstract-foundation/agw-react'
import { useGlobalWalletSignerAccount } from '@abstract-foundation/agw-react'
import './Navbar.css'

const DesktopNavbar = () => {
  const { address } = useAccount()
  const { address: addressSigner } = useGlobalWalletSignerAccount()
  // const { login, logout } = useLoginWithAbstract()
  const result = useBalance({
    address: addressSigner,
    chainId: 11124,
  })

  console.log('balanceData', result)
  const value = result?.data?.value
  const formatted = result?.data?.formatted
  console.log({ value, formatted, address, addressSigner })
  // const scanUrl = 'https://explorer.testnet.abs.xyz/address/' + addressSigner
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

        {/* <div className="right">
          {(statusSigner === 'disconnected' || status === 'connecting') && (
            <button onClick={login} className="connect">
              Connect Wallet
            </button>
          )}
          {/* {status === 'connected' && <button onClick={logout}>{`${address.slice(0, 6)}...${address.slice(-6)}`}</button>} */}
        {/* {statusSigner === 'connected' && (
            <div className="user-data-box">
              <a className='address' href={scanUrl} target='blank_' rel='noreferrer'>{`${addressSigner?.slice(0, 8)}...${addressSigner?.slice(-8)}`}</a>
              <div className="balance">
                <span >{formatted ? (+formatted)?.toFixed(6) : '0.00'} ETH</span>
                <button onClick={logout}>Disconnect</button>
              </div>
            </div>
          )} </div>  */}
      </div>
    </nav>
  )
}

export default DesktopNavbar
