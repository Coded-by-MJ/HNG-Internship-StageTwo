import  { useState } from "react";

const ProductCard = (props) => {


   
  console.log(props)
   



  return (
    <div className="card">
     <div  className="book_image_wrap" >
            <img src={props.imgPath} alt={props.name}></img>
       </div>

       <div className="card_details_wrap">
        <div className="book_info">
            <h3>{props.name}</h3>
            <span>Genre: {props.genre}</span>
        </div> 
            <div className="price_wrap">
               <span>
                 #{props.price.toLocaleString()}
               </span>

                <button 
                    className={`addCart `}
                  >
                   Add to Cart
                </button>
                
                 
               
            </div>

       </div>




    </div>
  )
}

export default ProductCard