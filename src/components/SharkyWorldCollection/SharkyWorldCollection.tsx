import './SharkyWorldCollection.css'

import HeaderForSection from '../common/HeaderForSection/HeaderForSection'
import SharksSlideshow from '../SharksSlideshow/SharksSlideshow'

const SharkyWorldCollection = () => {
  return (
    <section id="sharky-world-collection">
      <HeaderForSection
        title="Sharky World Collection"
        subtitle="Sharky World NFTs offer unique traits, making them valuable assets. Each element and trait of the Don Sharky collection will have an associated rarity score, which will be visible as another trait."
      />
      <SharksSlideshow />
    </section>
  )
}

export default SharkyWorldCollection
