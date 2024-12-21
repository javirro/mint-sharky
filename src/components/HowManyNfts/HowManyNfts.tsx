import { useState } from 'react'
import { images } from '../../images'
import { useGlobalWalletSignerClient } from '@abstract-foundation/agw-react'
import { useAccount } from 'wagmi'
import { abstractTestnet } from 'viem/chains'
import { ABIS, CONTRACT_ADDRESS, PAY_TOKEN_ADDRESS } from '../../contracts/mint'
import { CommonProps } from '../../routes/MintHome/MintHome'

import './HowManyNfts.css'

const HowManynfts = ({ setTxHash, setType }: CommonProps) => {
  const [nfts, setNfts] = useState(1)
  const { address, status } = useAccount()
  const { data: client } = useGlobalWalletSignerClient()
  const disabledButton = status !== 'connected' || !address
  const handleChangeNft = (op: 'increase' | 'decrease') => {
    if (op === 'increase') {
      setNfts(nfts + 1)
    } else {
      setNfts((prev) => (prev > 1 ? prev - 1 : prev))
    }
  }

  const handleMintNft = async () => {
    try {
      const txApprove = await client?.writeContract({
        address: PAY_TOKEN_ADDRESS as `0x${string}`,
        abi: ABIS.token,
        functionName: 'approve',
        args: [CONTRACT_ADDRESS, '10000000000000'],
        chain: abstractTestnet,
      })
      console.log('Tx approve', txApprove)
    } catch (error) {
      console.error('Error approving tokens', error)
    }

    try {
      const tx = await client?.writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: ABIS.mint,
        functionName: 'mintPublic',
        args: [nfts],
        chain: abstractTestnet,
        gas: BigInt(600000),
      })
      console.log('Tx minted', tx)
      setTxHash(tx as string)
      setType('success')
    } catch (error) {
      console.error('Error minting NFTs', error)
      setType('error')
      setTxHash('error')
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
          <button className="mint-nft-btn" onClick={handleMintNft} disabled={disabledButton}>
            Mint NFT
          </button>
        </div>
        <img src={images.howManynfts} alt="How Many Nfts" />
      </div>
    </section>
  )
}

export default HowManynfts
