import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero';
import Product from '../../components/Product';
import Feature from '../../components/Feature';
import Statcard from '../../components/Statcard';


const Home=()=>{
     const [products, setProducts]=useState([])
    useEffect(()=>{
    const fetchProducts=async()=>{
    const response=await fetch('https://fakestoreapi.com/products?limit=28')
    const data=await response.json()
    console.log(data)    
    setProducts(data)
}
fetchProducts()
},[])

    return(
       <>
       <Hero></Hero>
       
       <div class="flex flex-col text-center w-full mb-20">
                    <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1  text-2xl">Products</h2>
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Popular Products</h1>
                </div>

        
             {products.length > 0 ? (
                <Product products={products} />
              ) : (
                <div>Loading....</div>
              )}
        
       <Product></Product>
       <Feature></Feature>
       {/* <Statcard></Statcard> */}
       </> 

    )
}
export default Home;