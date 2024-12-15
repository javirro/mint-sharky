import { useState } from 'react'
import './ChooseAmountNfts.css'


const ChooseAmountNfts = () => {
  const [nfts, setNfts] = useState(1)

  const handleChangeNft = (op: 'increase' | 'decrease') => {
    if (op === 'increase') {
      setNfts(nfts + 1)
    } else {
      setNfts((prev) => (prev > 1 ? prev - 1 : prev))
    }
  }
  return (
    <div className="sharky-nfts-box">
      <h4>How many NFTs are you minting?</h4>
      <div className="select-buttons">
        <button onClick={() => handleChangeNft('decrease')}>-</button>
        <span>{nfts}</span>
        <button onClick={() => handleChangeNft('increase')}>+</button>
      </div>
      <button className="mint-nft-btn">Mint NFT</button>
    </div>
  )
}

export default ChooseAmountNfts
