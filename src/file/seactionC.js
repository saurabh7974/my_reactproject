
import React from 'react'
import styles from './seactionC.css';
import a from './images/a.png'
import share from './images/share.png'
import presentation from './images/presentation.png'
import digital from './images/digital-marketing.png'

import skills from './images/skills.png'
import target from './images/target.png'

function Seactionc() {
  return (
    <div style={{height: '80vh',border:'2px soild black'}}>
	<section className="spacing">
		<div className="our-services shadow-effect">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-5">
						<div className="services-content aos-init" data-aos="fade-right">
							<div className="section-title">
								<label>SERVICES</label>
								<h2>We offer plethora of  <span className="text-green">Web services covering </span></h2>
							</div>
							<p>Web designing, Web development, Digital marketing, Ui/Ux Design, Optimization Business Strategy and many more.</p>
							
						</div>
					</div>
					<div className="col-md-7 aos-init" data-aos="fade-left">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-4 col-6">
									<a href="website-design" className="services">
										<figure>
                                        <img src={a} alt="fireSpot" style={{width:'120px',height:'42px'}} />
										</figure>
										<h4>web designing</h4>
									
									</a>
								</div>
								<div className="col-md-4 col-6">
									<a href="web-development" className="services">
										<figure>
                                        <img src={share} alt="fireSpot" style={{width:'120px',height:'42px'}} />
										</figure>
										<h4>web development</h4>
										
									</a>
								</div>
								<div className="col-md-4 col-6">
									<a href="digital-marketing" className="services">
										<figure>
                                        <img src={presentation} alt="fireSpot" style={{width:'120px',height:'42px'}} />
										</figure>
										<h4>digital marketing</h4>
										
									</a>
								</div>
								<div className="col-md-4 col-6">
									<a href="graphic-design" className="services">
										<figure>
                                        <img src={digital} alt="fireSpot" style={{width:'120px',height:'42px'}} />
										</figure>
										<h4>ui/ux design</h4>
										
									</a>
								</div>
								<div className="col-md-4 col-6">
									<a href="digital-marketing" className="services">
										<figure>
                                        <img src={skills} alt="fireSpot" style={{width:'120px',height:'42px'}} />
										</figure>
										<h4>optimization</h4>
									
									</a>
								</div>
								<div className="col-md-4 col-6">
									<a href="javascript:void(0);" className="services">
										<figure>
                                        <img src={target} alt="fireSpot" style={{width:'120px',height:'42px'}} />
										</figure>
										<h4>business strategy</h4>
										
									</a>
								</div>
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

export default Seactionc