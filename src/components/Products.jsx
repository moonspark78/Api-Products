import React, { useEffect, useState } from 'react'
/* https://dummyjson.com/products */

export const Products = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            const reponse = await fetch("https://dummyjson.com/products"); 
            const data = await reponse.json();
            console.log(data.products);

        };
        fetchProducts();
    },[]);


  return (
    <div>Products</div>
  )
}
