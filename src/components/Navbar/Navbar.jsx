import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false)
  let navigate = useNavigate()

  let login = () => {
    setIsLogin(!isLogin)
    if(isLogin) {
      localStorage.setItem('isLogin',false)
      navigate('/')
      toast("Logout successfully")
    } else {
      localStorage.setItem('isLogin',true)
      toast("Login successfully")
    }
  }

  return (
    <>
    <div className='navbar'>
    <nav>
        <ul className='navbar-ui'>
        <li className='navbar-ul-li'><NavLink to="/">Home</NavLink></li>
        <li className={!JSON.parse(localStorage.getItem("isLogin")) ? 'access' : ''}><NavLink to="/courses">Courses</NavLink></li>
        <li className='navbar-ul-li'><NavLink to="/about">About</NavLink></li>
        <li className='navbar-ul-li'><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
    <nav>
      <ul>
        <li> <button onClick={login} className='login-btn'>{!isLogin ? 'Login' : 'Logout'}</button> </li>
      </ul>
    </nav>
    </div>
    </>
  )
}

export default Navbar