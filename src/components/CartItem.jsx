import styles from "../styles/cart.module.scss"
import { useData } from "./ProductsProvider";

const CartItem = (props) => {
  
const {name, author, bestSeller, genre, price, imgPath, id} = props
  
const { productsArr, updateProductProperty } = useData();

const product = productsArr.find(product => product.id === id);
   
  

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
  
const handleRemoveCart = () => {
    updateProductProperty(id, 'addToCart', false); 
    updateProductProperty(id, 'quantityBought', 0);
  }
  
  
  
  
  
return (
        
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
         <img src={imgPath} alt={name}></img>
        </div>
        

        <div className={styles.info}>
            <h3>{name}</h3>
            <span>by {author}</span>
            <h4>Hard Cover</h4>
            <span>Genre: {genre}</span>
        </div>

    </div>

     { bestSeller &&  
      <span>
         # 1 Best Seller
      </span>
     }
   

</div>

   <div className={styles.counter}>
     <button className={styles.hl}
      onClick={handleMinusQty}
     >-</button>
     <span>{product.quantityBought}</span>
     <button className={styles.hl}
      onClick={handleAddQty}
     >+</button>
   </div>
   
   <div className={styles.x_icon}>
     <button
     onClick={handleRemoveCart}
     >X</button>
   </div>

    <div className={styles.price}>
     <h3>#{product.price.toLocaleString()}</h3>
   </div>

</div>
   
  )
}

export default CartItem