export const WHITELIST_URL: string = ""

export const IS_MINT_ENABLE: boolean = import.meta.env.VITE_MINT_ENABLE === 'true'

export const IS_PRO: boolean = import.meta.env.VITE_IS_PRO === 'true'



export const openLinkWhitelist = () => {
  window.open(WHITELIST_URL, '_blank')
}