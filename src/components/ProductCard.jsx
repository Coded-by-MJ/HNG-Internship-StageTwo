import  { useState } from "react";

const ProductCard = ({title, src, price, genre }) => {

    const [disabled, setDisabled] = useState(false);
 
    const handleDisabled = () => {
        setDisabled(prev => !prev);
       
    }
   



  return (
    <div className="card">
     <div  className="book_image_wrap" >
            <img src={src} alt={title}></img>
       </div>

       <div className="card_details_wrap">
        <div className="book_info">
            <h3>{title}</h3>
            <span>Genre:  {genre}</span>
        </div> 
            <div className="price_wrap">
               <span>
                 #{price.toLocaleString()}
               </span>

                <button 
                    className={`addCart ${disabled ? 'disabled' : ''}`}
                    onClick={handleDisabled}
                  >
                      {disabled ? 'Remove from Cart' : 'Add to Cart'}
                </button>
                
                 
               
            </div>

       </div>




    </div>
  )
}

export default ProductCard