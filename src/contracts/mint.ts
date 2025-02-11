import { WriteContractMutateAsync } from 'wagmi/query'
import { Config } from 'wagmi'
import { ABIS, CONTRACT_ADDRESS, NETWORK } from './addresses'
import { ethers } from 'ethers'

export const mintPublic = async (writeContractAsync: WriteContractMutateAsync<Config, unknown>, amount: number): Promise<`0x${string}`> => {
  const transactionApproveHash = await writeContractAsync({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: ABIS.mint,
    functionName: 'mintPublic',
    args: [amount],
    chain: NETWORK,
  })
  return transactionApproveHash
}


export const encodeMintPublic =  (nftAmount: number): string => {
// Define the ERC-20 ABI fragment for the "approve" function
const erc20Abi = ["function mintPublic(uint256 amount)"];

// Create an Interface instance
const iface = new ethers.Interface(erc20Abi);

// Encode the function call
const data: string = iface.encodeFunctionData("mintPublic", [nftAmount]);

console.log("Encoded data:", data);
return data
}
