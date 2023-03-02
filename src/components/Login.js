import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {

    const API_URL = "http://localhost:3500/users";

    const navigate = useNavigate()

    const [username , setUserName] = useState('');
    const [password , setPassword] = useState('');

    const handleSubmit = async () =>{
        try{
            const response = await axios({
                url : API_URL,
                method : 'GET'
            })

            if(response){
                console.log(response.data)
                const thisIdx = (response.data).findIndex((item) => item.username === username && item.password === password);
                if(thisIdx === -1){
                    alert("Invalid User")
                }
                else{
                    localStorage.setItem("tokenId" , JSON.stringify((response.data)[0].id))
                    navigate("/home")
                }
            }

        }
        catch(err){
            console.log(err.message)
        }
    }

    return (
        <div>
            <h2>
                Login
            </h2>
            <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='button' onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login