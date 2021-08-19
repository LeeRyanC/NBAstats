import React from 'react'
import { Link } from '@reach/router'

const PlayerSearch = ({firstName, lastName, playerId, team}) => {
    return (
        <div>
            <Link to={`/player/${playerId}`}>{firstName} {lastName}</Link>
            <p>Last Played For: {team}</p>
        </div>
    )
}

export default PlayerSearch
