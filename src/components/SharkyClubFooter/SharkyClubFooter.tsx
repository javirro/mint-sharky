import { footerBannerImgs } from '../../images/footer'
import { CommonProps } from '../../routes/MintHome/MintHome'
import HowManynfts from '../HowManyNfts/HowManyNfts'
import './SharkyClubFooter.css'

const SharkyClubFooter = ({ setTxHash, setType }: CommonProps) => {
  return (
    <section id="sharky-club-footer">
      <img src={footerBannerImgs.footerBanner} alt="Sharky Club Footer" />
      <section className="yellow-bg">
        <div className="upper">
          <p>Join us as we create innovative IP, redefine entrepreneurship in Web3, and build a community that will make a real-world impact</p>
          <button>Get whitelist</button>
        </div>
        <HowManynfts setTxHash={setTxHash} setType={setType} />
        <strong className="big-word">SHARKY CLUB</strong>
      </section>
    </section>
  )
}
export default SharkyClubFooter
