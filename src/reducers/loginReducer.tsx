import { Action } from "redux";
import { TextAction } from "../actions/actionTypes";

export interface LoginState {
    username: string,
    password: string,
    failTxt: string
}

export const initState: LoginState = {
    username: '',
    password: '',
    failTxt: ''
}

export const setUsername = (state: LoginState, action: TextAction<string>): LoginState => {
    return { ...state, username: action.val };
}

export const setPassword = (state: LoginState, action: TextAction<string>): LoginState => {
    return { ...state, password: action.val };
}

export const resetCredentials = (state: LoginState, __: Action<string>): LoginState => {
    return { ...state, username: '', password: '' };
}

export const setLoginSuccess = (state: LoginState, __: Action<string>): LoginState => {
    return { ...state, username: '', password: '', failTxt: '' };
}

export const setLoginFail = (state: LoginState, __: Action<string>): LoginState => {
    return { ...state, failTxt: 'Username/password incorrect', password: '' };
}

export const setLogout = (state: LoginState, __: Action<string>): LoginState => {
    return { ...state, username: '', password: '' };
}