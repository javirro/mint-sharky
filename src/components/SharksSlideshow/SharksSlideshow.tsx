import { slideShowImgs } from '../../images'
import './SharksSlideShow.css'

const SharksSlideshow = () => {
  const { redSharkSlide, purpleSharkSlide, blackSharkSlide } = slideShowImgs
  const images = [redSharkSlide, blackSharkSlide, purpleSharkSlide, redSharkSlide, purpleSharkSlide]
  return (
    <div className="slideshow-box">
      <div className="slideshow">
        {images.map((img, index) => (
          <img key={index} src={img} alt="shark" className="slide" />
        ))}
        {images.map((img, index) => (
          <img key={`duplicated-${index}`} src={img} alt="shark" className="slide" />
        ))}
      </div>
    </div>
  )
}

export default SharksSlideshow
