import Header from "../components/Header"
import { Link, useParams } from "react-router-dom"
import "../styles/details.scss"
import { useEffect, useState } from "react";
import { useData } from "../components/ProductsProvider";
import Spinner from "../components/Spinner";


const ProductDetailsPage = () => {

  const { id } = useParams();
  const { productsArr, updateProductProperty } = useData();





  const singleBook = productsArr.find(product => product.id === id)






const handleAddToCart = () => {
    updateProductProperty(id, 'addToCart', true); 
    updateProductProperty(id, 'quantityBought', singleBook.quantityBought + 1);
  }



  const handleMinusQty = () => {
    if(singleBook.quantityBought <= 1){
      updateProductProperty(id, 'quantityBought', 0);
      updateProductProperty(id, 'addToCart', false);
      return;
    }
    updateProductProperty(id, 'quantityBought', singleBook.quantityBought - 1)
} 

const handleAddQty = () => {
    updateProductProperty(id, 'quantityBought', singleBook.quantityBought + 1)
  }
  










const increment = <div className="increment">
  <button className='minus'
  onClick={handleMinusQty}
  >
      -
  </button>
     <span>
     {singleBook.quantityBought}
     </span>
  <button className='add'
    onClick={handleAddQty}
  >
       +
  </button>
</div>
 











  return (
    <main className="home_main">

        <Header link={'/'} heading='book details' />

      <div className="details_container">

        {
           
            !singleBook
          
          ? <div className="spinner">
              <Spinner />
            </div> 

          : <>
             <div className="details_one">
              <span className="_price">
                 Price: #{singleBook.price.toLocaleString()}
              </span>
               <div className="_info">
                 <h2>{singleBook.name}</h2>
                 <span className="hl">{singleBook.author} (Author)</span>
                 <span>Genre: {singleBook.genre}</span>
                 {
                   singleBook.bestSeller && 
                    <div className="best">
                      # 1 Best Seller
                   </div>
                 }
                   
               </div>
            

                 <div className="bg_image_wrapper">
                    <img src={singleBook.imgPath} alt={singleBook.name} />
                 </div>

            </div>

            <div className="details_two">
                <div className="description_wrap">
                  <h3>Description</h3>
                  <p>
                    {singleBook.description}
                  </p>
                </div>

                  <div className="description_btns">
                      <div className="qty">
                         <h4>Update Quantity</h4>
                      {
                            singleBook.addToCart 

                         ?   increment 

                         : <button 
                             className={`addCart add_lg`}
                              onClick={handleAddToCart}
                           >
                              Add to Cart
                           </button>
                      }
                      </div>


                        <div className="big_btns">
                            <Link to="/checkout" className="hl addCart">
                               Checkout
                            </Link>
                            <Link to="/" className="addCart">
                               Continue Shopping
                            </Link>
                        </div>
                  </div>

              </div>
            </>
        }

        </div>

    </main>

  )
}

export default ProductDetailsPage