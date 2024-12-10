
import ChooseAmountNfts from '../../components/ChooseAmountNfts/ChooseAmountNfts'
import ComingSoon from '../../components/ComingSoon/ComingSoon'
import HowManynfts from '../../components/HowManyNfts/HowManyNfts'
import DesktopNavbar from '../../components/Navbar/DesktopNavbar'
import SharksSlideshow from '../../components/SharksSlideshow/SharksSlideshow'
import TitleAndText from '../../components/TitleAndText/TitleAndText'
import { images } from '../../images'
import './MintHome.css'

const MintHome = () => {

  return (
    <section className="page">
      <DesktopNavbar />
      <ChooseAmountNfts />
      <SharksSlideshow />
      <TitleAndText
        title="Why Don Sharky NFTs?"
        text="Our NFT collection offers multiple utilities within the Sharky World ecosystem, providing exclusive benefits to holders. Here are some of the main ones:"
      />
      <section className="grid">
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
      <ComingSoon />
      <HowManynfts />
    </section>
  )
}

export default MintHome
