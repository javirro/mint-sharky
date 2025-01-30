import { useState } from 'react'
import { images } from '../../images'
import { useGlobalWalletSignerClient } from '@abstract-foundation/agw-react'
import { useHandleConnection } from '../../hooks/useAbstract'
import { CommonProps } from '../../routes/MintHome/MintHome'
import { IS_MINT_ENABLE, openLinkWhitelist } from '../../constants'
import { handleApproveParams, handleMintParams } from '../../contracts/handleApproveMint'

import './HowManyNfts.css'


const HowManynfts = ({ setTxHash, setType }: CommonProps) => {
  const { login, address } = useHandleConnection()
  const [nfts, setNfts] = useState(1)
  const { data: client } = useGlobalWalletSignerClient()
  const disabledButton = !address
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
    <section id="how-many-nfts">
      <img src={images.howManynfts} alt="How Many Nfts" />
      <div className="get-donsharky">
        <strong>Get sharky world NFT</strong>
        <div className="select-buttons">
          <button onClick={() => handleChangeNft('decrease')}>-</button>
          <span>{nfts}</span>
          <button onClick={() => handleChangeNft('increase')}>+</button>
        </div>
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
      </div>
    </section>
  )
}

export default HowManynfts

const JoinSharkyWorld: React.FC = () => (
  <button className="mint-nft-btn" onClick={() => openLinkWhitelist()}>
    Join Sharky World
  </button>
)
