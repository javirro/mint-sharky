import { visionImgs } from '../../images/vision'
import HeaderForSection from '../common/HeaderForSection/HeaderForSection'
import VisionItem from './VisionItem'
import './Vision.css'
import { getText } from '../../texts/getText'

const Vision = () => {
  return (
    <section id="vision">
      <HeaderForSection title={getText('vision-title')} subtitle={getText('vision-text')} />
      <section className="grid">
        <VisionItem title={'Culture'} text={getText('vision-box-1')} mainImg={visionImgs.vision1} titleImg={visionImgs.visionTitle1} />
        <VisionItem title="Sharky world" text={getText('vision-box-2')} mainImg={visionImgs.vision2} titleImg={visionImgs.visionTitle2} />
        <VisionItem title="Sharky Club" text={getText('vision-box-3')} mainImg={visionImgs.vision3} titleImg={visionImgs.visionTitle3} />
        <VisionItem title="DAO & Community Funds" text={getText('vision-box-4')} mainImg={visionImgs.vision4} titleImg={visionImgs.visionTitle4} />
        <VisionItem title="Financial Accelerationism" text={getText('vision-box-5')} mainImg={visionImgs.vision5} titleImg={visionImgs.visionTitle5} />
        <VisionItem title="Network State" text={getText('vision-box-6')} mainImg={visionImgs.vision6} titleImg={visionImgs.visionTitle6} />
      </section>
    </section>
  )
}

export default Vision
