import { USER_LOGIN, USER_OUT } from "../constants"

export const userLogin = (payload) => {
    return async (dispatch, getState) => {
        dispatch({
            type: USER_LOGIN,
            payload
        })
        localStorage.setItem('userInfo', JSON.stringify(getState()?.userLogin?.userInfo));
    }
}

export const userLogout = () => {
    return async (dispatch) => {
        dispatch({ type: USER_OUT })
        localStorage.removeItem('userInfo');
    }
}
