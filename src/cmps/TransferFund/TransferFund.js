import React from 'react'

export default props => {
    return (
        <div className="transfer-fund">
            <h3>Transfer coins to {props.contactName}:</h3>
            <form onSubmit={props.onTransferCoins}>
                Amount:
                <input type="number" name="amount" />
                <button>Transfer</button>
            </form>

        </div>
    )
}