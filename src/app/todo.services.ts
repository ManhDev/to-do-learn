import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  // nếu có thì k cần providers bên app.module.ts
})
export default class TodoService {
  constructor() {}
  // tslint:disable-next-line: typedef
  getTodos() {
    return [
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
  }
}
