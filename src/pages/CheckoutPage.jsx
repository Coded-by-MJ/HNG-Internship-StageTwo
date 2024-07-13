import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from '../components/Header'
import  '../styles/checkoutpage.scss'
import { SlArrowDown } from "react-icons/sl";
import credit from '../assets/creditcard.svg';
import { useData } from "../components/ProductsProvider";























const SuccessModal = () => {


  return (
            <div className="modal">
                 <div className="modal_body">
                 <svg width="48" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M24.5 0C19.7533 0 15.1131 1.40758 11.1663 4.04473C7.21955 6.68188 4.14341 10.4302 2.3269 14.8156C0.510399 19.201 0.0351188 24.0266 0.961164 28.6822C1.88721 33.3377 4.17299 37.6141 7.52945 40.9706C10.8859 44.327 15.1623 46.6128 19.8178 47.5388C24.4734 48.4649 29.299 47.9896 33.6844 46.1731C38.0698 44.3566 41.8181 41.2805 44.4553 37.3337C47.0924 33.3869 48.5 28.7468 48.5 24C48.5 17.6348 45.9714 11.5303 41.4706 7.02944C36.9697 2.52856 30.8652 0 24.5 0ZM35.82 19.18L24.5 30.48C23.375 31.6036 21.85 32.2347 20.26 32.2347C18.67 32.2347 17.145 31.6036 16.02 30.48L13.18 27.66C12.9935 27.4735 12.8456 27.2521 12.7447 27.0085C12.6438 26.7649 12.5918 26.5037 12.5918 26.24C12.5918 25.9763 12.6438 25.7151 12.7447 25.4715C12.8456 25.2279 12.9935 25.0065 13.18 24.82C13.3665 24.6335 13.5879 24.4856 13.8315 24.3847C14.0752 24.2838 14.3363 24.2318 14.6 24.2318C14.8637 24.2318 15.1249 24.2838 15.3685 24.3847C15.6122 24.4856 15.8335 24.6335 16.02 24.82L18.84 27.66C19.0259 27.8475 19.2471 27.9962 19.4909 28.0978C19.7346 28.1993 19.996 28.2516 20.26 28.2516C20.524 28.2516 20.7854 28.1993 21.0292 28.0978C21.2729 27.9962 21.4941 27.8475 21.68 27.66L32.98 16.34C33.1665 16.1535 33.3879 16.0056 33.6315 15.9047C33.8752 15.8038 34.1363 15.7518 34.4 15.7518C34.6637 15.7518 34.9249 15.8038 35.1685 15.9047C35.4122 16.0056 35.6335 16.1535 35.82 16.34C36.0065 16.5265 36.1544 16.7479 36.2553 16.9915C36.3563 17.2351 36.4082 17.4963 36.4082 17.76C36.4082 18.0237 36.3563 18.2849 36.2553 18.5285C36.1544 18.7721 36.0065 18.9935 35.82 19.18Z" fill="#34A853"/>
                  </svg>
                   <h2>Successful</h2>
                    <p>
                    Your payment was successful. Check your email for order delivery details.
                    </p>
                     <Link to="/" className="modal_btn addCart">
                         Back to Home
                     </Link>

                  </div>
            </div>
  )
}










const CheckoutPage = () => {
    const [ showModal, setShowModal ] = useState(false);

    const  [totalAmount, setTotalAmount] = useState(0);
    const [summaryCart, setSummaryCart] = useState([])


    const { productsArr, resetAll } = useData();
     
     
  
    useEffect(()=>{
     const updateSummary = () => {
         
       const allItems = productsArr.filter(product => product.addToCart);
       setSummaryCart(allItems);

        const total = allItems.reduce((acc, product) => {
          return acc + (product.quantityBought * product.price);
        }, 0);
        setTotalAmount(total);
      }
  
  
      productsArr.length > 0 &&  updateSummary();
  
    }, [productsArr])



 
  const handlePay = () => {
     resetAll();
     setShowModal(true);
  }







  return (
    <main className="home_main"> 
       <Header heading="Checkout Order" link="/cart" />

        <section className="checkout_wrap">
            <div className="summary">
              <div className="item">
                <h2>Order Summary</h2>

                 <Link to="/cart">Edit Cart</Link>
              </div> 
              <div className="item">

                {
                   summaryCart.length > 0 && 

                   summaryCart.map((product) => (

                    <div key={product.id} className="sm-item"> 
                          <span>
                              {product.name}
                              ({product.quantityBought} Copy)
                          </span>
                          <span>
                            #{(product.quantityBought * product.price).toLocaleString()}
                         </span>
                    </div>
                   ))

                }
                
                <div className="sm-item">
                  <span>
                    Shipping and Handling 
                  </span>
                  <span>
                     #0.00
                  </span>

                </div>
                
                <div className="sm-item">
                  <span>
                    Tax
                  </span>
                  <span>
                     #0.00
                  </span>

                </div>
               
              </div> 
              <div className="item">
                <span>Order Total</span>
                <span>#{totalAmount.toLocaleString()}</span>
                
              </div>
            </div>



            <div className="form_wrapper">
                  <h2>Delivery Details</h2>
                <form>
                      <div className="form_elem">
                          <label htmlFor="fname">
                            First Name
                          </label>
                          <input 
                           type="text"
                           placeholder="Enter first name"
                           name="fname"
                          
                          />
                      </div> 
                      
                       <div className="form_elem">
                          <label htmlFor="lname">
                            Last Name
                          </label>
                          <input 
                           type="text"
                           placeholder="Enter last name"
                           name="lname"
                          
                          />
                      </div> 
                      
                       <div className="form_elem">
                          <label htmlFor="email">
                            Email Address 
                          </label>
                          <input 
                           type="email"
                           placeholder="e.g. you@bookmail.com"
                           name="email"
                          
                          />
                      </div>
                      
                       <div className="form_elem">
                          <label htmlFor="phone">
                            Telephone 
                          </label>
                          <input 
                           type="number"
                           placeholder="0800 000 0000"
                           name="phone"
                          
                          />
                      </div>
                      
                       <div className="form_elem">
                          <label htmlFor="delivery">
                            Delivery Address 
                          </label>
                          <input 
                           type="text"
                           name="delivery"
                          
                          />
                      </div> 
                      
                      <div className="form_elem">
                          <label htmlFor="state">
                           State 
                          </label>
                          <input 
                           type="text"
                           name="state"
                          
                          />
                      </div> 
                      
                      <div className="form_elem">
                          <label htmlFor="country">
                           Country 
                          </label>
                          <div className="select">
                          <select 
                           name="country"
                          >
                            <option value="Nigeria">Nigeria</option>
                          </select>

                           <SlArrowDown className="down_icon"/>
                          </div>
                         
                        
                      </div> 
                  
                </form>

            </div>

            <div className="payment_wrapper">
               <h2>Payment Details</h2>

               <div className="payinfo_wrapper">
                   <div className="pay_options">
                     <button>
                       <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M29.4975 25.2165C29.0821 26.1848 28.5689 27.1081 27.966 27.972C27.1605 29.1225 26.499 29.9175 25.992 30.36C25.2045 31.083 24.3585 31.455 23.454 31.476C22.806 31.476 22.023 31.2915 21.111 30.9165C20.196 30.543 19.356 30.36 18.5865 30.36C17.781 30.36 16.917 30.543 15.9915 30.9165C15.0675 31.2915 14.3205 31.488 13.749 31.506C12.8835 31.5435 12.018 31.1625 11.1555 30.36C10.605 29.88 9.91647 29.055 9.08997 27.888C8.20497 26.6445 7.47747 25.197 6.90747 23.5515C6.29697 21.771 5.99097 20.049 5.99097 18.381C5.99097 16.4715 6.40347 14.823 7.22997 13.443C7.85509 12.3592 8.74879 11.4547 9.82497 10.8165C10.8862 10.18 12.0976 9.83732 13.335 9.82353C14.025 9.82353 14.9295 10.0365 16.05 10.4565C17.1705 10.8765 17.8905 11.0895 18.204 11.0895C18.441 11.0895 19.2375 10.839 20.5935 10.3425C21.873 9.88203 22.953 9.69154 23.838 9.76654C26.238 9.96004 28.0395 10.905 29.238 12.609C27.093 13.9095 26.0325 15.729 26.0535 18.0645C26.0715 19.884 26.733 21.3975 28.029 22.599C28.6019 23.1473 29.2705 23.5861 30.0015 23.8935C29.8425 24.354 29.6745 24.7935 29.4975 25.2165ZM23.997 3.57004C23.997 4.99504 23.475 6.32704 22.4385 7.55854C21.1845 9.02254 19.6695 9.87004 18.027 9.73654C18.0055 9.55734 17.995 9.37701 17.9955 9.19654C17.9955 7.82703 18.5895 6.36304 19.65 5.16454C20.178 4.55854 20.85 4.05304 21.6645 3.65104C22.4775 3.25504 23.2455 3.03604 23.9685 2.99854C23.988 3.19054 23.997 3.38104 23.997 3.57004Z" fill="#2A192B"/>
                       </svg>
                        <span>Pay</span>
                     </button>
                     
                      <button>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M32.7083 15.0623H31.5V15H18V21H26.4773C25.2405 24.4928 21.9172 27 18 27C13.0297 27 9 22.9702 9 18C9 13.0297 13.0297 9 18 9C20.2943 9 22.3815 9.8655 23.9708 11.2792L28.2135 7.0365C25.5345 4.53975 21.951 3 18 3C9.71625 3 3 9.71625 3 18C3 26.2838 9.71625 33 18 33C26.2838 33 33 26.2838 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z" fill="#FFC107"/>
                          <path d="M4.72949 11.0182L9.65774 14.6325C10.9912 11.331 14.2207 9 18 9C20.2942 9 22.3815 9.8655 23.9707 11.2792L28.2135 7.0365C25.5345 4.53975 21.951 3 18 3C12.2385 3 7.24199 6.25275 4.72949 11.0182Z" fill="#FF3D00"/>
                          <path d="M18 33C21.8745 33 25.395 31.5173 28.0567 29.106L23.4142 25.1775C21.8576 26.3613 19.9556 27.0016 18 27C14.0985 27 10.7857 24.5123 9.53774 21.0405L4.64624 24.8093C7.12874 29.667 12.1702 33 18 33Z" fill="#4CAF50"/>
                           <path d="M32.7083 15.0623H31.5V15H18V21H26.4773C25.8857 22.6623 24.82 24.1149 23.412 25.1782L23.4142 25.1768L28.0568 29.1052C27.7283 29.4037 33 25.5 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z" fill="#1976D2"/>
                          </svg>

                        <span>Pay</span>
                     </button>
                   </div>

                   <div className="seperator">
                         <span>Or pay with card</span>
                   </div>

                   <div className="credit_info">
                         <label htmlFor="acct">
                             Card Information
                         </label>
                         <div className="card_field acct">
                           <input 
                             type="number"
                             name="acct"
                             placeholder="1234 1234 1234 1234"
                           
                           />
                            <img src={credit} alt="credit cards" />

                         </div> 
                         
                         <div className="card_field">
                               <span>
                               <input 
                                type="number"
                                name="expire"
                                placeholder="MM/YY"
                           
                                  />
                                   

                               </span>

                                <span>
                                <input 
                                  type="number"
                                  name="cvc"
                                  placeholder="CVC"
                           
                                  />
                                </span>
                         </div>

                   </div>

               </div>

               <button 
               className="pay_btn addCart"
               onClick={handlePay}
               
               >
                    Pay #{totalAmount.toLocaleString()}
               </button>
            </div>
          
               {showModal && <SuccessModal />}
        </section>


      </main>
  )
}

export default CheckoutPage