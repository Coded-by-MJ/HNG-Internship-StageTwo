import { useEffect } from "react";

import Header from "../components/Header"
import ProductCard from "../components/ProductCard";

import { useData } from "../components/ProductsProvider";
import Spinner from "../components/Spinner";
import  "../styles/homepage.scss";





















const HomePage = () => {

    const data = useData();

  
    useEffect(() => {
      data.setSize(10);
  }, []); 
    

  return (
  
    <main className="home_main">
       <Header  heading="Novels" isHome={true} hideBack={true}  link="/" />

       <section className="products_wrapper">
            
        {  
          !data.productsArr
    
          ? <div className="spinner">
                     <Spinner />
            </div> 

          : data.productsArr.map((book) => (
              <ProductCard key={book.id} {...book} />
             ))
    

        }
                
       </section>



         <div className="pagination_wrap"> 
          {[1, 2, 3].map((pageNum) => (
          <button
           key={pageNum}
           className={data.page === pageNum ? 'active' : ''}
           value={pageNum}
           onClick={(e) => data.setPage(parseInt(e.target.value))}
           >
           {pageNum}
         </button>
         ))}

         </div>
      

    </main>

   
  )
}

export default HomePage


{/* */}