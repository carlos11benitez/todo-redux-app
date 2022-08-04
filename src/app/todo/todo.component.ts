import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { toggleAllTodoAction } from './state/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  toogle: boolean = false
 
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    
  }

  toggleAll(){
    this.toogle = !this.toogle
    this.store.dispatch(toggleAllTodoAction({completado: this.toogle}))
  }

}
