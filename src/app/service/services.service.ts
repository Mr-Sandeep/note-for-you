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

  prod = "https://yournoteapplication.herokuapp.com";
  local = "http://localhost:3000";
  env = true;
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { 
   }

  getNotes() {
    if(this.env){
      return this.http.get<any>(this.prod+'/getNotes')
    }else{
      return this.http.get<any>(this.local+'/getNotes')
    }
    
  }

  saveNotes(note: any) {
    if(this.env){
      return this.http.put<any>(this.prod+'/savedNotes', note)
    }else{
      return this.http.put<any>(this.local+'/savedNotes', note)
    }
  }

  registration(postData: any){
    if(this.env){
      return this.http.post<any>(this.prod+'/registerUser', postData)
    }else{
      return this.http.post<any>(this.local+'/registerUser', postData)
    }
  }
 
  loggedIn(postData:any){
    if(this.env){
      return this.http.post<any>(this.prod+'/login', postData)
    }else{
      return this.http.post<any>(this.local+'/login', postData)
    }
  }

  deleteNote(data:any){
    if(this.env){
      return this.http.post<any>(this.prod+'/deleteNote', data)
    }else{
      return this.http.post<any>(this.local+'/deleteNote', data)
    }
  }
  saveEditNote(note:any){
    if(this.env){
      return this.http.post<any>(this.prod+'/editNote', note)
    }else{
      return this.http.post<any>(this.local+'/editNote', note)
    }
  }
  showSpinner(): void {
    this.spinner.show();
  }

  hideSpinner(): void{
    this.spinner.hide();
  }

}
