import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductData from '../ProductData';
import { useContext } from 'react'
import { context } from '../Homepage/MainRouter';

function Shop() {
  const {handleAddProduct} = useContext(context)



  return (
    <div>
      <Navbar />
    <div className='card' style={{display:"flex",flexWrap:"wrap",justifyContent:'space-evenly'}}>
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
              borderRadius:"10px",padding:"10px 10px",
              cursor:"pointer"
            }}>Add to Cart</Button>
            </Card.Body>
          </Card>
           
        )
      })}
      </div>

      <Footer />
    </div>
  )
}

export default Shop