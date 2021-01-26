import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Todo App';
  count: number = 5;
  todoContent = '';
  todos: any[] = [
    {
      id: 1,
      complete: false,
      name:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      description:
        'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto ',
    },
    {
      id: 2,
      complete: false,
      name: 'qui est esse',
      description:
        'est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla ',
    },
    {
      id: 3,
      complete: false,
      name: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      description:
        'et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut ',
    },
    {
      id: 4,
      complete: false,
      name: 'eum et est occaecati',
      description:
        'ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit ',
    },
    {
      id: 5,
      complete: false,
      name: 'nesciunt quas odio',
      description:
        'repudiandae veniam quaerat sunt sedalias aut fugiat sit autem sed estvoluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque ',
    },
  ];

  addNewTodo(): void {
    if (this.todoContent === '') return;
    this.todos.push({
      name: this.todoContent,
      description: 'this.description',
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
  onChange() {
    this.addNewTodo();
  }

  handleTodoComplete(todo) {
    // lấy todo của template html vào trong hàm, gọi chính cái li được click
    this.todos = this.todos.map((item) => {
      if (item.id == todo.id) {
        // false thành true và ngược lại khi click
        item.complete = !item.complete;
      }
      return item;
    });
  }

  handleDelete($event, todo) {
    $event.stopPropagation();
    this.todos = this.todos.filter((item) => {
      return item.id != todo.id;
    });
  }
}
