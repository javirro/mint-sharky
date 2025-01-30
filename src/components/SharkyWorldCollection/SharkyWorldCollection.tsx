
import HeaderForSection from '../common/HeaderForSection/HeaderForSection'
import SharksSlideshow from '../SharksSlideshow/SharksSlideshow'

import './SharkyWorldCollection.css'


const SharkyWorldCollection = () => {
  return (
    <section id="sharky-world-collection">
      <HeaderForSection
        title="Sharky World Collection"
        subtitle="Sharky World NFTs offer unique traits, making them valuable assets. Each element and trait of the Don Sharky collection will have an associated rarity score, which will be visible as another trait."
      />
      <SharksSlideshow />
      <button className="yellow-btn">Mint NFT</button>
    </section>
  )
}

export default SharkyWorldCollection
