import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm=new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  }
  /*onLoginAdmin(form:Login){
    this.loginService.authLogin(form).subscribe(data =>{
      if(data.token!=null){
        localStorage.setItem('token',data.token);
        localStorage.setItem('usuario',data.usuario);
        this.router.navigate(['dashboard/courseList'])
      }
    });
  }
  onLoginPonente(form:Login){
      this.router.navigate(['ponentes/misCursos'])
   
  }
  onLoginDocente(form:Login){
      this.router.navigate(['docentes/CertificateTeacher'])
  
  }
  typeUser: string = '';
  flag:boolean=false;
  user: any = '';
  pass: any = '';

  selectChangeHandler (event: any) {
  
    this.typeUser = event.target.value;
    
  }
  clickEvent(){
   
    this.user=this.loginForm.get('username');
    this.pass=this.loginForm.get('password');
    if(this.user!="" && this.pass!=""){
      
      if (this.typeUser=="Administrador"){
        this.onLoginAdmin(this.loginForm.value);
        
      }
      if (this.typeUser=="Ponente" ){
        this.onLoginPonente(this.loginForm.value);
        
      }
      if (this.typeUser=="Docente"){
        this.onLoginDocente(this.loginForm.value);
       
      }
      if (this.typeUser=="Apoyo en la Organizacion"){
        this.onLoginDocente(this.loginForm.value);
        
      }
      if (this.typeUser=="Organizador"){
        this.onLoginDocente(this.loginForm.value);
   
      }
    }
  }*/
}
