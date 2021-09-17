import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartReducer } from './reducers/cartReducer';
import { userReducer } from './reducers/userReducer';
import { productListReducer, soldProductListReducer } from './reducers/productReducer';
import { myOrderReducer } from './reducers/myOrderReducer';
import products from '../fakeData/products';

const reducer = combineReducers({
    cart:cartReducer,
    userLogin: userReducer,
    productList:productListReducer,
    soldProductList:soldProductListReducer,
    myOrder:myOrderReducer
});

const cartItemsFromStorages = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const productsFromStorages = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : products;
const soldProductsFromStorages = localStorage.getItem('soldProducts') ? JSON.parse(localStorage.getItem('soldProducts')) : [];
const orderFromStorages = localStorage.getItem('myOrder') ? JSON.parse(localStorage.getItem('myOrder')) : [];
const userInfoFromStorages = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};




const initialState = {
    cart: {
        cartItems: cartItemsFromStorages,
    },
    userLogin:{
        userInfo:userInfoFromStorages
    },
    productList: {
        products:productsFromStorages
    },
    soldProductList:{
        products:soldProductsFromStorages
    },
    myOrder:{
        orders:orderFromStorages
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;