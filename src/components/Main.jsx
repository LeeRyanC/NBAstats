import React, { useState, useEffect } from 'react'
import { navigate, Router } from '@reach/router'
import axios from 'axios'

import Lookup from './Lookup'

const Main = () => {

    const [search, setSearch] = useState('')
    const [id, setId] = useState()
    const [data, setData] = useState([])

    const handleInput = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${search}`)
            .then(res => {
                console.log(res)
                console.log(res.data.data)
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
        navigate('/stats')
    }

    return (
        <>
            <h2>NBA Statistics</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder="Search for a player..." onChange={handleInput}></input>
                    <button type='submit'>Shoot!</button>
                </form>
            </div>
            <Router>
                <Lookup data={data} path='/stats' />
            </Router>
            
        </>
    )
}

export default Main
