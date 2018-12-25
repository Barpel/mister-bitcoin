import React from 'react'
import Moment from 'react-moment'

import './MovesList.scss'

export default props => {
    const { moves } = props
    return (
        <div className="moves-list">
            <h3>Your Moves:</h3>
            <hr />
            {
                <ul>
                    {
                        moves.map((move, idx) =>
                            <li key={idx}>
                                {
                                    props.showTo &&
                                    <h5>To: {move.to}</h5>
                                }
                                <h5>
                                    <span role="img" aria-label="time">
                                        ⏱
                                    </span>
                                    &nbsp;
                                    <Moment fromNow>{move.time}</Moment>
                                </h5>
                                <h5>
                                    <span role="img" aria-label="coins">
                                        💰
                                    </span> {move.amount} Coins</h5>
                            </li>

                        )
                    }
                </ul>
            }

        </div>
    )
}