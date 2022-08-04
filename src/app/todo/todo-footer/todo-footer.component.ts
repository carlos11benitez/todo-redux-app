import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos, setFiltroAction } from '../state/filter.actions';
import { TodoInterface } from '../models/todo.model';
import { borrarTodosCompletadosAction } from '../state/todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  pendientes: number = 0
  filtrosValidos: filtrosValidos[] = [ 'todos', 'completados', 'pendientes']
  filtroActual: string = ''

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro
      this.contarPendientes(state.todos)
    })
  }

  cambiarFiltro(filtro: filtrosValidos){
    this.store.dispatch(setFiltroAction({filtro: filtro}))
  }

  contarPendientes(todos: TodoInterface[]){
    this.pendientes = todos.filter(todo => todo.completado === false).length
  }

  borrarCompletados(){
    this.store.dispatch(borrarTodosCompletadosAction())
  }

}
