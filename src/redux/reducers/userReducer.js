import { USER_LOGIN, USER_OUT } from "../constants";


export const userReducer = (state = { userInfo: {}}, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                userInfo: action?.payload
            }
        case USER_OUT:
            return {
                userInfo: {}
            }
        default:
            return state;
    }
}