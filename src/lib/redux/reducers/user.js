import { USER_LOGIN, USER_LOGOUT } from '../actions/type'
import { loadState } from '../stores/localstorage';

const initialState = loadState();
const user = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        case USER_LOGIN:
            return {
                ...state,
                ... action.payload
            }
        case USER_LOGOUT:
            return{
                ... action.payload
            }
        default:
            return{...state}
    }
}

export {user}