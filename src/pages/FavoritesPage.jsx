import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFavoritesProduct } from '../store/productsSlice';

import { FaHeart } from "react-icons/fa";
import ProductList from '../components/ProductList';


const FavoritesPage = () => {

    const products = useSelector(state => state.products.products);


    const favoriteProducts = products.filter(product => product.favorite == true)

    

    useEffect(()=>{
        window.scrollTo(0, 0);
    
    
      }, []);



    return (
        <section className='container mx-auto px-2 mt-28 min-h-[calc(100vh-112px)]'>

            <div>

                <h1 className='text-2xl font-semibold uppercase my-5 text-center tracking-wider'>Favorite Products</h1>

            </div>

            {favoriteProducts && favoriteProducts.length > 0 ?
                <ProductList products={favoriteProducts} />
                : (
                    <h3 className='text-lg my-10 col-span-1 md:col-span-5 text-center'>No Favorite Product Found!</h3>
                )}





        </section>
    )
}

export default FavoritesPage