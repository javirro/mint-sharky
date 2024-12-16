import { WriteContractMutateAsync } from 'wagmi/query'
import mintAbi from './mintAbi.json'
import tokenAbi from './tokenAbi.json'
import { abstractTestnet } from 'viem/chains'
import { Config } from 'wagmi'


export const CONTRACT_ADDRESS = '0x6BD39e8D6C4beE0caCF3A606c6b977E90E173c1a'

export const PAY_TOKEN_ADDRESS = '0x37954Faf11f7B50AF4cc4edE1cfa6A5f593a6C1c'

export const ACCOUNT_DEPLOYER = "0xe887e54D74893191F323711d3419e46f7138fc2D"

export const SCAN_ADDRESS_URL = 'https://explorer.testnet.abs.xyz/tx/'

export const ABIS = {
  token: tokenAbi,
  mint: mintAbi,
}

export const mintPublic = async (writeContractAsync: WriteContractMutateAsync<Config, unknown>, amount: number): Promise<`0x${string}`> => {
  const transactionApproveHash = await writeContractAsync({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: ABIS.mint,
    functionName: 'mintPublic',
    args: [amount],
    chain: abstractTestnet,
  })
  return transactionApproveHash
}
