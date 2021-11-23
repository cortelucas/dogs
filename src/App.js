import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import User from './Pages/User/User'
import { UserContext, UserStorage } from './Context/UserContext'
import ProtectedRoute from './Components/Helper/ProtectedRoute'

const App = () => {
  const context = React.useContext(UserContext)
  console.log(typeof context)
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="conta/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
