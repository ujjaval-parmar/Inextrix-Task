import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFavoritesProduct } from '../store/productsSlice';
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import ProductItem from './ProductItem';


const ProductList = ({products}) => {


    return (
        <section className='container mx-auto py-10 '>

            <div className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))]  gap-10 px-2'>


                {products.map(product => {
                    
                 return   <ProductItem product={product} key={product._id.$oid}/>
                    

                })}



            </div>



        </section>
    )
}

export default ProductList