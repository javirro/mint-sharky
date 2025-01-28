import './HeaderForSection.css'
const HeaderForSection = ({ title, subtitle }: {title: string, subtitle: string}) => {
    return (
        <div className="header-for-section">
            <h5>{title}</h5>
            <p>{subtitle}</p>
        </div>
    )
}

export default HeaderForSection