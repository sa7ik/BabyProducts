import React, { createContext, useState } from 'react'
import Home from './home'
import Aboutus from '../pages/About Us'
import ContactUs from '../pages/Contact Us'
import AdminLogin from '../pages/Admin/AdminLogin'
import AdminHome from '../pages/Admin/AdminHome'
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

export const context = createContext();
const  MainRouter = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("")
    const [Product, setProduct] = useState(ProductData)
    const [cartItems, setCartItems] = useState([]);
    const [logedUser,setLogedUser]=useState({})

    /// localStorage.setItem('user',user);
    const [users, setUsers] = useState([{userName:"sabik", email: "sabik@123",  password: "1234" ,cart:[]}]);
    const [userData,setUserData] = useState({
        userName:"",
        email:"",
        password:"",
        cart:[]
      })
    const [searchTerm, setSearchTerm] = useState(""); 
    const [log, setLog] = useState()
    console.log(userData);
    console.log("clg",users)
    const handleAddProduct = (product) => {
        
        if (!log) {
            alert("Please login and continue");
            navigate("/LoginPage");
        } else {
            // const itemIndex = logedUser.cart.findIndex((item) => item.id === product.id);
console.log(userData.cart)

            const productExist = userData?.cart?.find((item) => item.id === product.id);
            
            if (productExist) {
                setUserData({...userData,cart:userData.cart.map((item) => { return item.id === product.id ?
                    { ...productExist, quantity: productExist.quantity + 1 } : item }),
                });
              
                setUsers(
                    
                    users.map((item) =>
                      userData.email === item.email ? userData : item
                      
                    )
                  );
                  
            }
            
           
            else {
                setUserData({
                  ...userData,
                  cart: [...userData?.cart, { ...product, quantity: 1 }],

                });
                setUsers(
                  users.map((item) =>
                    userData.email === item.email ? userData : item
                  )
                );
        }
    }
}
 
const handleRemoveProduct = (product) => {
    setUserData((prevUserData) => {
      const productExist = prevUserData?.cart?.find((item) => item.id === product.id);
  
      if (productExist && productExist.quantity === 1) {
        return {
          ...prevUserData,
          cart: prevUserData.cart.filter((item) => item.id !== product.id)
        };
      } else {
        return {
          ...prevUserData,
          cart: prevUserData.cart.map((item) =>
            item.id === product.id ? { ...productExist, quantity: productExist.quantity - 1 } : item
          )
        };
      }
    });
  };
  
    const handleCartClearance = () => {

        setCartItems([])
    }
    const buyProduct = () => {
        alert("Purchase Completed")
        setCartItems([])
    }

    const data = {
     users, setUsers,cartItems, setCartItems, buyProduct, handleAddProduct, handleRemoveProduct, handleCartClearance
        , searchTerm, setSearchTerm, search, setSearch, Product, setProduct, log, setLog, userData,setUserData,logedUser,setLogedUser
    }
console.log(users)
    return (
        <div>
            <context.Provider value={data}>
                <Routes>
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/LoginPage" element={<LoginPage />} />
                    <Route path="/Registration" element={<RegistrationPage />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/Testimonial' element={<Testimonial />} />
                    <Route path='/ContactUs' element={<ContactUs />} />
                    <Route path='/AboutUs' element={<Aboutus />} />
                    <Route path='/Payment' element={<Payment />} />
                    <Route path='/Admin' element={<AdminLogin />} />
                    <Route path='/productCard' element={<ProductCard />} />
                    <Route path='/userDetails' element={< UserDetails />} />
                    <Route path="/AdminHome" element={<AdminHome />} />

                </Routes>
            </context.Provider>
        </div>
    )
}

export default MainRouter
