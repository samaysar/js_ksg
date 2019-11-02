import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from 'connected-react-router';
import rootReducerCreator from "./rootReducer";

const configureStore = (initState, history) => {
    const store = createStore(rootReducerCreator(history),
    initState,
    compose(applyMiddleware(routerMiddleware(history))));

    return store;
};

export default configureStore;