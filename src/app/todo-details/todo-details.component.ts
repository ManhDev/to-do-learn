import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { TodoHttpService } from './../todo.http.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
  todo: any = {};
  constructor(
    private todoservice: TodoHttpService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    // route: ActivatedRoute: mục đích lấy id trên thanh URL
  }

  ngOnInit(): void {
    this.route.params.subscribe((subscParams) => {
      // console.log('subscParams', subscParams);
      let id = subscParams.id;
      this.todoservice.getTodo(id).subscribe((res) => {
        this.todo = res;
        // console.log(this.todo);
      });
    });

    // this.route.queryParams.subscribe((queryParam) => {
    //   // console.log(queryParam);
    //   //query là sau dấu sau ? của param
    // });
    // let snapshotParam = this.route.snapshot.params;
    // console.log('snapshotParam', snapshotParam);
    // chính là id trên thanh URL muốn lấy
    // snapshot là đọc 1 lần duy nhất, subscribe: luôn theo dõi thanh địa chỉ để xem sự thay đổi và thay đổi theo cái thay đổi đó
  }
  goback(): void {
    // chuyển hướng dùng programmaticlly
    // this.router.navigateByUrl('/todos');
    // this.router.navigate(['/todos', 5]);
    this.location.back(); // dùng back để trở về route trước đó mình tiến đến
  }
}
