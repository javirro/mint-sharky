import { slideShowImgs } from '../../images/slideShowImages'

import './SharksSlideShow.css'

const SharksSlideshow = () => {
  const { img1, img2, img3, img4 } = slideShowImgs
  const images = [img1, img2, img3, img4]
  const titles = ['Common', 'Rare', 'Super Rare', 'Epic']
  const points = ['(≤ 80 SK Points)', '(81-110 SK Points)', '(111-150 SK Points)', '(151-190 SK Points)']
  const texts = [
    'Every revolution begins with a visionary. Today, you start your journey to greatness',
    'You are rising as a leader in the making. Your impact is becoming unstoppable',
    "Your achievements echo as an example. You're leaving a mark no one can erase",
    'You are the architect of your destiny, a pioneer reshaping the game forever',
  ]
  return (
    <div className="slideshow-box">
      <div className="slideshow">
        {images.map((img, index) => (
          <article>
            <div className="title">
              <strong>{titles[index]}</strong>
              <span>{points[index]}</span>
            </div>
            <img key={index} src={img} alt="shark" className="slide" />
            <p>{texts[index]}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default SharksSlideshow
