import React, { useContext,useEffect } from 'react';
import './Cart.css';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { context } from '../Homepage/MainRouter';
import { Link } from 'react-router-dom';
import { Axios } from '../Homepage/MainRouter';
import {
  MDBBtn,
 
} from "mdb-react-ui-kit";

function Cart() {
  // const navigate=useNavigate();
  const {cartItems,setCartItems}=useContext(context)
  console.log(cartItems);
  const {handleCartClearance}=useContext(context)
  const {handleRemoveProduct,userData,proData} = useContext(context)
  console.log(userData);

  // const totalPrice=userData.cart.reduce((price,item)=>price+item.quantity*item.price,0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await Axios.get("user/viewCart", { withCredentials: true });
        console.log("Cart Response:", response.data.cart);
        setCartItems(response.data.cart);
      } catch (error) {
        console.error("Cart fetching error:", error);
      }
    };

    fetchCart();
  }, []);

  const increaseQuantity=(itemId)=>{
    Axios.put(`/user/increase/${itemId.productId._id}`,
      {},{
        withCredentials:true
      }
    )
    .then((response)=>{
      setCartItems((prevItems)=>
        prevItems.map((item)=>
          item.productId._id === itemId.productId._id
          ?{...item,quantity:item.quantity +1}
          : item
        )
      )
    })
    .catch((error)=>{
      console.log("product increasing error",error)
    })
  }

  const decreaseQuantity = (itemId) => {
    Axios.put(
      `/user/decrease/${itemId.productId._id}`,
      {},
      {
        withCredentials: true,
      }
    )
      .then((response) => {
        // console.log(response.data);

        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.productId._id === itemId.productId._id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      })
      .catch((error) => {
        console.error("Cart decreasing error", error);
      });
  };

  const deleteCart = (Cart) => {
    Axios.delete(`/user/remove/${Cart.productId._id}`, {
      withCredentials: true,
    })
      .then((response) => {
        console.log(response.data);

        setCartItems((prevItems) =>
          prevItems.filter((item) => item.productId._id !== Cart.productId._id)
        );
      })
      .catch((error) => {
        console.error("Cart deleting error", error);
      });
  };

  return (
    <div>
        <Navbar/>
        <div className='cart-items'>
        <div className='cart-items-header'>Cart Items</div>
        <div className='clear-cart'>
          {proData?.length >= 1 &&(
            <button className='clear-cart-button' onClick={handleCartClearance}>Clear Cart</button>
          )}
        </div>
        {userData.length ===0 && <div className='cart-items-empty'>No items are added</div>}
        <div>
          {cartItems.map((item)=>(
            
            <div key={item.id} className='cart-items-list'>
              <img className='cart-items-image' src={item?.productId?.image}/>
              <div className='cart-items-name'>{item?.productId?.name}</div>
              <div className='cart-items-function'>
              <button className='cart-items-remove' onClick={()=>decreaseQuantity(item)}>-</button>
              {item.quantity}
                <button className='cart-items-Add' onClick={()=>increaseQuantity(item)}>+</button>
              </div>
              <div className='cart-items-price'>
                ${item?.productId?.price * item.quantity}
              </div>
              <div>
                                <MDBBtn
                                  className="bg-danger m-2"
                                  onClick={() => deleteCart(item)}
                                >
                                  Delete
                                </MDBBtn>

                           
                              </div>
              </div>
          ))}
        </div>
        <div  className='cart-items-total-price-name'>Total Price
          {/* <div className='cart-items-total-price'>${totalPrice}</div> */}
        </div>
        <div class="card">
          <div class="card-body">
          <Link to={"/Payment"}>  <button type="button" className="btn btn-warning btn-block btn-lg" onClick={handleCartClearance} 
            
            >Proceed to Pay</button></Link>
          
          </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart