import fakeProducts from "../../fakeData/products";
import { PRODUCT_ADD, PRODUCT_DELETE, PRODUCT_RESET, PRODUCT_UPDATE, SOLD_PRODUCT_ADD, TOP_PROFITABLE_PRODUCT } from "../constants";


export const productListReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            const allProducts = [...fakeProducts, action?.payload];

            const allProductsProfitAdd = allProducts?.map(product => {
                return {...product, profitPercentage: (Number(product.price) * 5 / 100)}
            });

            localStorage.setItem('products', JSON.stringify(allProductsProfitAdd));

            return {
                success: true,
                products: allProductsProfitAdd
            }
        case PRODUCT_UPDATE:
            return {
                success: true,
                products: action.payload
            }
        case PRODUCT_DELETE:
            return {
                products: action.payload
            }
        case PRODUCT_RESET:
            return {
                success: false,
                products: state?.products
            }
        case TOP_PROFITABLE_PRODUCT:
            return {
                profitProducts:action?.payload,
                products: state?.products
            }
        default:
            return state;
    }
}

export const soldProductListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case SOLD_PRODUCT_ADD:
            return {
                products: action.payload
            }
        default:
            return state;
    }
}