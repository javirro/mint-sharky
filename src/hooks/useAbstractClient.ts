import { useAbstractClient } from '@abstract-foundation/agw-react'
import { ABIS, CONTRACT_ADDRESS, USDT_ADDRESS } from '../contracts/addresses'

const useAbstractClientFunctions = (amount: bigint) => {
  const { data: abstractClient } = useAbstractClient()

  const approve = async () => {
    if (abstractClient) {
      try {
        const txApprove = await abstractClient.writeContract({
          address: USDT_ADDRESS as `0x${string}`,
          abi: ABIS.token,
          functionName: 'approve',
          args: [CONTRACT_ADDRESS, amount],
        })
        console.log('txApprove', txApprove)
      } catch (error) {
        console.log('Error approving token', error)
      }
    }
  }

  return { approve }
}

export default useAbstractClientFunctions
