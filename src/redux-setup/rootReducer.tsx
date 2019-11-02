import { History } from "history";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const rootReducerCreator = (history: History) => combineReducers({
    router: connectRouter(history)
});

export default rootReducerCreator;