import { IS_MINT_ENABLE, openLinkWhitelist } from '../../constants'
import { footerBannerImgs } from '../../images/footer'
import { CommonProps } from '../../routes/MintHome/MintHome'
import { getText } from '../../texts/getText'
import HowManynfts from '../HowManyNfts/HowManyNfts'
import './SharkyClubFooter.css'

const SharkyClubFooter = ({ setTxHash, setType }: CommonProps) => {
  return (
    <section id="sharky-club-footer">
      <img src={footerBannerImgs.footerBanner} alt="Sharky Club Footer" className="eeuu-banner" />
      <section className="yellow-bg">
        <div className="upper">
          <p>{getText('footer-text')}</p>
          {!IS_MINT_ENABLE && (
            <button className="mint-nft-btn" onClick={() => openLinkWhitelist()}>
              Get whitelist
            </button>
          )}
        </div>
        <HowManynfts setTxHash={setTxHash} setType={setType} />
        <strong className="big-word">SHARKY CLUB</strong>
      </section>
    </section>
  )
}
export default SharkyClubFooter
