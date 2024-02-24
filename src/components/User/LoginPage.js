import React, {useContext, useState } from 'react'
import { Link,useNavigate} from 'react-router-dom' 
import { context } from '../Homepage/MainRouter';


function LoginPage() {
    const navigate=useNavigate();
    const {users,setUsers} = useContext(context)
    const [userData,setUserData] = useState({
        
    })

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
        console.log(checkUsers);


        if(!checkUsers){
            alert("no user found")
            return;
        }
    
        navigate('/')
              
    }   

    return (
        <div className='login' style={{
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: "white"
        }}>
            <div >
                <label>Email</label><br />
                <input type='text' placeholder='Email' onChange={(e)=>setUserData({...userData,email:e.target.value})}/><br />
                <label>Password</label><br />
                <input type='password' placeholder='Password' onChange={(e)=>setUserData({...userData,password:e.target.value})}/><br />
               <button onClick={(e)=>Submit(e)} style={{ marginRight: "50px" }}>Login</button>
                <Link to={"/Registration"}>Create Account?</Link>
            </div>
        </div>
    )
}

export default LoginPage