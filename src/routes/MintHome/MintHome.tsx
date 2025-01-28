import { useState } from 'react'
import MintModal from '../../components/Modal/MintModal'
import DesktopNavbar from '../../components/Navbar/DesktopNavbar'
import MobileNavbar from '../../components/Navbar/MobileNavbar'
import useCurrentDimensions from '../../hooks/useCurrentDimensions'
import Manifesto from '../../components/Manifesto/Manifesto'
import GetAccessTo from '../../components/GetAccessTo/GetAccessTo'
import EvolutionOfSharky from '../../components/EvolutionOfSharky/EvolutionOfSharky'
import SharkyShop from '../../components/SharkyShop/SharkyShop'
import SharkyWorldCollection from '../../components/SharkyWorldCollection/SharkyWorldCollection'
import SharkyClubFooter from '../../components/SharkyClubFooter/SharkyClubFooter'

import './MintHome.css'
import { footerBannerImgs } from '../../images/footer'
import SharkyWorldTop from '../../components/SharkyWorldTop/SharkyWorldTop'

export interface CommonProps {
  setTxHash: (txHash: string) => void
  setType: (type: 'success' | 'error') => void
}
const MintHome = () => {
  const { width } = useCurrentDimensions()
  const isMobile = width < 768
  const [txHash, setTxHash] = useState<string>('')
  const [type, setType] = useState<'success' | 'error'>('success')

  return (
    <section className="page">
      {txHash !== '' && <MintModal setTxHash={setTxHash} txHash={txHash} type={type} />}
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      <img src={footerBannerImgs.beginBanner} alt="Sharky Club" className="banner" />
      <SharkyWorldTop setTxHash={setTxHash} setType={setType} />
      <Manifesto />
      <GetAccessTo />
      <EvolutionOfSharky />
      <SharkyShop />
      <SharkyWorldCollection />
      <SharkyClubFooter setTxHash={setTxHash} setType={setType} />
    </section>
  )
}

export default MintHome
