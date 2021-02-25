import { CanExitWithoutSaveGuard } from './can-exit-without-save.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

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
        children:[
          {
            path:'',
            redirectTo:'tab1',
            pathMatch:'full'
          },{
          path:'tab1',
          component:Tab1Component
        },
        {
          path:'tab2',
          component:Tab2Component
        }]
      },
      {
        path:'lazy',
        loadChildren: () => import('./lazyload/lazyload.module').then(m => m.LazyloadModule)
      },
      {
        path: 'can-deactivate',
        component: CanDeactiveComponent,
        canDeactivate:[CanExitWithoutSaveGuard]
      },
      {
        path:'aux-route',
        component:AuxiliaryRouteComponent,
        outlet:'outlet-name'
      },
      {
        // ** path sai bất kì (**: wild-card) phải để TH cuối cùng
        path: '**',
        component: NotfoundComponent,
      },
    ],{
      preloadingStrategy: PreloadAllModules
      //preload module
    }),
  ],
  providers: [TodoHttpService, TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
