import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class ApiService {
    constructor(private http: Http){}

    storeTodos(todos: {}){
        return this.http.post("http://localhost:3000/api/todo", todos)
            .map(res => res.json());
    }

    getTodos(){
        return this.http.get('http://localhost:3000/api/todos/test')
            .map((res: Response) => res.json());
    }
}