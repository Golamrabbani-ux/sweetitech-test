import { MY_ORDER_ADD } from "../constants";


export const myOrderReducer = (state = { orders: { } }, action) => {
    switch (action.type) {
        case MY_ORDER_ADD:
            return {
                orders: action?.payload
            }
        default:
            return state;
    }
}