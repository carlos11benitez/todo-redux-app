import { createReducer, on } from "@ngrx/store";
import { TodoClass, TodoInterface } from "../models/todo.model";
import { agregarTodoAction, borrarTodoAction, editarTodoAction, toogleTodoAction, toggleAllTodoAction, borrarTodosCompletadosAction } from "./todo.actions";

const todo1 = new TodoClass('Vencer a Thanos')
const todo2 = new TodoClass('Salvar el mundo')
const todo3 = new TodoClass('Pedir prestado el traje de Ironman')

todo3.completado = true

export const initialState: TodoInterface[] = [todo1, todo2, todo3]

export const todosReducer = createReducer(
  initialState,

  on(agregarTodoAction, (state, action) => {
    const todo = new TodoClass(action.texto)
    return [ ...state, todo ]
  }),

  on(toogleTodoAction, (state, action) => {
    return state.map(todoEdit => {
      if(todoEdit.id === action.id){
        return {
          ...todoEdit, 
          completado: !todoEdit.completado 
        }
      }else{
        return todoEdit
      }
    })
  }),

  on(toggleAllTodoAction, (state, action) => {
    return state.map(todoEdit => {
      return {
        ...todoEdit,
        completado: action.completado
      }
    })
  }),

  on(editarTodoAction, (state, action) => {
    return state.map(todoEdit => {
      if(todoEdit.id === action.id){
        return {
          ...todoEdit,
          texto: action.texto
        }
      }else{
        return todoEdit
      }
    })
  }),

  on(borrarTodoAction, (state, action) => {
    return state.filter(todo => todo.id != action.id)
  }),

  on(borrarTodosCompletadosAction, (state) => {
    return state.filter(todo => !todo.completado)
  })


)