import React, {useContext, useState } from 'react'
import { Link,useNavigate} from 'react-router-dom' 
import { context } from '../Homepage/MainRouter';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
  } from "mdb-react-ui-kit";

function LoginPage() {
    const navigate=useNavigate();
    const {users,userData,setUserData,log,setLog,setLogedUser} = useContext(context)
    
    console.log(users);

    const Submit=(e)=>{

        e.preventDefault()
       
        if(Object.keys(userData).length ===0){
            alert("enter something on field");
            return;
        }

        
        const checkUsers = users.find(
            (ele) =>
              ele.email === userData?.email && ele.password === userData?.password
          );
        
        setUserData({...checkUsers})
console.log("chexk",userData)

        if(!checkUsers){
            alert("no user found")
            return;
        }
    
        navigate('/')
              setLog(true)
              setLogedUser(checkUsers)
    }   

    return (
       
        <div className="sign-item d-flex justify-content-center"  style={{ color:'black'}}>
        <MDBContainer className="my-5 gradient-form px-auto">
          <MDBRow className="px-auto">
            <MDBCol className="mb-5 col-6 mx-auto">
              <div className="d-flex flex-column">
                <div className="text-center">
                  
                  <h4 className="mt-1 mb-5 pb-1">
                    We are The Babyku Shoppy team
                  </h4>
                </div>

                <p>Please login to your account</p>
                <form onSubmit={Submit}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="form1"
                    type="email"
                    name="email"
                    onChange={(e)=>setUserData({...userData,email:e.target.value})}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form2"
                    type="password"
                    name="password"
                    onChange={(e)=>setUserData({...userData,password:e.target.value})}
                  />

                  <MDBBtn className="mb-4 w-100 gradient-custom-2">
                    Login
                  </MDBBtn>
                </form>
                {/* <a className="text-muted" href="#!">
                  Forgot password?
                </a> */}
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <MDBBtn
                  outline
                  className="mx-2"
                  color="danger"
                  onClick={() => navigate("/Registration")}
                >
                  REGISER
                </MDBBtn>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            
                <MDBBtn
                  outline
                  className="mx-2"
                  color="blue"
                  onClick={() => navigate("/Admin")}
                >
                  Admin
                </MDBBtn>
              </div>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </div>
    
    )
}

export default LoginPage