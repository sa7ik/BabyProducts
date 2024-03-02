import React, { createContext, useState } from 'react'
import Home from './home'
import Aboutus from '../pages/About Us'
import ContactUs from '../pages/Contact Us'
import AdminLogin from '../pages/Admin/AdminLogin'
import Shop from '../pages/Shop'
import Testimonial from '../pages/Testimonial'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from '../User/LoginPage'
import RegistrationPage from '../User/RegistrationPage'
import Cart from '../pages/Cart'
import App from '../../App'
import Navbar from '../Header/Navbar'
import ProductData from '../ProductData'
import Payment from '../pages/Payment'
import ProductCard from '../pages/Admin/Products'
import BasicExample from '../pages/Admin/AdminLogin'
import UserDetails from '../pages/Admin/UserDetails'

export const context=createContext();
const MainRouter = () => {
    const navigate = useNavigate();
    const [search,setSearch]=useState("")
    const [Product,setProduct]=useState(ProductData)
    const [cartItems,setCartItems]=useState([]);
    const [total,setTotal]=useState([]);
    const [users,setUsers]=useState([{userName:"sabik@123",email:"sabik@email.com",password:"sabik321"}]);
    const [userData,setUserData] = useState([{userName:"sabik@123",email:"sabik@email.com",password:"sabik321"}
    ]);
    const [searchTerm,setSearchTerm]=useState("");
    const [log,setLog] = useState()
    const handleAddProduct=(product)=>{
        if (!log) {
            alert("Please login and continue");
            navigate("/LoginPage");
          } else {
            const itemIndex = cartItems.findIndex((item) => item.id === product.id);
      
        const productExist=cartItems.find((item)=> item.id===product.id);
        if(productExist){
            setCartItems(cartItems.map((item)=>item.id===product.id?
            {...productExist,quantity:productExist.quantity + 1}:item)
            );
        }
        else{
            setCartItems([...cartItems,{...product,quantity: 1}])
        }  
    }
}   
    const handleRemoveProduct=(product)=>{
        const productExist=cartItems.find((item)=> item.id===product.id);
        if  (productExist.quantity===1){
            setCartItems(cartItems.filter((item)=> item.id !== product.id))
        }else{
            setCartItems(
                cartItems.map((item)=>item.id===product.id ?
                 {...productExist,quantity:productExist.quantity - 1}
                :item)
            )
        }
    }
    const handleCartClearance=()=>{
        
        setCartItems([])
    }
    const buyProduct=()=>{
        alert("Purchase Completed")
        setCartItems([])
    }

const data = {
    total,setTotal,users,setUsers,cartItems,setCartItems,buyProduct,handleAddProduct,handleRemoveProduct,handleCartClearance
,searchTerm,setSearchTerm,search,setSearch,Product,setProduct,log,setLog,userData}

        return (
        <div>
            <context.Provider value={data}>
            <Routes>
                <Route path="/Cart" element={<Cart/>} />
                <Route path="/LoginPage" element={<LoginPage />} />
                <Route path="/Registration" element={<RegistrationPage />} />
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/Testimonial' element={<Testimonial />} />
                <Route path='/ContactUs' element={<ContactUs />} />
                <Route path='/AboutUs' element={<Aboutus />} />
                <Route path='/Payment' element={<Payment />} />
                <Route path='/Admin' element={<AdminLogin />} />
                <Route path='/productCard' element={<ProductCard />} />
                <Route path='/userDetails' element={< UserDetails/>} />
                
            </Routes>
            </context.Provider>
        </div>
    )
}

export default MainRouter
