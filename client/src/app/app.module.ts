import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PortfolioService } from './portfolio.service';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  //components
  declarations: [
    AppComponent
  ],
  //modules
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  //services
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
