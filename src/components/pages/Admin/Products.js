// ProductCard.js
import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import ProductData from '../../ProductData';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import {context} from "../../Homepage/MainRouter";
import AdminNav from "./AdminNav";


const ProductCard = () => {
  const {Product,setProduct} = useContext(context);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [editProduct, setEditProduct] = useState({
    name: "",
    image: "",
    price: "",
    id: "",
  });

  const [productAdmin, setProductAdmin] = useState(Product)

  const [addProduct, setAddProduct] = useState({
    name: "",
    image: "",
    price: "",
  });

  const handleAddSubmit = () => {
    if (!addProduct.name || !addProduct.image || !addProduct.price) {
      alert("Please fill all inputs");
    } else {
      const newId = Product.length + 1;
      const newProduct = { ...addProduct, id: newId };
      setProduct([...Product, newProduct]);
      setShowAdd(false);
      setAddProduct({
        name: "",
        image: "",
        price: "",
      });
    }
  };
  const deleteItem = (itemId) => {
    console.log(itemId)
    const updatedData = Product.filter((item) => item.id !== itemId);
    console.log(updatedData)
    setProductAdmin(updatedData);
    setProduct(updatedData)
  };
  const handleEditSubmit = () => {
    
    const updatedProductData = Product.map((item) =>
      item.id === editProduct.id ? editProduct : item
    );
    setProduct(updatedProductData);
   
    // console.log(updatedProductData);
    setShowEdit(false);
    setEditProduct({ 
      name: "",
    image: "",
    price: "",})
  };
  // useEffect(()=>{
  //   console.log(Product);
  // },[Product]);

  

  return (
    <>
    <AdminNav/>
    <button onClick={() => setShowAdd(true)}>AddProduct</button>
    <div className='products' style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-evenly' }}>
      {Product.map((product) => (
        <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.Image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              <p>Price: $ {product.price}</p>
            </Card.Text>
            <Button
              variant="primary"
             onClick={()=>{
              setShowEdit(true);
              setEditProduct({...editProduct,id: product.id})
             }}
              style={{
                background: "#0d6efd",
                color: "white",
                borderRadius: "10px",
                padding: "10px",
                cursor: "pointer",
                marginRight:"100px"
              }}
            >
              Edit
            </Button>
            <Button
              variant="primary"
              onClick={() => deleteItem(product.id)}
              style={{
                background: "red",
                color: "white",
                borderRadius: "10px",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    
     <div>
     <Modal show={showAdd} onHide={() => setShowAdd(false)}>
       <Modal.Header closeButton>
         <Modal.Title>Add Product</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <MDBInput
           style={{ color: "black" }}
           wrapperClass="mb-4 "
           labelClass="text-black"
           label="image"
           id="formControlLg"
           type="text"
           size="lg"
           value={addProduct.image}
           onChange={(e) =>
             setAddProduct({ ...addProduct, image: e.target.value })
           }
         />
         <MDBInput
           style={{ color: "black" }}
           wrapperClass="mb-4"
           labelClass="text-black"
           label="name"
           id="formControlLg"
           type="text"
           size="lg"
           value={addProduct.name}
           onChange={(e) =>
             setAddProduct({ ...addProduct, name: e.target.value })
           }
         />
         <MDBInput
           style={{ color: "black" }}
           wrapperClass="mb-4"
           labelClass="text-black"
           label="price"
           id="formControlLg"
           type="text"
           size="lg"
           value={addProduct.price}
           onChange={(e) =>
             setAddProduct({ ...addProduct, price: e.target.value })
           }
         />
       </Modal.Body>
       <Modal.Footer>
         <MDBBtn className="m-2" onClick={() => setShowAdd(false)}>
           Close
         </MDBBtn>
         <MDBBtn className="m-2" onClick={handleAddSubmit}>
           Save changes
         </MDBBtn>
       </Modal.Footer>
     </Modal>
   </div>
   <div>
     <Modal show={showEdit} onHide={() => setShowEdit(false)}>
       <Modal.Header closeButton>
         <Modal.Title>Edit Product</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <MDBInput
           style={{ color: "black" }}
           wrapperClass="mb-4 "
           labelClass="text-black"
           label="image"
           id="formControlLg"
           type="text"
           size="lg"
           value={editProduct.image}
           onChange={(e) =>
             setEditProduct({ ...editProduct, image: e.target.value })
           }
         />
         <MDBInput
           style={{ color: "black" }}
           wrapperClass="mb-4"
           labelClass="text-black"
           label="name"
           id="formControlLg"
           type="text"
           size="lg"
           value={editProduct.name}
           onChange={(e) =>
             setEditProduct({ ...editProduct, name: e.target.value })
           }
         />
         <MDBInput
           style={{ color: "black" }}
           wrapperClass="mb-4"
           labelClass="text-black"
           label="price"
           id="formControlLg"
           type="text"
           size="lg"
           value={editProduct.price}
           onChange={(e) =>
             setEditProduct({ ...editProduct, price: e.target.value })
           }
         />
       </Modal.Body>
       <Modal.Footer>
         <MDBBtn className="m-2" onClick={() => setShowEdit(false)}>
           Close
         </MDBBtn>
         <MDBBtn className="m-2" onClick={handleEditSubmit}>
           Save changes
         </MDBBtn>
       </Modal.Footer>
     </Modal>
   </div>
  </>
);
};
  


export default ProductCard;
