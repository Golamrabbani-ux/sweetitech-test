import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_REMOVE_RESET } from "../constants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action?.payload;
            const exitItem = state?.cartItems?.find(x => x?.id === item?.id);

            if (exitItem) {
                return {
                    ...state,
                    cartItems: state?.cartItems?.map(x => x?.id === exitItem?.id ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state?.cartItems, item]
            }
        }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: action?.payload
            }
        case CART_REMOVE_RESET:
            return {}
        default:
            return state;
    }
}