import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SumaryPipe } from './sumary.pipe';
import { ButtonComponent } from './components/button/button.component';
import { InputFormatDirective } from './input-format.directive';
import TodoService from './todo.services';
import { TodoHttpService } from './todo.http.service';
import { NavbarComponent } from './navbar/navbar.component';
import { TodosComponent } from './todos/todos.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    SumaryPipe,
    ButtonComponent,
    InputFormatDirective,
    NavbarComponent,
    TodosComponent,
    SettingComponent,
    // pipe/ component / directive sẽ được khai báo tại đây.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'todos',
        component: TodosComponent,
      },
      {
        path: 'settings',
        component: SettingComponent,
      },
      {
        path: '',
        redirectTo: '/todos',
        pathMatch: 'full',
        // pathMatch là phải để path chỉ là string trắng
      },
    ]),
  ],
  providers: [TodoHttpService, TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
