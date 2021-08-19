import React, {useEffect, useState} from 'react'
import PlayerSearch from './PlayerSearch'

const Lookup = ({search}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${search}`
            .then((res) => {
                console.log(res.data.data)
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>Player Search Results</h1>
            {
                data.map((player, index) => {
                    <PlayerSearch 
                        playerId={player.id} 
                        firstName={player.first_name} 
                        lastName={player.last_name} 
                        team={player.team.full_name}
                    />
                })
            }
        </div>
    )
}

export default Lookup
