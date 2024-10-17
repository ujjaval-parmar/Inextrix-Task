import React, { useEffect, useState } from 'react'
import BannerProduct from '../components/BannerProduct'
import ProductList from '../components/ProductList'
import { useDispatch, useSelector } from 'react-redux';



const HomePage = () => {

  const products = useSelector(state=> state.products.products);

  useEffect(()=>{
    window.scrollTo(0, 0);


  }, []);
 
  

  return (
    <section>

      <BannerProduct />

      <ProductList products={products}/>


    </section>
  )
}

export default HomePage