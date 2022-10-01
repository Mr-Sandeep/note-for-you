import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted: Boolean = false;
  constructor(private formBuilder: FormBuilder, private serv: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
    });
  }

  register(){
    this.submitted = true;
    this.registerForm.value.password = btoa(this.registerForm.value.password);
    //learn our own encrytion tech
    this.serv.showSpinner();
    this.serv.registration(this.registerForm.value).subscribe((result:any)=>{
      if(result.status=='SUCCESS'){
        this.serv.hideSpinner();
        alert("Registered Successfully");
        this.router.navigate(['/login']);
      }else{
        this.serv.hideSpinner();
        alert(result.msg);
      }
    });
  }
}
