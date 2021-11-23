import React from 'react'
import { UserContext } from '../../Context/UserContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext)
  console.log(login)
  if (login === true) return children;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
}

export default ProtectedRoute
