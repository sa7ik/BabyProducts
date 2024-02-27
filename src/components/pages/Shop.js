import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductData from '../ProductData';
import { useContext,useState } from 'react'
import { context } from '../Homepage/MainRouter';
import './shop.css'


function Shop() {
  const {handleAddProduct} = useContext(context)
  const {search,productData,product,searchTerm}=useContext(context)

  return (
    <div>
      <Navbar />
    <div className='card' style={{display:"flex",flexWrap:"wrap",justifyContent:'space-evenly' }}>
     {/* <div className={` ${searchTerm!==""?" hided ":""  } `} >
     {ProductData.map((product) => {
        return (
           
          <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={product.Image} />
            <Card.Body>
              <Card.Title> {product.name}</Card.Title>
              <Card.Text>
               <p>Price:$ {product.price}</p>
              </Card.Text>
              <Button variant="primary" onClick={()=>handleAddProduct(product)} style={{background:"#0d6efd",color:"white",
              borderRadius:"10px",padding:"10px",
              cursor:"pointer"
            }}>Add to Cart</Button>
            </Card.Body>
          </Card>
           
        )
      })}
     </div> */}
     
      <div className='products' style={{display:"flex",flexWrap:"wrap",justifyContent:'space-evenly' }}>
         {ProductData.filter((val) => {
  if (searchTerm === "" || val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
    return true;
  }
  return false;
}).map((val) => (
  <div className='template' key={val.id}>
    <img src={val.Image} alt={val.name} />
    <h3>{val.name}</h3>
    <p>Price: ${val.price}</p>
    <Button
      variant="primary"
      onClick={() => handleAddProduct(val)}
      style={{
        background: "#0d6efd",
        color: "white",
        borderRadius: "10px",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      Add to Cart
    </Button>
  </div>
))}

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Shop