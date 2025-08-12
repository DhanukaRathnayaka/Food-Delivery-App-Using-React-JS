import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("menu");

    const {getTotalCartAmount} = useContext(StoreContext);
    
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <span onClick={() => { setMenu("menu"); document.getElementById('explore-menu')?.scrollIntoView({ behavior: 'smooth' }); }} className={menu==="menu"?"active":""}>menu</span>
        <span onClick={() => { setMenu("mobile-app"); document.getElementById('app-download')?.scrollIntoView({ behavior: 'smooth' }); }} className={menu==="mobile-app"?"active":""}>mobile-app</span>
        <span onClick={() => { setMenu("contact-us"); document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }); }} className={menu==="contact-us"?"active":""}>contact us</span>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
