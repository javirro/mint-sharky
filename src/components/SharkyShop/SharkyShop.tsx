import { openLinkWhitelist } from '../../constants'
import { sharkyShopImages } from '../../images/sharkyShop/images'
import { getText } from '../../texts/getText'
import HeaderForSection from '../common/HeaderForSection/HeaderForSection'
import './SharkyShop.css'

const SharkyShop = () => {
  return (
    <section id="sharky-shop">
      <HeaderForSection title={getText('sharky-shop-title')} subtitle={getText('sharky-shop-text')} />
      <div className="container">
        <div className="grid-shop">
          <article>
            <img src={sharkyShopImages.img1} alt="Sharky Shop 1" />
            <strong>Art</strong>
          </article>
          <article>
            <img src={sharkyShopImages.img2} alt="Sharky Shop 2" />
            <strong>Fashion and culture</strong>
          </article>
          <article>
            <img src={sharkyShopImages.img3} alt="Sharky Shop 3" />
            <strong>Jewelry</strong>
          </article>
        </div>
      </div>
      <button className="yellow-btn" onClick={() => openLinkWhitelist()}>
        Join Sharky World
      </button>
    </section>
  )
}

export default SharkyShop
