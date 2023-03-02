import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRouting = ({children}) => {

    const isValidUser = JSON.parse(localStorage.getItem("tokenId"));
    console.log("token Id = " , isValidUser)

  return (
    !!isValidUser ? <Navigate to="/home" /> : <React.Fragment>{children}</React.Fragment>
  )
}

export default PublicRouting