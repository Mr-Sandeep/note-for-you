import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './service/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notesforyou';
  loginCheck = false;
  constructor(private serv: ServicesService, private router: Router){
    this.loginCheck = this.serv.loggedUser.check
  }

  ngDoCheck(){
    this.loginCheck = this.serv.loggedUser.check
  }

  logout(){
    console.log("logout");
    sessionStorage.setItem('x-auth-token-note', '');
    this.loginCheck = false;
    // window.location.reload();
    this.router.navigate(['/login']);
  }
}
