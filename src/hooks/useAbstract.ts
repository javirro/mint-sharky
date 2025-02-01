import { useGlobalWalletSignerAccount, useLoginWithAbstract } from '@abstract-foundation/agw-react'
import { useAccount, useBalance } from 'wagmi'
import { NETWORK_ID, USDT_ADDRESS } from '../contracts/addresses'

export const useHandleConnection = () => {
  const { login, logout } = useLoginWithAbstract()
  const { address: addressSigner } = useGlobalWalletSignerAccount()
  const { address } = useAccount()

  return { login, logout, addressSigner, address }
}

export const useETHBalance = (addressSigner: `0x${string}`) => {
  const result = useBalance({
    address: addressSigner,
    chainId: NETWORK_ID,
  })
  const value = result?.data?.value
  const formatted = result?.data?.formatted
  return { ethWei: value, ethBalance: formatted }
}

export const useUSDTBalance = (addressSigner: `0x${string}`) => {
  const result = useBalance({
    address: addressSigner,
    chainId: NETWORK_ID,
    token: USDT_ADDRESS as `0x${string}`,
  })
  const value = result?.data?.value
  const formatted = result?.data?.formatted
  return { usdtWei: value, usdtBalance: formatted }
}
