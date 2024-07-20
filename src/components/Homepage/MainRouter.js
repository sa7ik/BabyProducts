import React, { createContext, useState, useEffect} from 'react'
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
import { addToCart } from '../redux/cartSlice'
import {useDispatch } from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'

export const Axios=axios.create({
  baseURL:"http://localhost:3010/api"
})

export const context = createContext();
const  MainRouter = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("")
    const dispatch = useDispatch
    const [Product, setProduct] = useState(ProductData)
    const [cartItems, setCartItems] = useState([]);
    const [logedUser,setLogedUser]=useState({})

    /// localStorage.setItem('user',user);
    const [users, setUsers] = useState();
    const [userData,setUserData] = useState({
        userName:"",
        email:"",
        password:"",
        cart:[]
      })
    const [searchTerm, setSearchTerm] = useState(""); 
    const [log, setLog] = useState()
    const [adminData,setAdminData]=useState("")
    const [adminLog,setAdminLog]=useState(false)
    const [proData, setProdata] = useState([]);
  const [products, setProducts] = useState({});
    
    const handleCartClearance = () => {

        setCartItems([])
    }
    const buyProduct = () => {
        alert("Purchase Completed")
        setCartItems([])
    }

    useEffect(() => {
      async function Data() {
        await Axios.get("/user/product")
          .then((response) => {
            if (search === "") {
              setProdata(response.data);
            }
            setProducts(response.data);
          })
          .catch((error) => {
            console.error("Error fetching Product", error);
          });
      }
      Data();
    }, []);

    const AddToCart = async (product) => {
      if (log) {
        await Axios.post(
          "/user/addcart",
          { productId: product._id },
  
          { withCredentials: true }
        )
          .then((response) => {
            toast.success("Product added to cart");
          })
          .catch((error) => {
            toast.error("please login and continue");
            
          });
      }
    };

    const data = {
     users, setUsers,cartItems, setCartItems, buyProduct, handleCartClearance
        , searchTerm, setSearchTerm, search, setSearch, Product, setProduct, log, setLog, userData,setUserData,logedUser,setLogedUser,
        adminData,setAdminData,adminLog,setAdminLog,AddToCart,proData
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