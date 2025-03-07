import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';




const Dropdown = () =>  {

  const [show1, setShow1] = useState(false);
   const [show2, setShow2] = useState(false);
   
   const linkClass = ({ isActive }) => {
    return isActive ? "active" : "";
  }


  return (
       <div className='dropdown_wrap'>
           <div className={`dropdown hl ${show1 ? 'show' : ''}`}
             onClick={() => setShow1(prev => !prev)}
            >
              <span>All Genres</span>
              <SlArrowDown className='arrowdown_icon' />
            </div>
            {show1 && ( 
             <ul className='droplist left'>
                 <li>
                  <NavLink className={linkClass} to="/category/horror">Horror</NavLink> 
                  </li>
                 <li>
                 <NavLink className={linkClass}  to="/category/thriller">Thriller</NavLink>

                 </li>
                 <li>
                 <NavLink className={linkClass} to="/category/fantasy">Fantasy</NavLink>

                 </li>
                 <li>
                  <NavLink className={linkClass} to="/category/romance">Romance</NavLink>
                 </li>
                 <li>
                  <NavLink className={linkClass} to="/category/adventure">Adventure</NavLink>
                 </li>
             </ul>
           )}

           <div className={`dropdown  ${show2 ? 'show' : ''}`}
              onClick={() => setShow2(prev => !prev)} 
            >
               <span>Latest Stock</span>
               <SlArrowDown className='arrowdown_icon' />
         
            </div>


            {show2 && ( 
             <ul className='droplist right'>
                 <li>
                   <NavLink className={linkClass} to="/">All Novels</NavLink>
                 </li>
                 <li>
                   <NavLink className={linkClass} to="/category/best seller">Best Seller</NavLink>
                 </li>
             </ul>
           )}
       
       </div>
  )
}













const Header = ({isHome = false, heading, link, hideBack = false}) => {
  return (
    <div className="heading_wrap">
      <div className="heading_content">
         <NavLink to={link} className={`back_wrap ${hideBack ? 'hidden' : ''}`}>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.46094 12C2.46094 11.8011 2.53996 11.6103 2.68061 11.4697C2.82126 11.329 3.01203 11.25 3.21094 11.25L21.0009 11.262C21.0994 11.2621 21.1969 11.2817 21.2879 11.3195C21.3788 11.3573 21.4614 11.4126 21.531 11.4824C21.6005 11.5521 21.6557 11.6349 21.6932 11.7259C21.7308 11.817 21.7501 11.9145 21.7499 12.013C21.7498 12.1115 21.7303 12.209 21.6925 12.2999C21.6547 12.3909 21.5993 12.4735 21.5296 12.543C21.4598 12.6126 21.3771 12.6677 21.286 12.7053C21.195 12.7429 21.0974 12.7621 20.9989 12.762L3.20994 12.75C3.0112 12.7497 2.82069 12.6706 2.68025 12.53C2.53982 12.3894 2.46094 12.1987 2.46094 12Z" fill="#2A192B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.517 4.47001C10.6576 4.6105 10.7366 4.80105 10.7368 4.9998C10.737 5.19856 10.6583 5.38925 10.518 5.53001L4.05997 12L10.518 18.47C10.6545 18.6115 10.73 18.801 10.7282 18.9977C10.7264 19.1943 10.6475 19.3824 10.5083 19.5214C10.3692 19.6604 10.1811 19.7392 9.98443 19.7408C9.78778 19.7424 9.59836 19.6667 9.45697 19.53L2.46897 12.53C2.32852 12.3894 2.24963 12.1988 2.24963 12C2.24963 11.8013 2.32852 11.6106 2.46897 11.47L9.45697 4.47001C9.5976 4.32956 9.78822 4.25067 9.98697 4.25067C10.1857 4.25067 10.3763 4.32956 10.517 4.47001Z" fill="#2A192B"/>
           </svg>
            <span>Back</span>
          </NavLink>
          <h1>{heading}</h1>
          <span className='hide'></span>
       </div>

         { isHome && <Dropdown /> }
    </div>
  )
}

export default Header