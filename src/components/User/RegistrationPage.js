import React, { useContext, useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { context } from '../Homepage/MainRouter';
const RegistrationPage = () => {
    // const initialValues = { username: "", email: "", password: "" };
    // const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
const navigate=useNavigate();
const {users,setUsers} = useContext(context)
const [userData,setUserData] = useState({
  userName:"",
  email:"",
  password:""
})
console.log(userData);


    const handleRegistration=(e)=>{
      e.preventDefault();

      // if (userData.userName === '') {
      //   alert("username must fill");
      //   return
      // }
      const errors = validate(userData);
      setFormErrors(validate(userData));
        setIsSubmit(true);
        
       
          if (Object.keys(errors).length === 0) {
            setUsers([...users,userData])
            navigate("/LoginPage");
    }

    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(userData);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.userName) {
          errors.userName = "Username is required!";
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
        return errors;
      };
    console.log(userData)
    console.log(users)
      return (
        <div className='header'
         style={{
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: "white"
        }}>

            <div className="container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (


        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(userData, undefined, 2)}</pre>
      )} */}

        <form onSubmit={handleRegistration}>
                <label>Username</label><br />
                <input type="text" placeholder='name' 
                  value={userData.userName}
                onChange={(e)=>setUserData({...userData,userName:e.target.value})}
                /><br />
                <p style={{color:"red"}}>{formErrors.userName} </p>

                <label>Email</label><br />
                <input type='email' placeholder='Email'
                value={userData.email}
                 onChange={(e)=>setUserData({...userData,email:e.target.value})}/><br />
                 <p style={{color:"red"}}>{formErrors.email} </p>
                <label>Password</label><br />
                <input type="password" placeholder='password' 
                value={userData.password}
                onChange={(e)=>setUserData({...userData,password:e.target.value})}/><br />
                <p style={{color:"red"}}>{formErrors.password} </p>
                <label>Confirm Password</label><br/>
                <input type="password" placeholder='Confirm password' /><br />
                <button onClick={handleRegistration}>Sign In</button>
            {/* <Link to={"/LoginPage"}><button >Login</button></Link>    */}
            </form>
            </div>
        </div>

    )
}

export default RegistrationPage