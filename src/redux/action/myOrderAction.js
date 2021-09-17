import { CART_REMOVE_RESET, MY_ORDER_ADD } from "../constants";

export const myOrder = (orderInfo) => {
    return async (dispatch, getState) => {
        const { orders } = getState()?.myOrder;
        const allOrder = [...orders, orderInfo]

        dispatch({ 
            type: MY_ORDER_ADD,
            payload:allOrder
        })
        dispatch({type:CART_REMOVE_RESET})
        localStorage.removeItem("cartItems");
        localStorage.setItem('myOrder', JSON.stringify(allOrder));
    }
}