import { sharkyShopImages } from '../../images/sharkyShop/images'
import HeaderForSection from '../common/HeaderForSection/HeaderForSection'
import './SharkyShop.css'

const SharkyShop = () => {
  return (
    <section id="sharky-shop">
      <HeaderForSection
        title="Sharky Shop"
        subtitle="Web3 brand with a powerful culture and mission. We will be the best native web3 brand, connecting physical & digital products."
      />
      <div className="container">
        <div className="grid">
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
    </section>
  )
}

export default SharkyShop
