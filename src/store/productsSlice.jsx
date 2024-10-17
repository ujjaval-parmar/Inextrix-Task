import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../products"



const initialState = {
    products: [...productsData]
}

const productsSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {

        setFavoritesProduct: (state, action)=>{
            // console.log(action.payload.productId);
           state.products =  state.products.map(product=>{
                      if(product._id.$oid === action.payload.productId){
                        return { ...product, favorite: !product.favorite}
                      }
              
                      return product
                    })
            
        }

    }


});

export const { setFavoritesProduct } = productsSlice.actions;

export default productsSlice.reducer;