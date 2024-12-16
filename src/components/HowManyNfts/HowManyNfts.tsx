import { useState } from 'react'
import { images } from '../../images'

import { useWriteContract } from 'wagmi'
import { approve } from '../../contracts/approve'
import { CONTRACT_ADDRESS, mintPublic, PAY_TOKEN_ADDRESS } from '../../contracts/mint'
import { CommonProps } from '../../routes/MintHome/MintHome'
import './HowManyNfts.css'

const HowManynfts = ({setTxHash, setType}: CommonProps) => {
  const [nfts, setNfts] = useState(1)
  const handleChangeNft = (op: 'increase' | 'decrease') => {
    if (op === 'increase') {
      setNfts(nfts + 1)
    } else {
      setNfts((prev) => (prev > 1 ? prev - 1 : prev))
    }
  }
  const { writeContractAsync } = useWriteContract()

  const handleMintNft = async () => {
    try {
      const txApprove = await approve(writeContractAsync, PAY_TOKEN_ADDRESS, CONTRACT_ADDRESS, '1')
      console.log('txApprove', txApprove)
    } catch (error) {
      console.log('Error approving token', error)
    }

    try {
      const txMint = await mintPublic(writeContractAsync, nfts)
      setTxHash(txMint)
      console.log('txMint', txMint)
    } catch (error) {
      setType('error')
      setTxHash('Error')
      console.log('Error minting NFT', error)
    }
  }

  return (
    <section id="how-many-nfts">
      <div className="grid">
        <div className="left">
          <h4>How many NFTs are you minting?</h4>
          <div className="select-buttons">
            <button onClick={() => handleChangeNft('decrease')}>-</button>
            <span>{nfts}</span>
            <button onClick={() => handleChangeNft('increase')}>+</button>
          </div>
          <button className="mint-nft-btn" onClick={handleMintNft}>
            Mint NFT
          </button>
        </div>
        <img src={images.howManynfts} alt="How Many Nfts" />
      </div>
    </section>
  )
}

export default HowManynfts
