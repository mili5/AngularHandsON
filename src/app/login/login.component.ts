import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm= new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  });

  constructor(private loginServices:LoginService,private router:Router) { }
  
  ngOnInit(): void {}

  async userLogin(user:any){
    console.log(user.value);
    await this.loginServices.createUser({email:user.value.email,loginTime:new Date()})
    .subscribe((data:any)=>{
      console.log(data);
      sessionStorage.setItem('email',user.value.email);
      this.router.navigate(['/dashboard']);
    });
  }

}
