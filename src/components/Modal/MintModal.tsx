import { SCAN_ADDRESS_URL } from '../../contracts/mint'
import './MintModal.css'

interface MintModalProps {
  txHash: string
  setTxHash: (txHash: string) => void
  type: 'success' | 'error'
}
const MintModal = ({ txHash, type, setTxHash }: MintModalProps) => {
  const closeModal = () => {
    setTxHash('')
  }
  return (
    <div id="mint-modal">
      <div className={`content ${type}`}>
        <div className="title">
          <span className={type}>{type === 'success' ? 'Mint done' : 'Error minting'}</span>
          <button className={type} onClick={closeModal}>
            Close
          </button>
        </div>
        <div className="message">
          <p>{type === 'success' ? 'You have successfully minted your NFTs' : 'Error minting the NFTs'}</p>
        </div>
        <div className="tx-hash">
          {type === 'success' ? (
            <a href={`${SCAN_ADDRESS_URL}${txHash}`} target="_blank" rel="noreferrer">
              Click to see transaction
            </a>
          ) : (
            <span>Please, try again or contact support.</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default MintModal
