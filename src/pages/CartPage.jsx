import { Link } from "react-router-dom";

import Header from '../components/Header'
import styles from "../styles/cart.module.scss"


const CartPage = () => {

  return (
     <main className="home_main"> 
       <Header heading="My Shopping Cart" link="/" />
     
        <section className={styles.cart_wrapper}>
           <div className={styles.order_wrap}>

            
            <h3 className={styles.details}>
                Book Details
            </h3>
            <h3 className={styles.qty}>
                Quantity
            </h3>
            <h3 className={styles.remove}>
                Remove
            </h3>

            <h3 className={styles.txt}>
                Price
            </h3>
 
        <div className={styles.book_wrap}>
            <div className={styles.book_info}>
                <div className={styles.img}>
                 <img src="/images/watch.png" alt="the last watch"></img>
                </div>
                

                <div className={styles.info}>
                    <h3>The Last Watch</h3>
                    <span>by J. S. Dewes</span>
                    <h4>Hard Cover</h4>
                    <span>Genre: Adventure</span>
                </div>

            </div>

            <span>
                # 1 Best Seller
            </span>

        </div>

           <div className={styles.counter}>
             <span className={styles.hl}>+</span>
             <span>1</span>
             <span className={styles.hl}>-</span>
           </div>
           
           <div className={styles.x_icon}>
             <span>X</span>
           </div>

            <div className={styles.price}>
             <h3>#15,000</h3>
           </div>

           


      </div>
           








            <div className={styles.price_wrapper}>
                <div className={styles.btn}>
                    <span>Discount</span>
                    <span className={styles.num}>
                        #0.00
                    </span>
                </div>

                 <div className={styles.btn}>
                    <span>Delivery</span>
                    <span className={styles.num}>
                        #0.00
                    </span>
                </div>

               <div className={styles.btn}>
                    <span>Subtotal</span>
                    <span className={styles.num}>
                        #15,000
                    </span>
                </div>


           <div className={styles.btn}>
                    <span>Total</span>
                    <span className={styles.num}>
                        #15,000
                    </span>
                </div>

            </div>

            <div className={styles.cart_footer}>
                <label htmlFor='discount'>
                    If you have a promotion code, please enter it here
                </label>
                <div className={styles.checkout_wrap} >
                    <div className={styles.input_wrap} >

                        <div className={styles.field} >
                            <input 
                             type='text'
                             placeholder='please enter promo code'
                            />
                        </div>

                         <button className='addCart'>
                            Apply Discount
                         </button>
                    </div>

                        <span>Items: 1</span> 

                  <div className={styles.action_btns}>
                    <Link to="/checkout"
                      className={`addCart ${styles.check}`}>
                        <span>Checkout</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9.289L11.312 8.6L13.406 6.5H8.5V5.5H13.406L11.306 3.4L12 2.712L15.288 6L12 9.289ZM7.308 21.116C6.886 21.116 6.53033 20.9713 6.241 20.682C5.95167 20.3927 5.80733 20.0373 5.808 19.616C5.80867 19.1947 5.953 18.839 6.241 18.549C6.53033 18.2603 6.886 18.116 7.308 18.116C7.73 18.116 8.08533 18.2603 8.374 18.549C8.66267 18.8377 8.80733 19.1933 8.808 19.616C8.80867 20.0387 8.664 20.394 8.374 20.682C8.084 20.97 7.72867 21.1147 7.308 21.116ZM16.692 21.116C16.2707 21.116 15.9153 20.9713 15.626 20.682C15.3367 20.3927 15.192 20.0373 15.192 19.616C15.192 19.1947 15.3367 18.839 15.626 18.549C15.9153 18.2603 16.2707 18.116 16.692 18.116C17.1133 18.116 17.469 18.2603 17.759 18.549C18.0477 18.8383 18.192 19.194 18.192 19.616C18.192 20.0373 18.0477 20.3927 17.759 20.682C17.4697 20.9713 17.114 21.116 16.692 21.116ZM2 3.5V2.5H4.448L8.544 11.116H15.179C15.2943 11.116 15.397 11.087 15.487 11.029C15.5763 10.971 15.653 10.891 15.717 10.789L19.213 4.5H20.353L16.569 11.335C16.4243 11.5783 16.2363 11.7693 16.005 11.908C15.7737 12.0467 15.5193 12.116 15.242 12.116H8.1L6.885 14.346C6.78233 14.5 6.779 14.6667 6.875 14.846C6.971 15.0253 7.11533 15.1153 7.308 15.116H18.192V16.116H7.308C6.72467 16.116 6.28833 15.871 5.999 15.381C5.70967 14.891 5.70367 14.396 5.981 13.896L7.485 11.216L3.808 3.5H2Z" fill="#F9F6FB"/>
                           </svg>
                    </Link>

                     <Link to="/" className='addCart'>
                       Continue Shopping
                     </Link>
                  </div>

                </div>

              
            </div>
        </section>
     
     </main>
  )
}

export default CartPage