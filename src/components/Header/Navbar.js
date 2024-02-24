import React, { useContext } from 'react'
import "./Style.css"
import { Link} from 'react-router-dom';
import { IoIosBasket,IoIosSearch,IoMdContact } from "react-icons/io";
import { context } from '../Homepage/MainRouter';

const Navbar = () => {
  const {cartItems,setCartItems,}=useContext(context)
  return (
    <div>
         <div className='main'>
        <div className='navbar'>
        <img src='	https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-logo.svg'/>
        <Link to={"/"} style={{textDecoration:"none",color:"black"}}>Home</Link>
        <Link to={"/shop"} style={{textDecoration:"none",color:"black"}}>Shop</Link>
        <Link to={"/AboutUs"} style={{textDecoration:"none",color:"black"}}>About Us</Link>
        <Link to={"/Testimonial"} style={{textDecoration:"none",color:"black"}}>Testimonial</Link>
        <Link to={"/ContactUs"} style={{textDecoration:"none",color:"black"}}>Contact Us</Link>
        </div>
        <div className='nav2'>
          <form action='' className='search-bar'>
          <input type='text' placeholder='Search products...'/>
          <button type='submit'><IoIosSearch style={{fontSize:"30px",color:"#f47c7c"}}/></button>
          </form>
        <Link to={"/Cart"}><IoIosBasket style={{fontSize:"30px",color:"#f47c7c"}}/></Link> 
        <span style={{margin:"3px",fontSize:"14px",fontWeight:"700",verticalAlign:"super"}}>{cartItems.length === 0 ? "":cartItems.length}</span>
         <Link to={"/Loginpage"}><IoMdContact style={{fontSize:"30px",color:"#f47c7c"}}/></Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar