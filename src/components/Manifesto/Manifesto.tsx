import useCurrentDimensions from '../../hooks/useCurrentDimensions'
import { manifestoImages } from '../../images/manifesto/images'
import './Manifesto.css'

const Manifesto = () => {
  const { width } = useCurrentDimensions()
  const isMobile = width < 768
  return (
    <section id="manifesto">
      <h3>Manifesto</h3>
      <p>
        Sharky World is a social brand. Owning a Sharky NFT gives you a digital identity that reflects the type of person you are a nonconformist entrepreneur
        who follows their own path.
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
