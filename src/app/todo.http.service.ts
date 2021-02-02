import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // nếu có thì k cần providers bên app.module.ts
})
export class TodoHttpService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getTodo(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}
