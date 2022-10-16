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
    return this.http.get<any>('https://yournoteapplication.herokuapp.com/getNotes')
  }

  saveNotes(note: any) {
    return this.http.put<any>("https://yournoteapplication.herokuapp.com/savedNotes", note)
  }

  registration(postData: any){
    return this.http.post<any>("https://yournoteapplication.herokuapp.com/registerUser", postData);
  }
 
  loggedIn(postData:any){
    return this.http.post<any>("https://yournoteapplication.herokuapp.com/login", postData);
  }

  deleteNote(data:any){
    console.log("service delete-->", data);
    return this.http.post<any>("https://yournoteapplication.herokuapp.com/deleteNote", data);
  }
  saveEditNote(note:any){
    return this.http.post<any>('https://yournoteapplication.herokuapp.com/editNote', note);
  }
  showSpinner(): void {
    this.spinner.show();
  }

  hideSpinner(): void{
    this.spinner.hide();
  }

}
