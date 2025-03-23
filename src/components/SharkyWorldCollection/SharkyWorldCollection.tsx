import { IS_MINT_ENABLE, openLinkWhitelist } from '../../constants'
import { useHandleConnection } from '../../hooks/useAbstract'
import HeaderForSection from '../common/HeaderForSection/HeaderForSection'
import SharksSlideshow from '../SharksSlideshow/SharksSlideshow'
import { CommonProps } from '../../routes/MintHome/MintHome'
import { USDT_ADDRESS, CONTRACT_ADDRESS } from '../../contracts/addresses'
import { approveEncode } from '../../contracts/approve'
import { encodeMintPublic } from '../../contracts/mint'
import { useAbstractClient } from '@abstract-foundation/agw-react'

import './SharkyWorldCollection.css'
import { getText } from '../../texts/getText'

const SharkyWorldCollection = ({ setTxHash, setType }: CommonProps) => {
  const { login, address } = useHandleConnection()
  const { data: abstractClient } = useAbstractClient()

  const handleMintNft = async () => {
    const nfts = 1
    try {
      const txApprove = await abstractClient?.sendTransaction({
        to: USDT_ADDRESS as `0x${string}`,
        data: approveEncode(nfts) as `0x${string}`,
      })
      console.log('Tx approve', txApprove)
    } catch (error) {
      console.error('Error approving tokens', error)
    }

    try {
      const tx = await abstractClient?.sendTransaction({
        to: CONTRACT_ADDRESS as `0x${string}`,
        data: encodeMintPublic(nfts) as `0x${string}`,
      })
      console.log('Tx minted', tx)
      setTxHash(tx as string)
      setType('success')
    } catch (error) {
      console.error('Error minting NFTs:', error)
      setType('error')
      setTxHash('error')
    }
  }
  return (
    <section id="sharky-world-collection">
      <HeaderForSection title={getText('sharky-world-collection-title')} subtitle={getText('sharky-world-collection-text')} />
      <SharksSlideshow />
      <div className="buttons-box">
        {IS_MINT_ENABLE ? (
          <>
            {address && (
              <button className="yellow-btn" onClick={handleMintNft}>
                Mint NFT
              </button>
            )}
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
