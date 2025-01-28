import { evolutionImages } from '../../images/evolution/images'
import HeaderForSection from '../common/HeaderForSection/HeaderForSection'
import './EvolutionOfSharky.css'

const EvolutionOfSharky = () => {
  return (
    <section id="evolution">
      <HeaderForSection
        title="Evolution of sharky"
        subtitle="HARKY is the artistic creation that symbolizes our way of understanding life However, it hasn't been easy to create our Sharky. It has been a long
          process of two years and three evolutions! 🦈"
      />

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
