import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import data from "../products.json";
import  "../styles/homepage.scss";

import  {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"


const HomePage = () => {

    const { books } = data;
    

  return (
  
    <main className="home_main">
       <Header  heading="Novels" isHome={true}  link="/"/>

       <section className="products_wrapper">
            {
                books.map((book) => (
                    <ProductCard key={book.id} {...book} />
                ))
            }
       </section>
    </main>

   
  )
}

export default HomePage