import { ActionReducerMap } from "@ngrx/store";
import { filtrosValidos } from "./todo/state/filter.actions";
import { filtroReducer } from "./todo/state/filter.reducer";
import { TodoInterface } from "./todo/models/todo.model";
import { todosReducer } from "./todo/state/todo.reducer";

export interface AppState {
  todos: TodoInterface[],
  filtro: string
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  todos: todosReducer,
  filtro: filtroReducer
}