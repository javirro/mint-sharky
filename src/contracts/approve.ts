import { Config } from 'wagmi'
import { WriteContractMutateAsync } from 'wagmi/query'
import { ABIS, NETWORK, USDT_DECIMALS } from './addresses'

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
