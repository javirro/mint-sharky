import { useAccount } from 'wagmi'
import { images } from '../../images'
import { CommonProps } from '../../routes/MintHome/MintHome'
import { useGlobalWalletSignerClient } from '@abstract-foundation/agw-react'
import { abstractTestnet } from 'viem/chains'
import { PAY_TOKEN_ADDRESS, ABIS, CONTRACT_ADDRESS } from '../../contracts/mint'

import './ComingSoon.css'

const ComingSoon = ({ setTxHash, setType }: CommonProps) => {
  const { address, status } = useAccount()
  const { data: client } = useGlobalWalletSignerClient()
  const disabledButton = status !== 'connected' || !address
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
        args: [1],
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
      <button onClick={handleMintNft} disabled={disabledButton} className='mint-nft-btn'>
        Mint NFT
      </button>
    </div>
  )
}

export default ComingSoon
