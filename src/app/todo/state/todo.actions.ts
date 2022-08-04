import { createAction, props } from "@ngrx/store";

export const agregarTodoAction = createAction(
  '[TODO] Agregar Todo',
  props<{texto: string}>()
)

export const toogleTodoAction = createAction(
  '[TODO] Toogle Todo',
  props<{id: number}>()
)

export const toggleAllTodoAction = createAction(
  '[TODO] Toggle all Todo',
  props<{completado: boolean}>()
)

export const editarTodoAction = createAction(
  '[TODO] Editar Todo',
  props<{id: number, texto: string}>()
)

export const borrarTodoAction = createAction(
  '[TODO] Borrar Todo',
  props<{id: number}>()
)

export const borrarTodosCompletadosAction = createAction(
  '[TODO] Borrar Completados'
)