import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {

    const navigate = useNavigate()

    const logout = () =>{
        localStorage.removeItem("tokenId");
        navigate("/")
    }

    return (
        <div>
            <h1>Home</h1>
            <button type='button' onClick={logout}>Logout</button>
        </div>
    )
}

export default Home