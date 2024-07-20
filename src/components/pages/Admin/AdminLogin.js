import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import AdminData from "./AdminData";
import { Axios } from "../../Homepage/MainRouter";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css"
import { context } from "../../Homepage/MainRouter";

function AdminLogin() {
  // const [email,setEmail] = useState('')
  //   const [password,setPassword] = useState('')
  //   const admin = AdminData[0]
    const [admin,setAdmin]=useState({
      email:"",
      password:""
    })
    const {setAdminData,setAdminLog}=useContext(context)
    const Navigate=useNavigate()

    const handleSubmit=()=>{
     
      if (!admin) {
        toast.error("Please fill all field");
      }
      Axios.post("/admin/login", admin, { withCredentials: true })
        .then((response) => {
          const { token, refreshToken,admin } = response.data;
  
          Cookies.set("token", token, { expires: 1 });
          localStorage.setItem("token", token);
          Cookies.set("refreshToken",refreshToken, { expires: 1 });
          localStorage.setItem("refreshToken",refreshToken);
          const adminInfo = JSON.stringify(admin);
          localStorage.setItem("adminInfo", adminInfo);
          toast.success(response.data.message);
          toast.success(response.data.message);
          setAdminData(admin);
          setAdminLog(true);
          Navigate("/AdminHome");
        })
        .catch((error) => {
          console.error(error);
          toast.error("login failed",error)
        });
          }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email"   value={admin.email}
                  onChange={(e) =>
                    setAdmin({ ...admin, email: e.target.value })
                  }
                />
<Form.Text className="text-muted">
We'll never share your email with anyone else.
</Form.Text>
</Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password"   value={admin.password}
                  onChange={(e) =>
                    setAdmin({ ...admin, password: e.target.value })
                  }
                />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Check me out" />
       </Form.Group>
       <Button variant="primary" type="button" onClick={handleSubmit}>
         Submit
       </Button>
     </Form>
  );
}

export default AdminLogin;