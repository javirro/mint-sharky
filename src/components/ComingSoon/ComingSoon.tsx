import { useAccount } from 'wagmi'
import { images } from '../../images'
import { CommonProps } from '../../routes/MintHome/MintHome'
import './ComingSoon.css'

const ComingSoon = ({setTxHash, setType}: CommonProps) => {
    const { address, status } = useAccount()
    const disabledButton = status !== 'connected' || !address
  const handleMintNft = async () => {
    try {
      // const txApprove = await approve(writeContractAsync, PAY_TOKEN_ADDRESS, CONTRACT_ADDRESS, '1')
      // console.log('txApprove', txApprove)
    } catch (error) {
      console.log('Error approving token', error)
    }

    try {
      const txMint = ""
      setTxHash(txMint)
      setType('success')
      // const txMint = await mintPublic(writeContractAsync, nfts)
      // setTxHash(txMint)
      // console.log('txMint', txMint)
    } catch (error) {
      console.log('Error minting NFT', error)
      setType('error')
      setTxHash('Error')
    }
  }
  return (
    <div className="coming-soon">
      <h3>Coming Soon</h3>
      <div className="grid">
        <div>
          <img src={images.brain} alt="Brain" />
          <section>
            <h4>Unlock Sharky IP</h4>
            <p>
              Holders will also have the opportunity to unlock Sharky IP (intellectual property), granting them access to exclusive content, usage rights, and
              unique opportunities within the Sharky World ecosystem.
            </p>
          </section>
        </div>
        <div>
          <img src={images.gift} alt="Gift" />
          <section>
            <h4>Unlock Sharky Points</h4>
            <p>
              Holders will be able to unlock Sharky Points, which will provide additional rewards and benefits within Sharky World. These points will enhance
              members’ experiences and grant access to airdrops, and Sharky Shop (collaborative marketplace for purchasing experiences)
            </p>
          </section>
        </div>
      </div>
      <button onClick={handleMintNft} disabled={disabledButton}>Mint NFT</button>
    </div>
  )
}

export default ComingSoon
