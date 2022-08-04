import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { TodoInterface } from '../models/todo.model';
import { borrarTodoAction, editarTodoAction, toogleTodoAction } from '../state/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @ViewChild('txtInputFisico') txtInputFisico!: ElementRef

  @Input() todo!: TodoInterface
  checkField!: FormControl
  txtInput!: FormControl

  editando: boolean = false

  constructor(private store: Store<AppState>) { 
  }

  ngOnInit(): void {
    this.checkField = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto, Validators.required)
    
    this.checkField.valueChanges.subscribe(valor => {
      this.store.dispatch(toogleTodoAction({id: this.todo.id}))
    })
  }

  editar(){
    this.editando = true
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select()
    }, 1);
  }

  terminarEdicion(){
    this.editando = false
    
    if(this.txtInput.invalid){
      return
    }

    if(this.txtInput.value === this.todo.texto){
      return
    }

    this.store.dispatch(editarTodoAction({id: this.todo.id, texto: this.txtInput.value}))
  }

  borrarTodo(){
    this.store.dispatch(borrarTodoAction({id: this.todo.id}))
  }

}
