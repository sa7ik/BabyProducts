import React, { useContext, useState,useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { context } from '../Homepage/MainRouter';
import { Axios } from '../Homepage/MainRouter';
import toast from 'react-hot-toast';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
const RegistrationPage = () => {
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
const navigate=useNavigate();
const {users,setUsers,userData,setUserData} = useContext(context)
const [formValue,setFormValue]=useState({
  name:"",
  email:"",
  password:"",
})

const handleChange=(e)=>{
  const {name,value}  =e.target;
  setFormValue({...formValue,[name]:value})
}

    // const handleRegistration= (e)=>{
    //   e.preventDefault();
    //   console.log(formValue);

      // if (userData.userName === '') {
      //   alert("username must fill");
      //   return
      // }
    //   const errors = validate(userData);
    //   setFormErrors(validate(userData));
    //     setIsSubmit(true);
        
       
    //       if (Object.keys(errors).length === 0) {
    //         setUsers([...users,userData])
    //         localStorage.setItem('user',users);
    //         navigate("/LoginPage");
    //         console.log(userData);
    // }

    // }
    // useEffect(() => {
    //     console.log(formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //       console.log(userData);
    //     }
    // }
      
      const validate = (e,values) => {  
         e.preventDefault();
        console.log(values)
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
          errors.name = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
          try {
            console.log("1234");
            const response = Axios.post("/user/register", formValue, {
              withCredentials:true
            });
            setUserData(formValue);
            console.log(userData);
            // toast.success(response.data.message);
            // console.log(response.data.message)
            navigate('/LoginPage');
          } catch (error) {
            // toast.error(error.response.data.message);
          }
        }
      };
    
      return (
     
      <div>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <form onSubmit={(e) => validate(e,formValue)}>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="Your Name"
                      id="form1"
                      name="name"
                      type="text"
                      className="w-100"
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-danger">{formErrors.userName}</p>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Your Email"
                      id="form2"
                      name="email"
                      type="email"
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-danger">{formErrors.email}</p>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Password"
                      id="form3"
                      name="password"
                      type="password"
                      onChange={handleChange} 
                    />
                  </div>
                  <p className="text-danger">{formErrors.password}</p>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size="lg" />
                  </div>
                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="confirm Password"
                      id="form4"
                      name="password1"
                      type="password"
                      value={formValue.password1}
                      onChange={handleChange}
                    />
                  </div> */}
                  <p className="text-danger">{formErrors.password1}</p>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size="lg" />
                  </div>

                  <div className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="agree with continue?"
                    />
                  </div>

                  <MDBBtn className="mb-4" size="lg">
                    register
                  </MDBBtn>
                </form>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
    )
}

export default RegistrationPage