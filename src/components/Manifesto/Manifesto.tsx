import useCurrentDimensions from '../../hooks/useCurrentDimensions'
import { manifestoImages } from '../../images/manifesto/images'
import { getText } from '../../texts/getText'
import './Manifesto.css'

const Manifesto = () => {
  const { width } = useCurrentDimensions()
  const isMobile = width < 768
  return (
    <section id="manifesto">
      <h3>{getText("manifesto-title")}</h3>
      <p>
      {getText("manifesto-text")}
      </p>
      {!isMobile ? (
        <div className="grid">
          <div className="left">
            <div className="img-box">
              <img src={manifestoImages.img1} alt="Manifesto1" />
            </div>
          </div>
          <div className="right">
            <div className="img-box">
              <img src={manifestoImages.img2} alt="Manifesto2" />
            </div>
            <div className="img-box">
              <img src={manifestoImages.img3} alt="Manifesto3" />
            </div>
          </div>
        </div>
      ) : (
        <img src={manifestoImages.img4} />
      )}
    </section>
  )
}

export default Manifesto
