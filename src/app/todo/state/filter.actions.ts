import { createAction, props } from "@ngrx/store";

export type filtrosValidos = 'todos' | 'completados' | 'pendientes'

export const setFiltroAction = createAction(
  '[FILTER] Set filtro',
  props<{filtro: filtrosValidos}>()
)

export const getFiltroActual = createAction(
  '[FILTER] Get filtro'
)