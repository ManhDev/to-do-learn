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
import { NotfoundComponent } from './notfound/notfound.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './admin-guard';

@NgModule({
  declarations: [
    AppComponent,
    SumaryPipe,
    ButtonComponent,
    InputFormatDirective,
    NavbarComponent,
    TodosComponent,
    SettingComponent,
    NotfoundComponent,
    TodoDetailsComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    // pipe/ component / directive sẽ được khai báo tại đây.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/todos',
        pathMatch: 'full',
        // pathMatch là phải để path chỉ là string trắng
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'todos',
        component: TodosComponent,
        canActivate: [AuthGuard],
        // check để bảo vệ đường dẫn có thể có nhiều loại auth guard
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminGuard],
        // check để bảo vệ đường dẫn có thể có nhiều loại auth guard
      },
      {
        // xem details theo id
        path: 'todos/:id',
        component: TodoDetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'settings',
        component: SettingComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        // ** path sai bất kì (**: wild-card) phải để TH cuối cùng
        path: '**',
        component: NotfoundComponent,
      },
    ]),
  ],
  providers: [TodoHttpService, TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
