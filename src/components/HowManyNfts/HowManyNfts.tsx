import { useState } from 'react'
import { images } from '../../images'
import './HowManyNfts.css'

const HowManynfts = () => {
  const [nfts, setNfts] = useState(1)
  const handleChangeNft = (op: 'increase' | 'decrease') => {
    if (op === 'increase') {
      setNfts(nfts + 1)
    } else {
      setNfts((prev) => (prev > 1 ? prev - 1 : prev))
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
          <button className="mint-nft-btn">Mint NFT</button>
        </div>
        <img src={images.howManynfts} alt="How Many Nfts" />
      </div>
    </section>
  )
}

export default HowManynfts
