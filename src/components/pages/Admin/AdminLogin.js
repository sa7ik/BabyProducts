import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import AdminData from "./AdminData";
import "bootstrap/dist/css/bootstrap.min.css"

function AdminLogin() {
  const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const admin = AdminData[0]
    const Navigate=useNavigate()

    const handleSubmit=()=>{
      if(admin.email ===email && admin.password === password){
          alert("Login succesfully")
          Navigate('/AdminHome')
      }else{
          alert('enter a valid email and password')
      }
          }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
<Form.Text className="text-muted">
We'll never share your email with anyone else.
</Form.Text>
</Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Check me out" />
       </Form.Group>
       <Button variant="primary" type="submit" onClick={handleSubmit}>
         Submit
       </Button>
     </Form>
  );
}

export default AdminLogin;