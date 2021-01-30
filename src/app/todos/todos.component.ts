import { Component, OnInit } from '@angular/core';
import TodoService from './../todo.services';
import { TodoHttpService } from './../todo.http.service';

interface Todo {
  id: number;
  title: string;
  complete: boolean;
  body: string;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  title: string = 'Todo App';
  // tslint:disable-next-line: no-inferrable-types
  count: number = 0;
  todoContent = '';
  todos: any[] = [];

  constructor(private todoService: TodoHttpService) {
    // const todoService = new TodoService();
    // this.todos = this.todoService.getTodos(); không nên để constructor thực hiện hành động
    //  thêm implements OnInit và method của ngOnInit để chạy hành động của contructor
  }
  ngOnInit(): void {
    // cách 2
    // this.todos = this.todoService.getTodos()

    // dùng json
    this.todoService.getTodos().subscribe((data: any[]) => {
      this.todos = data.slice(0, 5);
      this.count = this.todos.length;
    });
  }

  addNewTodo(): void {
    // tslint:disable-next-line: curly
    if (this.todoContent === '') return;
    this.todos.push({
      title: this.todoContent,
      body: 'this.description',
      id: ++this.count,
      complete: false,
    });
    this.todoContent = '';
  }

  addTodohandler(data): void {
    console.log(data);

    // console.log(this.todoContent);
    // $event.stopPropagation(); // dừng các event ngoài khi click vào event hiện tại
    this.addNewTodo();
  }

  // tslint:disable-next-line: typedef
  todoContainerHandler() {
    // console.log("todo container");
  }

  // Cách 1:
  // onChange($event){
  // if($event.key == 'Enter'){
  // this.addNewTodo()
  // }
  // }

  // cách 2
  // tslint:disable-next-line: typedef
  onChange() {
    this.addNewTodo();
  }

  // tslint:disable-next-line: typedef
  handleTodoComplete($event, todo) {
    console.log($event);

    $event.stopPropagation();
    // lấy todo của template html vào trong hàm, gọi chính cái li được click
    this.todos = this.todos.map((item) => {
      // tslint:disable-next-line: triple-equals
      if (item.id === todo.id) {
        // false thành true và ngược lại khi click
        item.complete = !item.complete;
      }
      return item;
    });
  }

  // tslint:disable-next-line: typedef
  handleDelete($event, todo) {
    $event.stopPropagation();
    this.todos = this.todos.filter((item) => {
      // tslint:disable-next-line: triple-equals
      return item.id != todo.id;
    });
  }
}
