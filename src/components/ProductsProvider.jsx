import { createContext, useState, useContext, useEffect } from 'react';
import books from "./Bookinfo";




const DataContext = createContext();




const getGenre = (id) => {

    switch (id) {
        case "2ad4106f144644c4a0bf87afc1ab42f7":  //adventure
         return 'Adventure';
        case "cc22339e0eac4a5a87b87dd86fb84be4":  //fantasy
         return "Fantasy";
        case "5a0a3e22516d44cb8d4d9b3d10a50948": //horror
        return "Horror";
        case "af06792783ff4124989dc0e577e49e9a": //Romance
        return 'Romance';
        case  'b513d518841e4609b1d823edbf485d2d':  //Thriller
        return 'Thriller';
        default: 
         return " ";
    }
}



















// Data provider component
const ProductsProvider = ({ children }) => {
    const [productsArr, setProductsArr] = useState(false);


   const [page, setPage] = useState(1);
   const [size, setSize] = useState(10);
   const [cartStatus, setCartStatus] = useState(false); 
   const [qtyBought, setQtyBought] = useState(0);



   

    useEffect(() => {
    const url = `?organization_id=f2234955888247289ada87c57259fbc1&Appid=YJKVU0ZHAB467OX&Apikey=e833284ad83143cf87c2c2054fd70ec020240712142027298676&page=${page}&size=${size}`;
        const fetchProducts = async () => {
          
          try { 
            const res = await fetch(`https://timbu-get-all-products.reavdev.workers.dev/${url}`)
             
            const data = await res.json();
        
            const modifiedItems = data.items.map(item => ({
               ...item,
               author: books[item.name].author,
               quantityBought: qtyBought,
               addToCart: cartStatus,
               imgPath: `https://api.timbu.cloud/images/${item.photos[0].url}`,
               price: 15000,
               genre: books[item.name].genre,
               bestSeller: books[item.name].best_seller
            }))

    
            setProductsArr(modifiedItems);
            // console.log(data);

           
          }catch(e) {
             console.error("Error fetching data", e);
       
          }
  
        };
        fetchProducts();    

    },[page, size])


  
 //productsArray, setProductsArray,
  return (
    <DataContext.Provider value={{ productsArr, setProductsArr, page, setPage,
     size, setSize, qtyBought, setQtyBought, cartStatus, setCartStatus }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export {ProductsProvider as default, useData };