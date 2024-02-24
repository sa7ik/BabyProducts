import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { context } from '../Homepage/MainRouter';
const RegistrationPage = () => {
const navigate=useNavigate();
const {users,setUsers} = useContext(context)
const [userData,setUserData] = useState({
    userName:"",
    email:"",
    password:""
})

    const handleRegistration=()=>{
        setUsers([...users,userData])
        navigate('/LoginPage')

    }
    console.log(userData)
    console.log(users)
      return (
        <div className='header' style={{
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: "white"
        }}>

            <div>
                <label>Username</label><br />
                <input type="text" placeholder='name' 
                onChange={(e)=>setUserData({...userData,userName:e.target.value})}
                /><br />

                <label>Email</label><br />
                <input type='email' placeholder='Email' onChange={(e)=>setUserData({...userData,email:e.target.value})}/><br />
                <label>Password</label><br />
                <input type="password" placeholder='password' onChange={(e)=>setUserData({...userData,password:e.target.value})}/><br />
                <label>Confirm Password</label><br/>
                <input type="password" placeholder='Confirm password' /><br />
                <button onClick={handleRegistration}>Sign In</button>
            {/* <Link to={"/LoginPage"}><button >Login</button></Link>    */}
            </div>
        </div>

    )
}

export default RegistrationPage