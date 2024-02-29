// ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ProductData from '../../ProductData';

const ProductCard = ({ handleAddProduct }) => {
  return (
    <div className='products' style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-evenly' }}>
      {ProductData.map((product) => (
        <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.Image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              <p>Price: $ {product.price}</p>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => handleAddProduct(product)}
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
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
