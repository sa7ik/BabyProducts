import React from 'react';
import "./style.css"
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer'
import ProductData from '../ProductData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Axios } from '../Homepage/MainRouter';
import toast from 'react-hot-toast';
import { useContext, useState } from 'react'
import { context } from '../Homepage/MainRouter';

const Home = () => {
  const { handleAddProduct,userData,setUserData,log,AddToCart,proData } = useContext(context)

  // useEffect(() => {
  //   async function Data() {
  //     await Axios.get("/user/product")
  //       .then((response) => {
  //         if (search === "") {
  //           setProdata(response.data);
  //         }
  //         setProducts(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching Product", error);
  //       });
  //   }
  //   Data();
  // }, []);
  
  // const AddToCart = async (product) => {
  //   console.log(userData);
  //   if (log) {
  //     await Axios.post(
  //       "/user/addcart",
  //       { productId: product.id},
  //       { withCredentials: true }
  //     )
  //       .then((response) => {
  //         toast.success("Product added to cart");
  //       })
  //       .catch((error) => {
  //         toast.error("please login and continue");
          
  //       });
  //   }
  // };

  return (
    <div>
      <Navbar />
      <div className='main-section'>
        <div className='section-a'>
          <h5>
            FLAT 30% OFF + CASHBACK! *
          </h5>
          <h1>Baby Essential <br />Fashion & Nursery</h1>
          <p>Fermentum, cursus ultrices porttitor tincidunt suscipit quam facilisis sit massa pellentesque mi quis elit elementum tristique urna.</p>
          <p>
            * Enim cras quam et nullam risus nec tincidunt mattis nunc.</p>
          <button>SHOP NOW</button>
        </div>
        <div className='section-b'>

          <img src='https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-hero-baby-img.png' />
        </div>
      </div>
      <h1>Collections</h1>
      <div className='products' style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-evenly' }}>
        {proData.map((product) => {
          return (

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title> {product.name}</Card.Title>
                <Card.Text>
                  <p>Price:$ {product.price}</p>
                </Card.Text>
                 <Button
      variant="primary"
      onClick={() => AddToCart(product)}
      style={{
        background: "#0d6efd",
        color: "white",
        borderRadius: "10px",
        padding: "10px",
        cursor: "pointer",
      }}>
    
              Add to Cart</Button>
              </Card.Body>
            </Card>

          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Home