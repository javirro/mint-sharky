import { CommonProps } from '../../routes/MintHome/MintHome'
import { getText } from '../../texts/getText'
import ChooseAmountNfts from '../ChooseAmountNfts/ChooseAmountNfts'
import './SharkyWorldTop.css'

const SharkyWorldTop = ({ setTxHash, setType }: CommonProps) => {
  return (
    <section id="sharky-world-top">
      <div className="header">
        <h1>{getText("sharky-world-title")}</h1>
        <p>
        {getText("sharky-world-text")}
        </p>
      </div>
      <section className='middle'>
      <ChooseAmountNfts setTxHash={setTxHash} setType={setType} />
      </section>
    </section>
  )
}

export default SharkyWorldTop
