import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ApiService } from './api.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  todos: {};
  data: any = {};
  todosAdded: string;
  constructor(private apiService: ApiService){}

  onSave() {
    this.apiService.storeTodos(this.todos)
      .subscribe(
        error => alert(error),
        () => console.log('finished')
      )
  }

  onAddTodo(todo: string){
    this.todos = {
      username: "test",
      todo: todo,
      isDone: false,
      hasAttachment: false
    }
    console.log(this.todos);
  }

  onGetTodos(){
    return this.apiService.getTodos()
      .subscribe(
        (data) => this.data = data
      )
  }
}