import { Component } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { iMessage } from './message.model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  sendingEmail: boolean = false;
  sendingEmailFailed: boolean | null = null;
  message: iMessage | any = {};
  constructor(private portfolioService: PortfolioService) { }
  downloadMyCv() {
    console.log('downloading cv');
    this.portfolioService.downloadCv();
  }

  onSubmit() {
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
}
