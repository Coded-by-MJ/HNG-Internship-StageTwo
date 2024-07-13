import { useParams } from "react-router-dom";
import Header from "../components/Header"
import { useData } from "../components/ProductsProvider";
import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";













const CategoryPage = () => {
  const { id } = useParams();

  const { productsArr, setSize } = useData();
  const [filteredProducts, setFilteredProducts] = useState([])


  useEffect(() => {

    const getProductsByCatergory = (catergoryId) => {

      setSize(30);
     
      const filtered = catergoryId === 'best seller' 
                       ? productsArr.filter(product =>  product.bestSeller)
                       : productsArr.filter(product =>  product.genre === catergoryId)
     
      setFilteredProducts(filtered);

    }
      
      getProductsByCatergory(id)


   }, [id])

  //  console.log(filteredProducts)

  
 

  return (
    <main className="home_main">
      <Header isHome={true} link="/" heading={id} /> 
      
      <section className="products_wrapper">
           {
            filteredProducts.map((book) => (
              <ProductCard key={book.id} {...book} />
             ))

            }

        </section>
      
    </main>
  )
}

export default CategoryPage