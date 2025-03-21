import { visionImgs } from '../../images/vision'
import HeaderForSection from '../common/HeaderForSection/HeaderForSection'
import VisionItem from './VisionItem'
import './Vision.css'


const Vision = () => {
  return (
    <section id="vision">
      <HeaderForSection title="Vision" subtitle="From Culture to a Network State" />
      <section className="grid">
        <VisionItem
          title={'Culture'}
          text="We start by building a strong identity and global community."
          mainImg={visionImgs.vision1}
          titleImg={visionImgs.visionTitle1}
        />
        <VisionItem
          title="Sharky world"
          text="NFTs that go beyond art—holders get revenue share, exclusive events, and access to IP rights."
          mainImg={visionImgs.vision2}
          titleImg={visionImgs.visionTitle2}
        />
        <VisionItem
          title="Sharky Club"
          text="A web3 social hub where creators, communities, and DAOs connect, collaborate, and grow."
          mainImg={visionImgs.vision3}
          titleImg={visionImgs.visionTitle3}
        />
        <VisionItem
          title="DAO & Community Funds"
          text="Powering collective decisions and shared opportunities."
          mainImg={visionImgs.vision4}
          titleImg={visionImgs.visionTitle4}
        />
        <VisionItem
          title="Financial Accelerationism"
          text="Scaling fast with shared revenue, innovation funding, and key partnerships."
          mainImg={visionImgs.vision5}
          titleImg={visionImgs.visionTitle5}
        />
        <VisionItem
          title="Network State"
          text="A web3 social hub where creators, communities, and DAOs connect, collaborate, and grow."
          mainImg={visionImgs.vision6}
          titleImg={visionImgs.visionTitle6}
        />
      </section>
    </section>
  )
}

export default Vision
