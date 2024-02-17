import React, { useEffect, useState } from 'react'
import "./style.css";
/* https://dummyjson.com/products */

export const Products = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            const reponse = await fetch("https://dummyjson.com/products"); 
            const data = await reponse.json();
            console.log(data.products);
            setProducts(data.products);

        };
        fetchProducts();
    },[]);


  return (
    <div className='pro'>
        <h1>Products</h1>
        <div className='card'>
            {
                products.map(product =>(
                    <div key={product.id}>
                        <img src={product.thumbnail} alt='photo-produit'/>
                        <p>{product.title}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
