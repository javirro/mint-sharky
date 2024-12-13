import { images } from '../../images'
import './ComingSoon.css'

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <h3>Coming Soon</h3>
      <div className="grid">
        <div>
          <img src={images.brain} alt="Brain" />
          <section>
            <h4>Unlock Sharky IP</h4>
            <p>
              Holders will also have the opportunity to unlock Sharky IP (intellectual property), granting them access to exclusive content, usage rights, and
              unique opportunities within the Sharky World ecosystem.
            </p>
          </section>
        </div>
        <div>
          <img src={images.gift} alt="Gift" />
          <section>
            <h4>Unlock Sharky Points</h4>
            <p>
              Holders will be able to unlock Sharky Points, which will provide additional rewards and benefits within Sharky World. These points will enhance
              members’ experiences and grant access to airdrops, and Sharky Shop (collaborative marketplace for purchasing experiences)
            </p>
          </section>
        </div>
      </div>
      <button>Mint NFT</button>
    </div>
  )
}

export default ComingSoon
