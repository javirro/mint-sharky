import { Config } from 'wagmi'
import { WriteContractMutateAsync } from 'wagmi/query'
import { ABIS, CONTRACT_ADDRESS, NETWORK, NFT_PRICE, USDT_DECIMALS } from './addresses'

import { ethers } from "ethers"

export const approve = async (
  writeContractAsync: WriteContractMutateAsync<Config, unknown>,
  tokenAddress: string,
  spender: string,
  amount: string
): Promise<`0x${string}`> => {
  const weiAmount = BigInt(+amount * 10 ** USDT_DECIMALS)
  const transactionApproveHash = await writeContractAsync({
    address: tokenAddress as `0x${string}`,
    abi: ABIS.token,
    functionName: 'approve',
    args: [spender, weiAmount],
    chain: NETWORK,
  })
  return transactionApproveHash
}


export const approveEncode =  (nftAmount: number): string => {
// Define the ERC-20 ABI fragment for the "approve" function
const erc20Abi = ["function approve(address spender, uint256 amount)"];

// Create an Interface instance
const iface = new ethers.Interface(erc20Abi);

// Define parameters
const spender: string = CONTRACT_ADDRESS; // Replace with actual spender address
  const usdtAmountWei: bigint = BigInt(nftAmount * NFT_PRICE)


// Encode the function call
const data: string = iface.encodeFunctionData("approve", [spender, usdtAmountWei]);

console.log("Encoded data:", data);
return data
}


