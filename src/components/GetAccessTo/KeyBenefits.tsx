import { keyBenefitsImgs } from '../../images/keyBenefits/images'

import './KeyBenefits.css'

const KeyBenefits = () => {
  return (
    <section id="get-access-to">
      <h5>Key benefits</h5>
      <div className="bento">
        <div className="upper-row">
          <article className="box-1">
            <img src={keyBenefitsImgs.img1} alt="Get Access To 1" />
            <strong>Revenue share</strong>
            <span>
              Participate in Sharky Club's revenue - sharing model.The mission of Sharky Club is to create the best social platform for creators who want to
              monetize and gain status in web3. Connect - Create - Earn
            </span>
          </article>
          <article className="box-2">
            <img src={keyBenefitsImgs.img2} alt="Get Access To 2" />
            <strong>Membership</strong>
            <span>Exclusive access to Sharky Club. You’ll connect with experts and entrepreneurs from our private community.</span>
          </article>
        </div>
        <div className="lower-row">
          <article className="box-3">
            <img src={keyBenefitsImgs.img3} alt="Get Access To 3" />
            <strong>Sharky IP</strong>
            <span>
              Unlock valuable IP rights for your creations. True digital ownership through Sharky NFTs to develop merch, content and partnerships in
              collaborations with holders.
            </span>
          </article>
          <article className="box-4">
            <img src={keyBenefitsImgs.img4} alt="Get Access To 4" />
            <strong>Sharky Points</strong>
            <span>Collect Sharky Points for rewards and unlock digital & IRL experiences. Soon, $SHARKY🦈⭐</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default KeyBenefits
