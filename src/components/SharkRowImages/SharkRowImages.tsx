import { sharkRow } from '../../images'
import './SharkRowImages.css'

const SharkRowImages = () => {
  return (
    <div className="shark-row">
      <div className="upper">
        <img src={sharkRow.redSharkRight} alt="Red shark" />
        <img src={sharkRow.yellowSharkTop} alt="Yellow shark" />
        <img src={sharkRow.redSharkLeft} alt="Yellow Shark Top" />
        <img src={sharkRow.redSharkRight} alt="Red shark" />
        <img src={sharkRow.yellowSharkTop} alt="Yellow shark" />
        <img src={sharkRow.redSharkLeft} alt="Yellow Shark Top" />
      </div>
      <div className="lower">
        <img src={sharkRow.purpleSharkTop} alt="Purple shark" />
        <img src={sharkRow.purpleSharkTopRight} alt="Purple shark" />
        <img src={sharkRow.yellowSharkLeft} alt="Yellow Shark Top" />
        <img src={sharkRow.purpleSharkTop} alt="Purple shark" />
        <img src={sharkRow.purpleSharkTopRight} alt="Purple shark" />
      </div>
    </div>
  )
}

export default SharkRowImages
