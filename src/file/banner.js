
import React from 'react'
import logo from './logo.svg';
import styles from './banner.css';
import banner from './images/banner.png'
function Banner() {
  return (
    <div className='row'>
<div className='col-6' style={{  height: '70vh', background: '#f8f9fa' }}>
  <table style={{marginLeft:'17%'}}>
  
    <tr style={{marginRight:'100px',textAlign: 'left'}}>
    <h4 style={{paddingTop:'100px'}}>10+ years of experience</h4>
     <h2>We assist the entrepreneurs in </h2>
     <h2 style={{ color:'#9adf46'}}>WEB DEVELOPMENT</h2>
        <p>Devise Your Digital Backdrop with CodeWraps</p>
     
        <p>CODEWRAPS is well packed with the latest technology and digital solutions to make your business give a refine look worldwide</p>
         <p>Make your dreams come true, simple and beautiful with our team of technocrats and IT professionals</p>
         <button className='button'>read more </button>     
    </tr>
    
  </table>
 
</div>
      <div className='col-6' style={{ height: '70vh', background: '#f8f9fa',paddingTop:'20px' }}>

        <img src={banner} alt="fireSpot" style={{
          width: '545px', height: '393px',
        }} />
      </div>

    </div>



  )
}

export default Banner