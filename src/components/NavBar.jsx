import { Link, NavLink } from "react-router-dom";
import {useState} from "react";

import svg from "../assets/brandLogo.svg";
import { PiShoppingCartLight } from "react-icons/pi";
import  { GoSearch } from "react-icons/go";






const MobileMenu = () => {
 const [navisOpen, setNavisOpen] = useState(false);

 const linkClass = ({ isActive }) =>{
  return isActive ? "active" : "";
}

  
  return (
      <>
        <label className="hamburger-menu" htmlFor="menu">
        <input type="checkbox" name='menu' id="menu" 
         onChange={(e) => setNavisOpen(e.target.checked)}
        />
        </label>

        <ul className={`nav_links mobile ${navisOpen ? 'open' : ''}`}>
          <li> <p>Story Books</p> </li>   
           <li> <NavLink to="/" 
            className={`addCart ${linkClass("/")}`}
           >Novels</NavLink></li>    
           <li> <p>Educational Books</p> </li>
        </ul>
      
      
      
      </>
  )
}








const NavBar = () => {

  const [searchVal, setSearchVal] = useState('');


  const linkClass = ({ isActive }) =>{
       return isActive ? "active" : "";
  }




  return (
     <nav className="nav_bar">

      

       <div className="navlogo_wrapper">

        
         <MobileMenu />
       {/* <ul className="nav_links">
          <li> <p>Story Books</p> </li>   
           <li> <NavLink to="/" 
            className={`addCart ${linkClass("/")}`}
           >Novels</NavLink></li>    
           <li> <p>Educational Books</p> </li>
        </ul> */}

        <Link
         to="/"
         className="brand_logo">
          <img src={svg} alt="Logo" /> 
        </Link>


       </div>
       


      

        <div className="search_wrapper">
           <div className="input_field">
               <GoSearch 
                 className="search_icon"
               />
              <input  
               placeholder= "Search title, author..."
               type="text"
               value={searchVal}
               onChange={(e) => setSearchVal(e.target.value)}
              
              />
           </div>

          <Link 
          to="/cart"
           className="nav_cart">
          <PiShoppingCartLight  className="cart_icon"/>
          <span>
            1
          </span>
          </Link>
          
        </div>




     </nav>
  )
}

export default NavBar