import { CommonProps } from '../../routes/MintHome/MintHome'
import ChooseAmountNfts from '../ChooseAmountNfts/ChooseAmountNfts'
import './SharkyWorldTop.css'

const SharkyWorldTop = ({ setTxHash, setType }: CommonProps) => {
  return (
    <section id="sharky-world-top">
      <div className="header">
        <h1>SHARKY WORLD</h1>
        <p>
          Welcome to Sharky World, an ecosystem built for entrepreneurs in Web3. Sharky World is more than just an NFT collection – it’s the foundation for a
          community that empowers creators and innovators to shape the future of digital entrepreneurship, entertainment, technology, and art.
        </p>
      </div>
      <section className='middle'>
      <ChooseAmountNfts setTxHash={setTxHash} setType={setType} />
      </section>
    </section>
  )
}

export default SharkyWorldTop
