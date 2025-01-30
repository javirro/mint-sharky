import useCurrentDimensions from '../../hooks/useCurrentDimensions'
import { manifestoImages } from '../../images/manifesto/images'
import './Manifesto.css'

const Manifesto = () => {
  const { width } = useCurrentDimensions()
  const isMobile = width < 768
  return (
    <section id="manifesto">
      <h3>Manifesto</h3>
      {!isMobile ? (
        <div className="grid">
          <div className="left">
            <div className="img-box">
              <img src={manifestoImages.img1} alt="Manifesto1" />
              <div>
                <strong>A community</strong>
                <p>Where builders create and impact industries like web3, social, fashion or content</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img-box">
              <img src={manifestoImages.img2} alt="Manifesto2" />
              <div>
                <strong>A lifestyle</strong>
                <p>More than just NFTs, it’s a lifestyle that inspires and empowers builders</p>
              </div>
            </div>
            <div className="img-box">
              <img src={manifestoImages.img3} alt="Manifesto3" />
              <div>
                <strong>A social movement</strong>
                <p>that generates a positive impact. By entrepreneurs, for entrepreneurs.</p>
              </div>
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
