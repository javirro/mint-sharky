import './VisionItem.css'
interface VisionItemProps {
  title: string
  text: string
  mainImg: string
  titleImg: string
}
const VisionItem = ({ title, text, mainImg, titleImg }: VisionItemProps) => {
  return (
    <article className="vision-box">
      <div className="header">
        <div className="box">
          <img src={titleImg} alt="Vision" />
        </div>
        <h3>{title}</h3>
      </div>
      <div className="content">
        <img src={mainImg} alt="Vision" />
        <p>{text}</p>
      </div>
    </article>
  )
}
export default VisionItem
