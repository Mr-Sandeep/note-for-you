import { Component } from '@angular/core';
import { ServicesService } from './service/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDo';
  loginCheck = false;
  constructor(private serv: ServicesService){
    this.loginCheck = this.serv.loggedUser.check
  }

  ngDoCheck(){
    this.loginCheck = this.serv.loggedUser.check
  }

  logout(){
    console.log("logout");
    sessionStorage.setItem('x-auth-token-note', '');
    this.loginCheck = true;
    window.location.reload();
  }
}
