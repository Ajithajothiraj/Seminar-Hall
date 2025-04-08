import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import HomePage from './HomePage'
import People from './People'
import Hall from './Hall'
import Facultylogin from './Facultylogin'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import Otp from './Otp'
import NewPassword from './NewPassword'

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/people" element={<People />} />
        <Route path="/hall" element={<Hall />} />
        <Route path="/" element={<Login />} />
        <Route path="/facultylogin" element={<Facultylogin />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App
