import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './pages/Nav';
import AdminRegistrationForm from './pages/AdminRegistrationForm';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';

function App() {
  return (
    <>
     <NavBar />
      <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/adminregister" element={<AdminRegistrationForm />} />
      <Route path="/home" element={<Home />} />

      </Routes>
    </>
  )
}

export default App
