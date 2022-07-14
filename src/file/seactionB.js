
import React from 'react'
import styles from './seactionA.css';
import seactionB from './images/seactionB.png'

function SeactionB() {
  return (
    <div style={{height: '80vh'}}>
	<div className="container">
	<div className='row'>
<div className='col-6' style={{  height: '70vh',}}>
  <table style={{marginLeft:'-13%'}}>
  
    <tr style={{marginRight:'100px',textAlign: 'left'}}>
    <h1 style={{paddingTop:'1px'}}>Hire Dedicated Virtual Employees</h1>

     <h2 style={{ color:'#9adf46'}}>For All Domains</h2>
      
     
        <p style={{ justifyContent: 'justify'}}>Code Wraps is powered with numerous digital solutions such as web designing, web development, digital marketing, Ui/Ux Design, Optimization, Business Strategy and many more. You name it and we have it to make you handle your businesses with well-carved digital modules of all types. Our team of professionals are experienced enough to give the best Digital solutions from Mobile App to Web Development. We specialize in Blockchain and Digital Marketing which are termed as the best tools to highlight your business globally. We have extended our best services to plethora of business enterprises giving outstanding outcomes in healthcare, education, entertainment, real estate, and many more.</p>
        
         <button className='button'>Know More </button>     
    </tr>
    
  </table>
 
</div>
      <div className='col-6' style={{ height: '70vh', paddingTop:'1px', }}>

        <img src={seactionB} alt="fireSpot" style={{
          width: '545px', height: '393px',marginRight:'2%'
        }} />
      </div>
    
    </div>
    
</div>
<div style={{ height: '10vh', paddingTop:'1px',background: '#f8f9fa' }}>
      </div>
</div>

  )
}

export default SeactionB