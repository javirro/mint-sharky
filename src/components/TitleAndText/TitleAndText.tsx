import './TitleAndText.css'

interface TitleAndTextProps {
  title: string
  text: string
  isGrid?: boolean
}

const TitleAndText = ({ title, text, isGrid = false }: TitleAndTextProps) => {
  return (
    <div className="title-text">
      <h3>{title}</h3>
      <p className={isGrid ? "ingrid" : ""}>{text}</p>
    </div>
  )
}

export default TitleAndText
