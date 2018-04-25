import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { saveAs } from 'file-saver/FileSaver';
import { iMessage } from './message.model';

@Injectable()
export class PortfolioService {

  constructor(private httpClient: HttpClient) { }

  sendEmail(message: iMessage):Promise<HttpResponse<Object>> {
   return this.httpClient.post('api/email',message, {
      observe: 'response',//by default will extract the body only
    }).toPromise();
  }



  //@link http://amilspage.com/angular4-file-download/
  downloadCv() {
    this.httpClient.get('api/cv', {
      observe: 'response',
      responseType: 'blob'
    }).subscribe((res: HttpResponse<Blob>) => {
      const fileName = this.getFileNameFromResponseContentDisposition(res.headers);
      this.saveFile(res.body, fileName);
    })
  }
  /**
   * Saves a file by opening file-save-as dialog in the browser
   * using file-save library.
   * @param blobContent file content as a Blob
   * @param fileName name file should be saved as
   */
  saveFile(blobContent: Blob, fileName: string) {
    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
    saveAs(blob, fileName);
  };
  getFileNameFromResponseContentDisposition(headers) {
    const contentDisposition = headers.get('content-disposition') || '';
    const matches = /filename=([^;]+)/ig.exec(contentDisposition);
    const fileName = (matches[1] || 'untitled').trim();
    return fileName;
  }
}

