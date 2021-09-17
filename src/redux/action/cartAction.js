import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants";

export const addToCart = (data, qty) => {
    return async (dispatch, getState) => {
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                id: data?.id,
                name: data?.name,
                image: data?.image,
                type:data?.type,
                price: data?.price,
                profitPercentage:data?.profitPercentage,
                qty: qty
            }
        })
        localStorage.setItem('cartItems', JSON.stringify(getState()?.cart?.cartItems))
    }
}

export const removeFromCart = (id) => {
    return async (dispatch, getState) => {
        const { cartItems } = getState().cart;
        const newCartItems = cartItems?.filter(item => item?.id !== id);
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: newCartItems
        })
        localStorage.setItem('cartItems', JSON.stringify(getState()?.cart?.cartItems))
    }
}