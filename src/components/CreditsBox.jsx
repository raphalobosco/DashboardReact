import { GrFormAdd } from 'react-icons/gr'

function CreditsBox({ amount }) {
    return (
        <div className="credits-box">
            <h3>My credits</h3>
            <div className="amount-box">
                <span className="credits-amount">{amount.value}</span>
                <span>credits available for you next booking</span>
            </div>
            <button>
                <i><GrFormAdd /></i>
                Add credits
            </button>
        </div>
    )
}

export default CreditsBox