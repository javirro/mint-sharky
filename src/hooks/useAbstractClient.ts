import { useAbstractClient } from '@abstract-foundation/agw-react'
import { PAY_TOKEN_ADDRESS, ABIS, CONTRACT_ADDRESS } from '../contracts/mint'

const useAbstractClientFunctions = (amount: bigint) => {
  const { data: abstractClient } = useAbstractClient()

  const approve = async () => {
    if (abstractClient) {
      try {
        const txApprove = await abstractClient.writeContract({
          address: PAY_TOKEN_ADDRESS,
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
