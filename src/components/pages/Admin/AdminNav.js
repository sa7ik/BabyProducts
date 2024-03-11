import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AdminNav = () => {
  return (
    <div className='admin-Nav' style={{display:"flex",gap:"100px"}}>
      <Link to={'/AdminHome'} style={{color:"black"}}>AdminHome</Link>
        <Link to={'/productCard'} style={{color:"black"}}>Products</Link>
    <Link to={'/'} style={{color:"black"}}>Home</Link>
        <Link to={'/userDetails'} style={{color:"black"}}>userDetails</Link>
    </div>
  )
}

export default AdminNav