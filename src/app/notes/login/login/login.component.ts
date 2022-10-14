import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private serv: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    });
  }

  submitCred(){
    this.submitted = true
    this.loginForm.value.password = btoa(this.loginForm.value.password);
    this.serv.showSpinner();
    this.serv.loggedIn(this.loginForm.value).subscribe((result:any)=>{
      if(result.status=='SUCCESS'){
        this.serv.hideSpinner();
        this.serv.loggedUser.check = true;
        this.serv.loggedUser.token = result.auth;
        sessionStorage.setItem('x-auth-token-note', result.auth);
        alert("Logged in successfully.");
        this.router.navigate(['/home']);
      }else{
        this.serv.loggedUser.check = false;
        this.serv.hideSpinner();
        alert(result.msg);
      }
    });
  }
}
