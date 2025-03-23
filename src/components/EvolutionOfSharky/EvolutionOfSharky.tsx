import { evolutionImages } from '../../images/evolution/images'
import { getText } from '../../texts/getText'
import HeaderForSection from '../common/HeaderForSection/HeaderForSection'
import './EvolutionOfSharky.css'

const EvolutionOfSharky = () => {
  return (
    <section id="evolution">
      <HeaderForSection title={getText('evolution-sharky-title')} subtitle={getText('evolution-sharky-text')} />

      <div className="container">
        <article className="box-1">
          <img src={evolutionImages.img1} alt="Evolution 1" />
          <div>
            <strong>Sharky “OG”s</strong>
            <span>March 2021-June 2022</span>
          </div>
        </article>
        <article className="box-1">
          <img src={evolutionImages.img2} alt="Evolution 2" />
          <div>
            <strong>Sharky Maker</strong>
            <span>July 2022 - January 2023</span>
          </div>
        </article>
        <article className="box-1">
          <img src={evolutionImages.img3} alt="Evolution 3" />
          <div>
            <strong>Don sharky</strong>
            <span>Febuary 2023 - Present</span>
          </div>
        </article>
      </div>
    </section>
  )
}

export default EvolutionOfSharky
