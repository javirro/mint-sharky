import { useState } from 'react'
import ChooseAmountNfts from '../../components/ChooseAmountNfts/ChooseAmountNfts'
import ComingSoon from '../../components/ComingSoon/ComingSoon'
import HowManynfts from '../../components/HowManyNfts/HowManyNfts'
import MintModal from '../../components/Modal/MintModal'
import DesktopNavbar from '../../components/Navbar/DesktopNavbar'
import MobileNavbar from '../../components/Navbar/MobileNavbar'
import SharksSlideshow from '../../components/SharksSlideshow/SharksSlideshow'
import TitleAndText from '../../components/TitleAndText/TitleAndText'
import useCurrentDimensions from '../../hooks/useCurrentDimensions'
import { images } from '../../images'
import './MintHome.css'

export interface CommonProps {
  setTxHash: (txHash: string) => void
  setType: (type: "success" | "error") => void
}
const MintHome = () => {
  const { width } = useCurrentDimensions()
  const isMobile = width < 768
  const [txHash, setTxHash] = useState<string>("")
  const [type, setType] = useState<"success" | "error">("success")

  return (
    <section className="page">
      {txHash !== "" && <MintModal setTxHash={setTxHash} txHash={txHash} type={type} />}
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      <ChooseAmountNfts setTxHash={setTxHash} setType={setType}/>
      <SharksSlideshow />
      <TitleAndText
        title="Why Don Sharky NFTs?"
        text="Our NFT collection offers multiple utilities within the Sharky World ecosystem, providing exclusive benefits to holders. Here are some of the main ones:"
      />
      <section className={!isMobile ? "grid" : "reverse"}>
        <img src={images.sharkPercetanges} alt="Sharky Percetanges" />
        <TitleAndText
          isGrid={true}
          title="Percentage of Sales Revenue"
          text="NFT holders receive a percentage of the revenue generated from product sales within Sharky Club. This allows them to earn passive income and actively participate in the platform’s growth."
        />
      </section>

      <section className="grid">
        <TitleAndText
          isGrid={true}
          title="Access to Sharky Cabal"
          text="The NFTs grant exclusive access to Sharky Cabal, a token-gated community where members can interact, share content, create and participate in voting, and in special events hosted on the platform."
        />
        <img src={images.sharkyCabal} alt="Sharky Cabal" />
      </section>
      <SharksSlideshow />
      <ComingSoon setTxHash={setTxHash} setType={setType}/>
      <HowManynfts setTxHash={setTxHash} setType={setType}/>
    </section>
  )
}

export default MintHome
