import { USER_LOGIN, USER_LOGOUT } from './type';

const login = data =>{
    window.localStorage.setItem("user",JSON.stringify(data))
    return {type: USER_LOGIN,payload: {... data}}
}
const logout = data =>{
    window.localStorage.removeItem("user")
    return {type: USER_LOGOUT,payload: {... data}}
}

export {login, logout}