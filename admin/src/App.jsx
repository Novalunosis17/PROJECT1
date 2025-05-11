import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import Add from './pages/Add/Add'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "https://project1-backend-ukuj.onrender.com"

  const [authorized, setAuthorized] = useState(false)
  const [passwordInput, setPasswordInput] = useState("")

  const correctPassword = "ParoParo" // Change this to your desired password

  const handlePasswordSubmit = () => {
    if (passwordInput === correctPassword) {
      setAuthorized(true)
    } else {
      toast.error("Incorrect password!")
    }
  }

  if (!authorized) {
    return (
      <div style={{ padding: '40px', maxWidth: '400px', margin: '100px auto', textAlign: 'center' }}>
        <h2>Enter Admin Password</h2>
        <input
          type="password"
          placeholder="Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
        />
        <br />
        <button onClick={handlePasswordSubmit} style={{ padding: '10px 20px' }}>
          Submit
        </button>
        <ToastContainer />
      </div>
    )
  }

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
