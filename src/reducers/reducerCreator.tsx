import { Action, Reducer } from "redux";

const createReducer = <T, S, W extends Action<T> = Action>(in_map: Map<T, (s: S, a: W) => S>,
    initState: S): Reducer<S, W> => {
    const reducers = new Map(in_map);
    return (s: S = initState, a: W) => {
        var reducer = reducers.get(a.type);
        return reducer ? reducer(s, a) : s;
    }
}

export default createReducer;