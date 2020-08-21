import { combineReducers } from "redux";

import { todosReducer } from "./todos";
import { Todo } from "../actions";

export interface StoreState {
  todos: Todo[];
}

//Dummy reducer for Redux to work
export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
