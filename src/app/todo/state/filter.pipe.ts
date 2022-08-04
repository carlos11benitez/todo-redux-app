import { Pipe, PipeTransform } from '@angular/core';
import { TodoInterface } from '../models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: TodoInterface[], filtro: string): TodoInterface[] {
    switch (filtro){
      case 'completados':
        return todos.filter(todo => todo.completado)
      case 'pendientes':
        return todos.filter(todo => !todo.completado)
      default:
        return todos
    }
  }

}
