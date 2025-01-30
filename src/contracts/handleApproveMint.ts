import { USDT_ADDRESS, ABIS, CONTRACT_ADDRESS, NETWORK, NFT_PRICE, GAS } from './addresses'

export const handleMintParams = (nftAmount: number) => {
  return {
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: ABIS.mint,
    functionName: 'mintPublic',
    args: [nftAmount],
    chain: NETWORK,
    gas: GAS,
  }
}

export const handleApproveParams = (nftAmount: number) => {
  const usdtAmountWei: bigint = BigInt(nftAmount * NFT_PRICE)
  return {
    address: USDT_ADDRESS as `0x${string}`,
    abi: ABIS.token,
    functionName: 'approve',
    args: [CONTRACT_ADDRESS, usdtAmountWei],
    chain: NETWORK,
  }
}
