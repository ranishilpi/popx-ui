import './App.css'
import { Routes, Route } from "react-router-dom"

import Welcome from "./pages/Welcome"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"

import BottomNav from "./components/BottomNav"

function App() {
  return (
    <div className="container">

      <div className="pageContent">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      <BottomNav />

    </div>
  )
}

export default App