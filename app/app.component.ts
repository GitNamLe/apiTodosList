import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';

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

  constructor(private apiService: ApiService){}

  onSave() {
    this.apiService.storeServers(this.todos)
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
  }
  
}


/*storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://ng-server-test.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('https://udemy-ng-http.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }*/