import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaryPipe } from './sumary.pipe';
import { ButtonComponent } from './components/button/button.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    SumaryPipe,
    ButtonComponent,
    InputFormatDirective,
    // pipe/ component / directive sẽ được khai báo tại đây.
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
