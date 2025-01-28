
import { getAccessToImgs } from '../../images/getAccessTo/images'

import './GetAccessTo.css'

const GetAccessTo = () => {
  return (
    <section id="get-access-to">
      <h5>Get access to</h5>
      <div className="bento">
        <div className="upper-row">
          <article className="box-1">
            <img src={getAccessToImgs.img1} alt="Get Access To 1" />
            <strong>
            Revenue share
            </strong>
            <span>Participate in Sharky Club's revenue-sharing model.</span>
          </article>
          <article className="box-2">
            <img src={getAccessToImgs.img2} alt="Get Access To 2" />
            <strong>
            Membership
            </strong>
            <span>Exclusive access to Sharky Club and private spaces.</span>
          </article>
        </div>
        <div className="lower-row">
          <article className="box-3">
            <img src={getAccessToImgs.img3} alt="Get Access To 3" />
            <strong>
            Sharky IP
            </strong>
            <span>Unlock valuable IP rights for your creations. True digital ownership through Sharky NFTs.</span>
          </article>
          <article className="box-4">
            <img src={getAccessToImgs.img4} alt="Get Access To 4" />
            <strong>
            Sharky Points
            </strong>
            <span>Collect points for rewards and special access.</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default GetAccessTo
