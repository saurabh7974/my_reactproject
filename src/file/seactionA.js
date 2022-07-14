
import React from 'react'
import styles from './seactionA.css';
import bteam from './images/team.png'
import briefcase from './images/briefcase.png'
import alesman from './images/salesman.png'
import certification from './images/certification.png'
import banner from './images/banner.png'
function Seaction() {
  return (
    <div style={{height: '100vh'}}>
<section className="main_banner">
	<div className="container">
	<div className='row'>
<div className='col-6' style={{  height: '70vh',}}>
  <table style={{marginLeft:'-13%'}}>
  
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
      <div className='col-6' style={{ height: '70vh', paddingTop:'20px' }}>

        <img src={banner} alt="fireSpot" style={{
          width: '545px', height: '393px',
        }} />
      </div>

    </div>


			<div className="project_counter">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-6 col-6">
							<div className="counter-column">
								<figure>
                                <img src={bteam} alt="fireSpot"  />
								</figure>
			  					<h4 data-max="2000" className="ms-animated">2000 +</h4>
			  					<h5>happy customers</h5>
		  					</div>
						</div>
						<div className="col-md-3 col-sm-6 col-6">
							<div className="counter-column">
								 <figure>
                                 <img src={briefcase} alt="fireSpot"  />
								</figure>
			 					 <h4 data-max="3000" className="ms-animated">3000 +</h4>
			 					 <h5>projects delivered</h5>
		 					</div>
						</div>
						<div className="col-md-3 col-sm-6 col-6">
							<div className="counter-column">
								<figure>
                                <img src={alesman} alt="fireSpot"  />
								</figure>
			  					 <h4 data-max="2000" className="ms-animated">2000 +</h4>
			  					 <h5>clients served</h5>
		  					 </div>
						</div>
						<div className="col-md-3 col-sm-6 col-6">
							<div className="counter-column">
								<figure>
                                <img src={certification} alt="fireSpot"  />
								</figure>
			  					<h4 data-max="10" id="test" className="ms-animated">10 +</h4>
			  					<h5>years experence</h5>
		  					</div>
						</div>
					</div>
				</div>
			</div>
            </div>
	</section>


</div>
  )
}

export default Seaction