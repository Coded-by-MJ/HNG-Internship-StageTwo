import  { useEffect, useState } from "react";
import { useData } from "./ProductsProvider";


const ProductCard = (props) => {
   const { id, imgPath, name, genre, price } = props;

   const { productsArr, updateProductProperty } = useData();

   const product = productsArr.find(product => product.id === id);
   


  const handleAddToCart = () => {
    updateProductProperty(id, 'addToCart', true); 
    updateProductProperty(id, 'quantityBought', product.quantityBought + 1);
  }

  const handleMinusQty = () => {
    if(product.quantityBought <= 1){
      updateProductProperty(id, 'quantityBought', 0);
      updateProductProperty(id, 'addToCart', false);
      return;
    }
    updateProductProperty(id, 'quantityBought', product.quantityBought - 1)
  } 
  
  const handleAddQty = () => {
    updateProductProperty(id, 'quantityBought', product.quantityBought + 1)
  }








const increment = <div className="increment">
  <button className='minus'
    onClick={handleMinusQty}
  >
      -
  </button>
     <span>
      { product.quantityBought }
     </span>
  <button className='add'
    onClick={handleAddQty}
  >
       +
  </button>
</div>
 
  
   



  return (
    <div className="card">
     <div  className="book_image_wrap" >
            <img src={imgPath} alt={name}></img>
       </div>

       <div className="card_details_wrap">
        <div className="book_info">
            <h3>{name}</h3>
            <span>Genre: {genre}</span>
        </div> 
            <div className="price_wrap">
               <span>
                 #{price.toLocaleString()}
               </span>

                <div className="cartBtn_container">
                  {
                    product.addToCart 

                  ?  increment 

                  : <button 
                       className={`addCart add_lg`}
                       onClick={handleAddToCart}
                      >
                       Add to Cart
                     </button>
                  }


                </div>
                
                 
               
            </div>

       </div>

    </div>
  )
}

export default ProductCard