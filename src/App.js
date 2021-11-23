import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserStorage } from './Context/UserContext'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import User from './Pages/User/User'
import ProtectedRoute from './Components/Helper/ProtectedRoute'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
