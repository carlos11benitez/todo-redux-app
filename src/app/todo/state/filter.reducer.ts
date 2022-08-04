import { createReducer, on } from "@ngrx/store";
import { filtrosValidos, setFiltroAction} from './filter.actions'

export const initialState: string = 'todos'

export const filtroReducer = createReducer(
  initialState,

  on(setFiltroAction, (state, action) => {
    return action.filtro
  })

)