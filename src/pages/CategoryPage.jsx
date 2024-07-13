import { useParams } from "react-router-dom";
import Header from "../components/Header"
import { useData } from "../components/ProductsProvider";
import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";













const CategoryPage = () => {
  const { id } = useParams();

  const { productsArr, setSize } = useData();
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const getProductsByCatergory = (catergoryId) => {

      if (!Array.isArray(productsArr)) {
        console.error('productsArr is not an array', productsArr);
        setLoading(false);
        return;
      }
     
      const filtered = catergoryId === 'best seller' 
                       ? productsArr.filter(product =>  product.bestSeller)
                       : productsArr.filter(product =>  product.genre === catergoryId)
     
      setFilteredProducts(filtered);
      setLoading(false);

    }
       
    productsArr.length > 0 ? getProductsByCatergory(id) : setLoading(true);


   }, [id])

  //  console.log(filteredProducts)

  
 

  return (
    <main className="home_main">
      <Header isHome={true} link="/" heading={id} /> 
      
      <section className="products_wrapper">
        
        {
           
            loading
           
           ? <div className="spinner">
               <Spinner />
             </div> 

           : filteredProducts.map((book) => (
              <ProductCard key={book.id} {...book} />
             ))


          }

        </section>
      
    </main>
  )
}

export default CategoryPage