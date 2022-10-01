import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  loggedUser = {
    token: '',
    check: false 
  };
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { 
   }

  getNotes() {
    return this.http.get<any>('http://localhost:3000/getNotes')
  }

  saveNotes(note: any) {
    return this.http.put<any>("http://localhost:3000/savedNotes", note)
  }

  registration(postData: any){
    return this.http.post<any>("http://localhost:3000/registerUser", postData);
  }
 
  loggedIn(postData:any){
    return this.http.post<any>("http://localhost:3000/login", postData);
  }
  showSpinner(): void {
    this.spinner.show();
  }

  hideSpinner(): void{
    this.spinner.hide();
  }

}
