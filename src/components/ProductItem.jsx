import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setFavoritesProduct } from '../store/productsSlice';
import { addQuantity, addToCart, decCartItem, incCartItem } from '../store/cartSlice';
import { motion, AnimatePresence } from "framer-motion"

const ProductItem = ({ product }) => {

    const [isImageLoading, setIsImageLoading] = useState(true);

    const [itemCount, setItemCount] = useState(0);

    const cart = useSelector(state => state.cart.cart);

    const dispatch = useDispatch();


    useEffect(() => {

        const productInCart = cart.find(item => item._id.$oid === product._id.$oid);

        // console.log("p: ", productInCart);
        if (productInCart) {
            setItemCount(productInCart.quantity)
        }


    }, [cart]);


    const handleImageLoad = e => {
        setIsImageLoading(false);
    }

    const handleItemCount = (product, e) => {

        if (!itemCount || itemCount === 0) {
            setItemCount(itemCount + 1);
            dispatch(addToCart({
                product, quantity: 1
            }))

            return;
        }
        // console.log(e.target.value, productId);

        setItemCount(e?.target?.value);
    }

    const handleIncCartItem = (product, e) => {
        setItemCount(itemCount + 1)
        dispatch(incCartItem({
            product
        }))
    }

    const handleDecCartItem = (product, e) => {
        setItemCount(itemCount - 1)
        dispatch(decCartItem({ product }))
    }

    const handleAddQuantity = (product, e) => {
        setItemCount(e.target.value);

        dispatch(addQuantity({
            product, quantity: e.target.value
        }))


    }


    return (
        <AnimatePresence>
        <div
            key={product._id.$oid}
            className='drop-shadow-xl rounded-2xl bg-white md:hover:-translate-y-2 md:hover:scale-105 md:hover:shadow-2xl transition-all duration-300 relative'
           

        >

            <div className='w-[280px] h-[280px] p-4 mx-auto '>
                <img
                    src={isImageLoading ? 'loading.gif' : product.productImage[0]} alt={product.productName}
                    onLoad={handleImageLoad}
                    className='w-full h-full scale-90 object-scale-down'
                />

                <div
                    className={`rounded-full absolute top-5 right-5 p-1 ${!product.favorite ? 'bg-blue-500' : 'bg-white'}`}
                    onClick={() => dispatch(setFavoritesProduct({ productId: product._id.$oid }))}
                >
                    <FaHeart size={25} className={`rounded-full cursor-pointer transition-all duration-500 ${product.favorite ? 'text-red-500' : 'text-white'}`} />
                </div>

                <div
                    className='absolute right-5 '

                >

                    {!itemCount ? (
                        <div className='text-blue-500 cursor-pointer'>
                            <FaPlus size={25} onClick={() => handleItemCount(product)} />
                        </div>
                    ) : (
                            <motion.div
                                className='flex gap-2 bg-blue-500 text-white text-center items-center rounded-xl p-1'
                                initial={{
                                    scale: 0
                                }}
                                animate={{
                                    scale: 1
                                }}
                                exit={{
                                    scale: 0
                                   
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: 'linear',
                                   
                                }}
                            >

                                <FaMinus size={25} className='cursor-pointer' onClick={() => handleDecCartItem(product)} />

                                <select name="cart"
                                    id="cart"
                                    className='w-10 bg-blue-500 text-center cursor-pointer'
                                    value={itemCount}
                                    onChange={(e) => handleAddQuantity(product, e)}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>

                                </select>

                                <FaPlus size={25} className='cursor-pointer' onClick={() => handleIncCartItem(product)} />

                            </motion.div>
                    )}


                </div>


            </div>

            <div className='p-4'>
                <div className=''>
                    <h3 className='text-xl font-semibold my-2 line-clamp-2'>{product.productName}</h3>
                    <p className='font-bold text-lg my-1'>$ {product.price}</p>
                </div>
                <p className='text-gray-600 line-clamp-3'>{product.description}</p>

            </div>

        </div>
        </AnimatePresence>
    )
}

export default ProductItem