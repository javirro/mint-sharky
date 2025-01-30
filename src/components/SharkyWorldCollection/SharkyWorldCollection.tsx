import { IS_MINT_ENABLE, openLinkWhitelist } from '../../constants'
import { useHandleConnection } from '../../hooks/useAbstract'
import HeaderForSection from '../common/HeaderForSection/HeaderForSection'
import SharksSlideshow from '../SharksSlideshow/SharksSlideshow'

import './SharkyWorldCollection.css'

const SharkyWorldCollection = () => {
  const { login, address } = useHandleConnection()
  return (
    <section id="sharky-world-collection">
      <HeaderForSection
        title="Sharky World Collection"
        subtitle="Sharky World NFTs offer unique traits, making them valuable assets. Each element and trait of the Don Sharky collection will have an associated rarity score, which will be visible as another trait."
      />
      <SharksSlideshow />
      <div className="buttons-box">
        {IS_MINT_ENABLE ? (
          <>
            {address && <button className="yellow-btn">Mint NFT</button>}
            {!address && (
              <button className="yellow-btn" onClick={login}>
                Connect Wallet
              </button>
            )}
          </>
        ) : (
          <JoinSharkyWorld />
        )}
        {!IS_MINT_ENABLE && <span>Mint coming soon</span>}
      </div>
    </section>
  )
}

export default SharkyWorldCollection

const JoinSharkyWorld: React.FC = () => (
  <button className="yellow-btn" onClick={() => openLinkWhitelist()}>
    Join Sharky World
  </button>
)
