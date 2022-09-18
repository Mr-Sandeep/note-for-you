import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { 
   }

  getNotes() {
    return this.http.get<any>('http://localhost:3000/getNotes')
  }

  saveNotes(note: any) {
    return this.http.post<any>("http://localhost:3000/savedNotes", note)
  }

 
  showSpinner(): void {
    this.spinner.show();
  }

  hideSpinner(): void{
    this.spinner.hide();
  }

}
