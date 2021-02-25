import { RouterModule } from '@angular/router';
import { Lazytab2Component } from './lazy-loadding/lazytab2/lazytab2.component';
import { Lazytab1Component } from './lazy-loadding/lazytab1/lazytab1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoaddingComponent } from './lazy-loadding/lazy-loadding.component';




@NgModule({
  declarations: [LazyLoaddingComponent,Lazytab1Component,Lazytab2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{
        path: '',
        component: LazyLoaddingComponent,
        children:[
          {
            path:'',
            redirectTo:'lazytab1',
            pathMatch:'full'
          },{
          path:'lazytab1',
          component:Lazytab1Component
        },
        {
          path:'lazytab2',
          component:Lazytab2Component
        }]
    }])
  ]
})
export class LazyloadModule { }
