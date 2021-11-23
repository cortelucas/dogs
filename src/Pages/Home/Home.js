import React from 'react'
import { UserContext } from '../../Context/UserContext'

const Home = () => {
  const { login } = React.useContext(UserContext)
  console.log(login)
  return (
    <div>
      Home
    </div>
  )
}

export default Home
