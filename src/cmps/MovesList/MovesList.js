import React from 'react'

export default props => {
    const { moves } = props
    return (
        <div className="moves-list">
            <h3>Your Moves:</h3>
            <hr />
            {
                <ul>
                    {
                        moves.map(move =>
                            <li>
                                <h5>{move.time}</h5>
                                <h5>{move.amount}</h5>
                            </li>

                        )
                    }
                </ul>
            }

        </div>
    )
}