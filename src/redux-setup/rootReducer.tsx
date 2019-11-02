import { History } from "history";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import createReducer from "../reducers/reducerCreator";
import * as ActionNames from '../actions/actionNames';
import * as LoginReducers from '../reducers/loginReducer';

const loginReducer = createReducer(new Map([
    [ActionNames.resetCredentials, LoginReducers.resetCredentials],
    [ActionNames.setUsername, LoginReducers.setUsername],
    [ActionNames.setPassword, LoginReducers.setPassword],
    [ActionNames.setLogout, LoginReducers.setLogout],
    [ActionNames.setLoginSuccess, LoginReducers.setLoginSuccess],
    [ActionNames.setLoginFail, LoginReducers.setLoginFail]
]), LoginReducers.initState);
const rootReducerCreator = (history: History) => combineReducers({
    router: connectRouter(history),
    login: loginReducer
});

export default rootReducerCreator;