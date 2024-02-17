import React, { useEffect, useState } from 'react'
import "./style.css";
/* https://dummyjson.com/products */

export const Products = () => {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [productsPerPage, setProductsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);



    const numTotalOfPages = Math.ceil(products.length / productsPerPage);
    const pages = [...Array(numTotalOfPages + 1)].slice(1);

    const indexOfLastProduct = currentPage * productsPerPage;  
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;  

    const visibleProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);



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

        const handlePageClick = (pageNumber) => {
            setCurrentPage(pageNumber);
        };


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
                visibleProducts.map(product =>(
                    <div key={product.id}>
                        <img src={product.thumbnail} alt='photoproduit'/>
                        <p>{product.title}</p>
                    </div>
                ))
            }
        </div>
        <div className="pagination">
                {pages.map((page, index) => (
                    <button key={index} onClick={() => handlePageClick(index + 1)}>
                        {page}
                    </button>
                ))}
        </div>
    </div>
  )
}
