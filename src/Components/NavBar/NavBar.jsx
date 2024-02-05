import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  function activeLink(){
    if(window.location.pathname==="/"){
      document.querySelectorAll('.nav-link')[0].classList.add('active')
    }
    else if(window.location.pathname==="/portfolio"){
      document.querySelectorAll('.nav-link')[1].classList.add('active')
      
    }
    else if(window.location.pathname==="/about"){
      document.querySelectorAll('.nav-link')[2].classList.add('active')
      
    } else if(window.location.pathname==="/contact"){
      document.querySelectorAll('.nav-link')[3].classList.add('active')
      
    }
  } 
  useEffect(() => {
    activeLink()
  
   
  }, [])
   
 let dispalyActive = (e) =>{
  let allLinks = document.querySelectorAll('.nav-link')
  for (const link of allLinks) {
    link.classList.remove('active')    
  }
  (e).classList.add('active')
  }
  return <>
  <nav className="navbar navbar-expand-lg fixed-top ">
  <div className="container">
    <h2 className="navbar-brand text-white fs-4 fw-bolder" >START FRAMEWORK</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link onClick={(e)=>dispalyActive(e.target)} className="nav-link rounded-3 py-2 px-3 text-white fw-bold fs-6 me-5" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link onClick={(e)=>dispalyActive(e.target)} className="nav-link rounded-3 py-2 px-3 text-white fw-bold fs-6 me-5" to="/portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link onClick={(e)=>dispalyActive(e.target)} className="nav-link rounded-3 py-2 px-3 text-white fw-bold fs-6 me-5" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link onClick={(e)=>dispalyActive(e.target)} className="nav-link rounded-3 py-2 px-3 text-white fw-bold fs-6 me-5" to="/contact">CONTACT</Link>
        </li>    
       
      </ul>
      
    </div>
  </div>
</nav>
  
  
  
  </>
}
