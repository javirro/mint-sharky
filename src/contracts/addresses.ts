import { abstractTestnet, abstract } from 'viem/chains'
import { IS_PRO } from '../constants'
import mintAbi from './mintAbi.json'
import tokenAbi from './tokenAbi.json'

//* Tesnet data
const tesnetContract = '0xD4f7df8AFc4411d8B02A675dEe4f613158fFA5b2'
const testnetUsdt = '0x37954Faf11f7B50AF4cc4edE1cfa6A5f593a6C1c'
const tesnetExplorer = 'https://explorer.testnet.abs.xyz/tx/'
const tesnetId = 11124

//* Mainnet data
const mainnetContract = '0x'
const mainnetUsdt = '0x'
const mainnetExplorer = 'https://explorer.abs.xyz/tx/'
const mainnetId = 2741

export const CONTRACT_ADDRESS = IS_PRO ? mainnetContract : tesnetContract
export const USDT_ADDRESS = IS_PRO ? mainnetUsdt : testnetUsdt
export const SCAN_ADDRESS_URL = IS_PRO ? `${mainnetExplorer}` : `${tesnetExplorer}`
export const NETWORK_ID = IS_PRO ? mainnetId : tesnetId
export const NETWORK = IS_PRO ? abstract : abstractTestnet

//export const ACCOUNT_DEPLOYER = "0xe887e54D74893191F323711d3419e46f7138fc2D"

export const ABIS = {
  token: tokenAbi,
  mint: mintAbi,
}
