import { useState } from "react";

import Header from "../components/Header"
import ProductCard from "../components/ProductCard";

import { useData } from "../components/ProductsProvider";
import Spinner from "../components/Spinner";
import  "../styles/homepage.scss";





















const HomePage = () => {

  const { productsArr } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, productsArr.length);
  const currentItems = productsArr.slice(startIndex, endIndex);

  const totalPages = Math.ceil(productsArr.length / itemsPerPage);



  






  return (
  
    <main className="home_main">
       <Header  heading="Novels" isHome={true} hideBack={true}  link="/" />

       <section className="products_wrapper">
            
        {  
          productsArr.length === 0 
    
          ? <div className="spinner">
                     <Spinner />
            </div> 

          : currentItems.map((book) => (
              <ProductCard key={book.id} {...book} />
             ))
    

        }
                
       </section>



         <div className="pagination_wrap"> 
        
            {Array.from({ length: totalPages }, (_, index) => (
              <button 
                key={index + 1} 
                className={currentPage === index + 1 ? 'active' : ''}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}

         </div>
      

    </main>

   
  )
}

export default HomePage


{/* */}