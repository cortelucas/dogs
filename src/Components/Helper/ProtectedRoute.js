import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

const ProtectedRoute = (props) => {
  const { login } = React.useContext(UserContext)
  console.log(login)
  if (login === true) return <Route {...props} />
  else if (login === false) return <Navigate to="/login" />
  else return null
}

export default ProtectedRoute
