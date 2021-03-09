import { AuthInterceptor } from './auth.interceptor';
import { CanExitWithoutSaveGuard } from './can-exit-without-save.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

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
import { Tab1Component } from './setting/tab1/tab1.component';
import { Tab2Component } from './setting/tab2/tab2.component';
import { AuxiliaryRouteComponent } from './auxiliary-route/auxiliary-route.component';
import { CanDeactiveComponent } from './can-deactive/can-deactive.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleComponent } from './material-example/material-example.component';

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
    Tab1Component,
    Tab2Component,
    AuxiliaryRouteComponent,
    CanDeactiveComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    HttpClientComponent,
    LoginFormComponent,
    MaterialExampleComponent,
    // pipe/ component / directive sẽ được khai báo tại đây.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,MatButtonModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/todos',
        pathMatch: 'full',
        // pathMatch là phải để path chỉ là string trắng
      },
      {
        path: 'todos',
        component: TodosComponent,
      },
      {
        // xem details theo id
        path: 'todos/:id',
        component: TodoDetailsComponent,
      },
      {
        path: 'settings',
        component: SettingComponent,
        children: [
          {
            path: '',
            redirectTo: 'tab1',
            pathMatch: 'full'
          }, {
            path: 'tab1',
            component: Tab1Component
          },
          {
            path: 'tab2',
            component: Tab2Component
          }]
      },
      {
        path: 'lazy',
        loadChildren: () => import('./lazyload/lazyload.module').then(m => m.LazyloadModule)
      },
      {
        path: 'can-deactivate',
        component: CanDeactiveComponent,
        canDeactivate: [CanExitWithoutSaveGuard]
      },
      {
        path: 'aux-route',
        component: AuxiliaryRouteComponent,
        outlet: 'outlet-name'
      },
      {
        path: 'templateform',
        component: TemplateDrivenFormComponent
      },
      {
        path: 'reactiveform',
        component: ReactiveFormComponent
      },
      {
        path: 'httpclient',
        component: HttpClientComponent
      },
      {
        path: 'loginform',
        component: LoginFormComponent
      },
      {
        path: 'material',
        component: MaterialExampleComponent
      },
      {
        // ** path sai bất kì (**: wild-card) phải để TH cuối cùng
        path: '**',
        component: NotfoundComponent,
      },
    ], {
      preloadingStrategy: PreloadAllModules
      //preload module
    }),
    BrowserAnimationsModule,
  ],
  providers: [TodoHttpService, TodoService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule { }
