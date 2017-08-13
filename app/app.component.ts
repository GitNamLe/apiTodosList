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
  todos =[{
    username: "test",
    todo: "just do it",
    isDone: false,
    hasAttachment: false
  }];
  data: any = {};
  constructor(private apiService: ApiService){}

  onSave() {
    this.apiService.storeTodos(this.todos)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onAddTodo(todo: string){
    this.todos.push({
      username: "test",
      todo: todo,
      isDone: false,
      hasAttachment: false
    })
    console.log(this.todos);
  }

  onGetData(){
    return this.apiService.getSetupTodos()
      .map((res: Response) => res.json())
  }

  onGetSetupTodos(){
    this.onGetData()
      .subscribe((data) => {
        console.log(data);
        this.data = data;
      })
  }
}