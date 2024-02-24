import React, { createContext, useState } from 'react'
import Home from './home'
import Aboutus from '../pages/About Us'
import ContactUs from '../pages/Contact Us'
import Shop from '../pages/Shop'
import Testimonial from '../pages/Testimonial'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../User/LoginPage'
import RegistrationPage from '../User/RegistrationPage'
import Cart from '../pages/Cart'

export const context=createContext();
const MainRouter = () => {
    const [cartItems,setCartItems]=useState([]);
    const [total,setTotal]=useState([]);
    const [users,setUsers]=useState([{userName:"sabik@123",email:"sabik@email.com",password:"sabik321"}]);
    
    const handleAddProduct=(product)=>{
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

const data = {
    total,setTotal,users,setUsers,cartItems,setCartItems,handleAddProduct,handleRemoveProduct,handleCartClearance
}

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
            </Routes>
            </context.Provider>
        </div>
    )
}

export default MainRouter




// import React from 'react';
// import Home from './home';
// // import AboutUs from '../pages/AboutUs'; // Correcting the import names
// // import ContactUs from '../pages/ContactUs'; // Correcting the import names
// import Shop from '../pages/Shop';
// import Testimonial from '../pages/Testimonial';
// import { Route, Routes } from 'react-router-dom';

// const MainRouter = () => {
//     return (
//         <div>
//             <Routes>
//                 <Route path='/' element={<Shop />} />
//                 {/* <Route path='/shop' element={<Shop/>}/> */}
//                 <Route path='/shop' element={<Shop />} />
//                 <Route path='/testimonial' element={<Testimonial />} /> {/* Correcting the path */}
//                 {/* <Route path='/contact-us' element={<ContactUs />} /> Correcting the path */}
//                 {/* <Route path='/about-us' element={<AboutUs />} />  */}
//                 {/* Correcting the path */}
//             </Routes>
//         </div>
//     );
// }

// export default MainRouter;
