import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { LoginService } from 'src/app/servicios/Login.service';
import { Login } from 'src/app/modelos/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm=new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  })

  loginError=false;
  constructor(private loginService:LoginService,private router:Router) { }


  ngOnInit(): void {
  }

  onLogin(form:Login){
    this.loginService.authLogin(form).subscribe
    (
      (response) =>{
        //console.log(response);
        localStorage.setItem('token',response.token);
        localStorage.setItem('id',response.id);
        localStorage.setItem('rol',response.rol);
        console.log(localStorage)
       // localStorage.setItem('docente',"SI");
       if(response.token!=null){
        this.router.navigate(['SuperAdmin/CollectionCenterList'])
       }
       else{
        this.loginError=true;
       }
      
    },
   );  
 
}


  user: any = '';
  pass: any = '';

  clickEvent(){
   
    this.user=this.loginForm.get('email');
    this.pass=this.loginForm.get('password');
    if(this.user!="" && this.pass!=""){
      this.onLogin(this.loginForm.value);
      //console.log(this.loginForm.value)
    }
  }
  LoginFailed(){
    return this.loginError;
  }
}
