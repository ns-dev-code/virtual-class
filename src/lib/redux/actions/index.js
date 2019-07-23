import { USER_LOGIN, USER_LOGOUT } from './type';

const login = data =>({type: USER_LOGIN,payload: {... data}})
const logout = data => ({type: USER_LOGOUT,payload: {... data}})

export {login, logout}