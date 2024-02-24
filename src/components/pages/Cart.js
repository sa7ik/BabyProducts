import React, { useContext } from 'react';
import './Cart.css';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { context } from '../Homepage/MainRouter';

function Cart() {
  const {cartItems,setCartItems,}=useContext(context)
  const {handleCartClearance}=useContext(context)
  const {handleAddProduct} = useContext(context)
  const {handleRemoveProduct} = useContext(context)
  const totalPrice=cartItems.reduce((price,item)=>price+item.quantity*item.price,0);
  return (
    <div>
        <Navbar/>
        <div className='cart-items'>
        <div className='cart-items-header'>Cart Items</div>
        <div className='clear-cart'>
          {cartItems.length >= 1 &&(
            <button className='clear-cart-button' onClick={handleCartClearance}>Clear Cart</button>
          )}
        </div>
        {cartItems.length ===0 && <div className='cart-items-empty'>No items are added</div>}
        <div>
          {cartItems.map((item)=>(
            
            <div key={item.id} className='cart-items-list'>
              <img className='cart-items-image' src={item.Image}/>
              <div className='cart-items-name'>{item.name}</div>
              <div className='cart-items-function'>
              <button className='cart-items-remove' onClick={()=>handleRemoveProduct(item)}>-</button>
              {item.quantity}
                <button className='cart-items-Add' onClick={()=>handleAddProduct(item)}>+</button>
              </div>
              <div className='cart-items-price'>
                ${item.price * item.quantity}
              </div>
              </div>
          ))}
        </div>
        <div  className='cart-items-total-price-name'>Total Price
          <div className='cart-items-total-price'>${totalPrice}</div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart