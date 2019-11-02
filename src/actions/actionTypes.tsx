import { Action } from "redux";

export interface TextAction<T> extends Action<T> {
    val: string
}

export interface DualTextAction<T> extends TextAction<T> {
    name: string
}