import { Link, NavLink } from "react-router-dom";
import {useEffect, useState} from "react";

import svg from "../assets/brandLogo.svg";
import { PiShoppingCartLight } from "react-icons/pi";
import  { GoSearch } from "react-icons/go";
import { useData } from "./ProductsProvider";





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

  const  [count, setCount] = useState(0)


  const { productsArr } = useData();
   
   

  useEffect(()=>{
   const updateCount = () => {
      const addedToCart = productsArr.filter(product => product.addToCart);
      setCount(addedToCart.length);
    }


    productsArr.length > 0 &&  updateCount();

  }, [productsArr])












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
           {count}
          </span>
          </Link>
          
        </div>




     </nav>
  )
}

export default NavBar