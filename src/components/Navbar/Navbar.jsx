import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { toast } from 'react-toastify';
import { globalContext } from '../../context/GlobalContext';

const Navbar = () => {
   let {isLogin, setIsLogin}  = useContext(globalContext)
  let navigate = useNavigate()

  let login = () => {
    setIsLogin(!isLogin)
    if(isLogin) {
      navigate('/')
      toast.warn("Logout successfully")
    } else {
      toast.success("Login successfully")
    }
  }

  return (
    <>
    <div className='navbar'>
    <nav>
        <ul className='navbar-ui'>
        <li className='navbar-ul-li'><NavLink to="/">Home</NavLink></li>
        <li className={!isLogin ? 'access' : ''}><NavLink to="/courses">Courses</NavLink></li>
        <li className='navbar-ul-li'><NavLink to="/about">About</NavLink></li>
        <li className='navbar-ul-li'><NavLink to="/contact">Contact</NavLink></li>
        <li className={!isLogin ? 'access' : ''}><NavLink to="/post">Post</NavLink></li>
        <li className='navbar-ul-li'><NavLink to="/learn">CSS Layout</NavLink></li>
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