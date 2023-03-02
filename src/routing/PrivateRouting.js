import React, { Fragment } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouting = ({children}) => {

    const isValidUser = JSON.parse(localStorage.getItem("tokenId"));
    console.log("token Id Private = " , isValidUser)
    return (
        !!isValidUser ? <>{children}</> : <Navigate to="/" />
    )
}

export default PrivateRouting