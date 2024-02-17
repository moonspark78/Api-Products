import React, { useEffect, useState } from 'react'
import "./style.css";
/* https://dummyjson.com/products */

export const Products = () => {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        const fetchProducts = async () => {
            const reponse = await fetch("https://dummyjson.com/products"); 
            const data = await reponse.json();
            console.log(data.products);
            setProducts(data.products);

        };
        fetchProducts();
    },[]);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()));


  return (
    <div className='pro'>
        <h1>Products</h1>
        <input
            type="text" 
            placeholder="Enter your name" 
            name="text" 
            class="input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='card'>
            {
                filteredProducts.map(product =>(
                    <div key={product.id}>
                        <img src={product.thumbnail} alt='photoproduit'/>
                        <p>{product.title}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
