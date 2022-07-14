

import React from 'react'
import styles from './header.css';
import logoweb from './images/logo.png'

function Header() {
  return (
    <div style={{border:'2px solid black'}}>

      <nav className={styles.header}>
        <div className="header">
          <a href="#default" className="logo">
          <img src={logoweb} alt="fireSpot" style={{width:'120px',height:'42px'}} /></a>
          <div className="headerRight">
            <a className="active" href="#home">Home</a>
            <a href="#category">Category</a>
            <a href="#faq">Faq</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>


      </nav>
    </div>





  )
}

export default Header