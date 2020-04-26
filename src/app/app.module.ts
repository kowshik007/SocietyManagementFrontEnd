import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
