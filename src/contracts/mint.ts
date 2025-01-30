import { WriteContractMutateAsync } from 'wagmi/query'
import { Config } from 'wagmi'
import { ABIS, CONTRACT_ADDRESS, NETWORK } from './addresses'

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
