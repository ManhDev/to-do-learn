import { Component, OnInit } from '@angular/core';
import TodoService from './todo.services';
import { TodoHttpService } from './todo.http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
