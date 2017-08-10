import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ApiService {
    constructor(private http: Http){}

    storeServers(todos: any[]){
        return this.http.post("http://localhost:3000/api/todo", todos);
    }

}