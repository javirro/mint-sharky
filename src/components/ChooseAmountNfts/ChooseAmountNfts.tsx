import React, { useState } from 'react'
import { CommonProps } from '../../routes/MintHome/MintHome'
import { useHandleConnection } from '../../hooks/useAbstract'
import { useGlobalWalletSignerClient } from '@abstract-foundation/agw-react'
import { IS_MINT_ENABLE, openLinkWhitelist } from '../../constants'
import { handleApproveParams, handleMintParams } from '../../contracts/handleApproveMint'
import { images } from '../../images'

import './ChooseAmountNfts.css'

const ChooseAmountNfts = ({ setTxHash, setType }: CommonProps) => {
  const { login, address } = useHandleConnection()
  const { data: client } = useGlobalWalletSignerClient()
  const disabledButton = !address
  const [nfts, setNfts] = useState(1)

  const handleChangeNft = (op: 'increase' | 'decrease') => {
    if (op === 'increase') {
      setNfts(nfts + 1)
    } else {
      setNfts((prev) => (prev > 1 ? prev - 1 : prev))
    }
  }

  const handleMintNft = async () => {
    try {
      const approveParams = handleApproveParams(nfts)
      const txApprove = await client?.writeContract(approveParams)
      console.log('Tx approve', txApprove)
    } catch (error) {
      console.error('Error approving tokens', error)
    }

    try {
      const mintPublicParams = handleMintParams(nfts)
      const tx = await client?.writeContract(mintPublicParams)
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
    <div className="sharky-nfts-box">
      <img src={images.howManynfts} alt="How Many Nfts" />
      <h4>GET SHARKY WORLD WL</h4>
      <div className="select-buttons">
        <button onClick={() => handleChangeNft('decrease')}>-</button>
        <span>{nfts}</span>
        <button onClick={() => handleChangeNft('increase')}>+</button>
      </div>
      <div className="buttons-box">
      {IS_MINT_ENABLE ? (
        <>
          {address && (
            <button className="mint-nft-btn" onClick={handleMintNft} disabled={disabledButton}>
              Mint NFT
            </button>
          )}
          {!address && (
            <button className="mint-nft-btn" onClick={login}>
              Connect Wallet
            </button>
          )}
        </>
      ) : (
        <JoinSharkyWorld />
      )}
      {!IS_MINT_ENABLE && <span>Mint coming soon</span>}
      </div>
    </div>
  )
}

export default ChooseAmountNfts

const JoinSharkyWorld: React.FC = () => (
  <button className="mint-nft-btn" onClick={() => openLinkWhitelist()}>
    Join Sharky World
  </button>
)
