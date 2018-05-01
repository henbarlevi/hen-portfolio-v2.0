import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { iMessage } from './message.model';
import { HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  speedSpin: boolean = false;
  sendingEmail: boolean = false;
  sendingEmailFailed: boolean | null = null;
  message: iMessage | any = {};
  constructor(private portfolioService: PortfolioService, private renderer: Renderer2) { }
  /**Download Cv */
  /**OPTION 1 with (click) event */
  downloadMyCv() {
    console.log('downloading cv');
    this.portfolioService.downloadCv();
  }
  /**OPTION 2 with href link */
   cvLink :string = `${environment.api}/cv`;

  /**END EMAIL */
  onSubmit(form) {
    this.sendingEmailFailed = null;
    this.sendingEmail = true;
    this.portfolioService.sendEmail(this.message)
      .then(res => {
        this.sendingEmailFailed = false;
        console.log('success');
      })
      .catch(e => {
        this.sendingEmailFailed = true;
        console.log('failed ' + JSON.stringify(e));
      })
      .then(() => this.sendingEmail = false);
  }

  changeSpinSpeed(){
    this.speedSpin = true;
    setTimeout(() => {
    this.speedSpin = false;
      
    }, 2000);
  }
}
