// ProductCard.js
import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import ProductData from '../../ProductData';
import toast from "react-hot-toast";
import { Axios } from "../../Homepage/MainRouter";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import {context} from "../../Homepage/MainRouter";
import AdminNav from "./AdminNav";


const ProductCard = () => {
  // const {Product,setProduct} = useContext(context);
  const [Product,setProduct]=useState([])
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [editProduct, setEditProduct] = useState({
    name: "",
    price: "",
    id: "",
    image: null,
    imageURL: "",
  });

  const [productAdmin, setProductAdmin] = useState(Product)

  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    image: null,
    imageURL: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    Axios.get("/admin/allproduct", { withCredentials: true })
      .then((response) => {
        setProduct(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log("Product fetching error", error);
      });
  };  

  const handleAddSubmit = async () => {
    const formData = new FormData();
    formData.append("name", addProduct.name);
    formData.append("category", addProduct.category);
    formData.append("description", addProduct.description);
    formData.append("price", addProduct.price);

    if (addProduct.image) {
      formData.append("image", addProduct.image);
    } else if (addProduct.imageURL) {
      formData.append("imageURl", addProduct.imageURL);
    }

    await Axios.post("/admin/add", formData, { withCredentials: true })
      .then((response) => {
        // console.log(response);
        setShowAdd(false);
        fetchProducts();
        setAddProduct({
          name: "",
          category: "",
          description: "",
          price: "",
          image: null,
          imageURL: "",
        });
      })
      .catch((error) => {
        console.error("Product Adding error", error);
      });
  };

  const deleteProduct = async (_id) => {
    await Axios.delete(`/admin/delete/${_id}`, { withCredentials: true })
      .then((response) => {
        fetchProducts();
        console.log(response);
      })
      .catch((error) => {
        console.error("Product deleting error", error);
      });
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();
    formData.append("name", editProduct.name);
    formData.append("category", editProduct.category);
    formData.append("description", editProduct.description);
    formData.append("price", editProduct.price);
    if (editProduct.image) {
      formData.append("image", editProduct.image);
    }

    await Axios.put(`/admin/update/${editProduct.id}`, formData, {
      withCredentials: true,
    })
      .then((response) => {
        fetchProducts();
        setShowEdit(false);
        setEditProduct({
          id: "",
          name: "",
          category: "",
          description: "",
          price: "",
          image: null,
        });
      })
      .catch((error) => {
        console.error("Product editing error", error);
      });
  };

  return (
    <>
    <AdminNav/>
    <button onClick={() => setShowAdd(true)}>AddProduct</button>
    <div className='products' style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-evenly' }}>
      {Product?.map((product) => (
        <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              <p>Price: $ {product.price}</p>
            </Card.Text>
            <Button
              variant="primary"
             onClick={()=>{
              setShowEdit(true);
              setEditProduct({
                id: product._id,
                name: product.name,
                category: product.category,
                description: product.description,
                price: product.price,
                image: null,
              });
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
              onClick={() => deleteProduct(product._id)}
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
           type="file"
           size="lg"
          //  value={addProduct.image}
           onChange={(e) =>
            setAddProduct({
              ...addProduct,
              image: e.target.files[0],
              imageURL: "",
            })
          }
         />
          <input
              type="text"
              value={addProduct.imageURL}
              onChange={(e) =>
                setAddProduct({
                  ...addProduct,
                  imageURL: e.target.value,
                  image: null,
                })
              }
              placeholder="Image URL"
            />
         <MDBInput
           style={{ color: "black" }}
           wrapperClass="mb-4"
           labelClass="text-black"
           label="name"
           id="formControlLg"
           type="text"
           size="lg"
          //  value={addProduct.name}
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
          //  value={addProduct.price}
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
           type="file"
           size="lg"
          //  value={editProduct.image}
           onChange={(e) =>
             setEditProduct({ ...editProduct, image: e.target.files[0] })
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
