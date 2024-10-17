import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalItems: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {

        addToCart: (state, action) => {

            state.cart.push({
                ...action.payload.product,
                quantity: 1
            });

            state.totalItems = state.totalItems + 1;
            state.totalPrice = state.totalPrice + action.payload.product.price;

        },

        incCartItem: (state, action) => {

            //   console.log("a:", state.cart);


            //   const findProduct = JSON.parse(JSON.stringify(state.cart)).find(product=> product._id.$oid === action.payload.product._id.$oid);
            const findProduct = state.cart.find(product => product._id.$oid === action.payload.product._id.$oid);


            findProduct.quantity++;
            state.totalPrice = state.totalPrice +   findProduct.price;
            state.totalItems++;

        },

        decCartItem: (state, action)=>{
            
            const findProduct = state.cart.find(product => product._id.$oid === action.payload.product._id.$oid);

            if(findProduct.quantity == 1){
                state.totalPrice -=  findProduct.price;
                state.totalItems--;
                state.cart = state.cart.filter(product=> product._id.$oid !== action.payload.product._id.$oid);
                return;
            }

            findProduct.quantity--;
            state.totalItems--;
            state.totalPrice = state.totalPrice - findProduct.price;

        },

        addQuantity: (state, action)=>{
            
            const findProduct = state.cart.find(product => product._id.$oid === action.payload.product._id.$oid);
            
            state.totalPrice = state.totalPrice - findProduct.price * findProduct.quantity;
            state.totalItems = state.totalItems - findProduct.quantity;

            state.cart = state.cart.filter(product=> product._id.$oid !== action.payload.product._id.$oid);

            state.cart.push({
                ...action.payload.product,
                quantity: +action.payload.quantity
            });

            state.totalItems = state.totalItems + +action.payload.quantity;
            state.totalPrice = state.totalPrice + action.payload.product.price * +action.payload.quantity;
            
        },

        deleteProductFromCart: (state, action)=>{
            const findProduct = state.cart.find(product => product._id.$oid === action.payload.product._id.$oid);
            
            state.totalPrice = state.totalPrice - findProduct.price * findProduct.quantity;
            state.totalItems = state.totalItems - findProduct.quantity;

            state.cart = state.cart.filter(product=> product._id.$oid !== action.payload.product._id.$oid);
        }

    }


});

export const { addToCart, incCartItem, decCartItem, addQuantity, deleteProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;