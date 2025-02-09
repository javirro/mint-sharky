import { abstractTestnet, abstract } from 'viem/chains'
import { IS_PRO } from '../constants'
import mintAbi from './mintAbi.json'
import tokenAbi from './tokenAbi.json'

const NFT_USD_PRICE = 0.00002 // 100$

//* Tesnet data
const tesnetContract = '0xD4f7df8AFc4411d8B02A675dEe4f613158fFA5b2'
const testnetUsdt = '0x37954Faf11f7B50AF4cc4edE1cfa6A5f593a6C1c'
const testnetUsdtDecimals = 18
const tesnetExplorer = 'https://explorer.testnet.abs.xyz/tx/'
const tesnetId = 11124
const testnetNFTPrice = NFT_USD_PRICE * 10 ** testnetUsdtDecimals

//* Mainnet data
const mainnetContract = '0x6F25359E839Cc53F3a3bD781aC860e023dae515b'
const mainnetUsdt = '0x84A71ccD554Cc1b02749b35d22F684CC8ec987e1'
const mainnetUsdtDecimals = 6
const mainnetExplorer = 'https://abscan.org/tx/'
const mainnetId = 2741
const mainnetNFTPrice = NFT_USD_PRICE * 10 ** mainnetUsdtDecimals

export const CONTRACT_ADDRESS: string = IS_PRO ? mainnetContract : tesnetContract
export const USDT_ADDRESS: string = IS_PRO ? mainnetUsdt : testnetUsdt
export const USDT_DECIMALS: number = IS_PRO ? mainnetUsdtDecimals : testnetUsdtDecimals
export const SCAN_ADDRESS_URL: string = IS_PRO ? `${mainnetExplorer}` : `${tesnetExplorer}`
export const NFT_PRICE: number = IS_PRO ? mainnetNFTPrice : testnetNFTPrice
export const NETWORK_ID: number = IS_PRO ? mainnetId : tesnetId
export const NETWORK = IS_PRO ? abstract : abstractTestnet

export const GAS = BigInt(600000)

//export const ACCOUNT_DEPLOYER = "0xe887e54D74893191F323711d3419e46f7138fc2D"

export const ABIS = {
  token: tokenAbi,
  mint: mintAbi,
}
