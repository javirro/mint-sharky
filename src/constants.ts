export const WHITELIST_URL: string = "https://docs.google.com/forms/d/e/1FAIpQLSdRj80k3o_RF1wkGrhrWo1-BVdvoxT0I2l95LYxUy5IW2qXVw/viewform?usp=sf_link"

export const IS_MINT_ENABLE: boolean = import.meta.env.VITE_MINT_ENABLE === 'true'

export const IS_PRO: boolean = import.meta.env.VITE_IS_PRO === 'true'



export const openLinkWhitelist = () => {
  window.open(WHITELIST_URL, '_blank')
}