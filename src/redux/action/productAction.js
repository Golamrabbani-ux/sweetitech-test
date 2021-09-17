import { PRODUCT_ADD, PRODUCT_DELETE, PRODUCT_UPDATE, SOLD_PRODUCT_ADD, TOP_PROFITABLE_PRODUCT } from "../constants"

export const addProduct = (payload) => {
    return async (dispatch) => {
        dispatch({
            type: PRODUCT_ADD,
            payload
        })
    }
}

export const editProduct = (payload) => {
    return async (dispatch, getState) => {
        const { products } = getState()?.productList;
        const allProducts = products.map(product => {
            if(product.id === payload.id){
                product = {
                    ...payload,  
                    profitPercentage: (Number(product.price) * 5 / 100),
                    image: 'https://motherboarddb.com/media/images/Gigabyte/GA-A320M-S2H/GA-A320M-S2H-1.png'
                }
            }
            return product
        });

        dispatch({
            type: PRODUCT_UPDATE,
            payload: allProducts
        })
        localStorage.setItem('products', JSON.stringify(allProducts));
    }
}

export const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        const { products } = getState()?.productList;
        const allProducts = products?.filter(product => product?.id !== id);
        
        dispatch({
            type: PRODUCT_DELETE,
            payload:allProducts
        })
        localStorage.setItem('products', JSON.stringify(allProducts));
    }
}

export const topProfitableProducts = () => {
    return async (dispatch, getState) => {
        const { products } = getState()?.productList;
        const sortPorduct = products?.sort((a, b) =>b.profitPercentage - a.profitPercentage);
        const topFiveProduct = sortPorduct?.slice(0, 5);
       
        dispatch({
            type: TOP_PROFITABLE_PRODUCT,
            payload: topFiveProduct
        })
    }
}

export const soldProduct = (cartItems) => {
    return async (dispatch) => {
        dispatch({
            type: SOLD_PRODUCT_ADD,
            payload: cartItems
        })
        localStorage.setItem('soldProducts', JSON.stringify(cartItems));
    }
}