import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decCartItem, deleteProductFromCart, incCartItem } from '../store/cartSlice';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const CartPage = () => {

    const { cart, totalPrice, totalItems } = useSelector(state => state.cart);

    const dispatch = useDispatch();


    const [itemCount, setItemCount] = useState(0);


    console.log(cart, totalPrice, totalItems);


    const handleIncCartItem = (product, e) => {
        setItemCount(itemCount + 1);

        dispatch(incCartItem({
            product
        }))
    }

    const handleDecCartItem = (product, e) => {
        setItemCount(itemCount - 1);

        dispatch(decCartItem({ product }))
    }

    const handleAddQuantity = (product, e) => {
        dispatch(addQuantity({
            product, quantity: e.target.value
        }))
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
    
    
      }, []);



    return (
        <section className='container mx-auto px-2 pt-8 mt-28 min-h-[calc(100vh-112px)]'>

            {!cart || cart.length <= 0 && <h3 className='my-10 font-bold text-center text-xl'>Cart is Empty!</h3>}

            {cart && cart.length > 0 && <div className='flex flex-col md:flex-row justify-between my-4 gap-10 md:gap-6 '>


                <div className=' flex flex-col gap-10 md:gap-8 w-full max-w-full  md:max-w-[60%]'>

                    {cart.map(product => {
                        return (
                            <div
                                key={product._id.$oid}
                                className='flex items-center gap-4 bg-white drop-shadow-xl rounded-xl p-2 '
                            >

                                <div className='w-20 h-20'>
                                    <img src={product.productImage[0]} alt={product.productName} className='w-full h-full scale-90 object-scale-down' />
                                </div>

                                <div className='flex flex-col gap-1 w-full pr-4'>

                                    <h2 className='text-lg font-semibold'>{product.productName}</h2>

                                    <p className='text-sm text-gray-400 capitalize'>{product.category}</p>

                                    <div className='flex justify-between'>
                                        <p>${product.price}</p>
                                        <p className='font-bold text-lg'>${product.price * product.quantity}</p>
                                    </div>

                                    <div className='flex justify-between mt-2'>


                                        <div className='flex gap-3 bg-blue-500 text-white text-center items-center rounded-xl p-1 w-fit cursor-pointer'>

                                            <FaMinus size={18} className='' onClick={() => handleDecCartItem(product)} />

                                            <p>{product.quantity}</p>

                                            <FaPlus size={18} className='' onClick={() => handleIncCartItem(product)} />

                                        </div>

                                        <div>
                                            <MdDeleteForever size={30} className='text-red-500 cursor-pointer' 
                                            onClick={()=> dispatch(deleteProductFromCart({product}))}/>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                    })}






                </div>

                <div  className='min-w-[300px] w-full md:w-[400px] h-fit border-2 shadow-2xl'>

                    <h3 className='bg-blue-500 font-semibold uppercase  text-center py-2 text-xl'>Summery</h3>

                    <div>

                        <div className='flex justify-between items-center my-2 mx-2'>
                            <p className='text-gray-500 font-semibold'>Total Items</p>
                            <p className='font-bold text-lg'>{totalItems}</p>
                        </div>

                        <div className='flex justify-between items-center my-2 mx-2'>
                            <p className='text-gray-500 font-semibold'>Total Price</p>
                            <p className='font-bold text-lg'>${totalPrice}</p>
                        </div>

                    </div>

                    <button className='bg-red-400 w-full py-2 font-semibold uppercase text-xl'>Checkout</button>





                </div>






            </div>}




        </section >
    )
}

export default CartPage