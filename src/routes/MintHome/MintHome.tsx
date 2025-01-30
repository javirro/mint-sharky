import { useState } from 'react'
import MintModal from '../../components/Modal/MintModal'
import DesktopNavbar from '../../components/Navbar/DesktopNavbar'
import Manifesto from '../../components/Manifesto/Manifesto'
import KeyBenefits from '../../components/GetAccessTo/KeyBenefits'
import EvolutionOfSharky from '../../components/EvolutionOfSharky/EvolutionOfSharky'
import SharkyShop from '../../components/SharkyShop/SharkyShop'
import SharkyWorldCollection from '../../components/SharkyWorldCollection/SharkyWorldCollection'
import SharkyClubFooter from '../../components/SharkyClubFooter/SharkyClubFooter'
import { footerBannerImgs } from '../../images/footer'
import SharkyWorldTop from '../../components/SharkyWorldTop/SharkyWorldTop'

import './MintHome.css'

export interface CommonProps {
  setTxHash: (txHash: string) => void
  setType: (type: 'success' | 'error') => void
}
const MintHome = () => {
  const [txHash, setTxHash] = useState<string>('')
  const [type, setType] = useState<'success' | 'error'>('success')

  return (
    <section className="page">
      {txHash !== '' && <MintModal setTxHash={setTxHash} txHash={txHash} type={type} />}
      <DesktopNavbar />
      <img src={footerBannerImgs.beginBanner} alt="Sharky Club" className="banner" />
      <SharkyWorldTop setTxHash={setTxHash} setType={setType} />
      <Manifesto />
      <KeyBenefits />
      <EvolutionOfSharky />
      <SharkyWorldCollection setTxHash={setTxHash} setType={setType}/>
      <SharkyShop />
      <SharkyClubFooter setTxHash={setTxHash} setType={setType} />
    </section>
  )
}

export default MintHome
