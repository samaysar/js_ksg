import { TextAction, DualTextAction } from "./actionTypes";
import { Action } from "redux";
import * as LoginAction from './actionNames';

export const setUsername = (value: string): TextAction<string> => {
    return {
        type: LoginAction.setUsername,
        val: value
    };
};

export const setPassword = (value: string): TextAction<string> => {
    return {
        type: LoginAction.setPassword,
        val: value
    };
};

export const resetCredentials = (): Action => {
    return {
        type: LoginAction.resetCredentials
    };
};

export const setLoginSuccess = (cookie_name: string, cookie_val: string): DualTextAction<string> => {
    return {
        type: LoginAction.setLoginSuccess,
        name: cookie_name,
        val: cookie_val
    };
};

export const setLoginFail = (): Action => {
    return {
        type: LoginAction.setLoginFail
    };
};

export const setLogout = (cookie_name: string): TextAction<string> => {
    return {
        type: LoginAction.setLoginSuccess,
        val: cookie_name
    };
};