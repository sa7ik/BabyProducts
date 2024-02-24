import React from 'react';
import "./style.css"
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer'
const Home = () => {
  
  return (
    <div>
      <Navbar/>
      <div className='main-section'>
        <div className='section-a'>
          <h5>
            FLAT 30% OFF + CASHBACK! *
          </h5>
          <h1>Baby Essential <br/>Fashion & Nursery</h1>
          <p>Fermentum, cursus ultrices porttitor tincidunt suscipit quam facilisis sit massa pellentesque mi quis elit elementum tristique urna.</p>
          <p>
* Enim cras quam et nullam risus nec tincidunt mattis nunc.</p>
<button>SHOP NOW</button>
        </div>
        <div className='section-b'>
      
              <img src='https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-hero-baby-img.png'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home