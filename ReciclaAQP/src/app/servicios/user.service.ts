
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modelos/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string="http://127.0.0.1:8000/api/usuarios"
  //url del backend deployado
  //url:string="https://tranquil-cliffs-10384.herokuapp.com/api/usuarios"
  constructor(private http:HttpClient){

  }

  getMeToken(){
    var token= localStorage.getItem('token');  
    return token;
  }
  //lista de usuarios sin token
  getlistUser(){
    return this.http.get<User[]>(this.url)
  }
  //lista de usuarios con requerimiento del token (medida de seguridad)
  getlistUser2(){
    var token=this.getMeToken();
    const headers = new HttpHeaders().set('Authorization','Bearer '+token)
    return this.http.get<User[]>(this.url, {'headers': headers})
  }
  //ver usuario
  viewUser(data: any):Observable<User>{
    var token=this.getMeToken();
    const headers = new HttpHeaders().set('Authorization','Bearer '+token)
    let direccion= this.url+'/retrieve/';
    return this.http.post<User>(direccion,data, {'headers': headers})

  }
  //editar un usuario
  editUser(user:any):Observable<User>{
    var token=this.getMeToken();
    const headers = new HttpHeaders().set('Authorization','Bearer '+token);
    let direccion = this.url+'/update/';
    return this.http.post<User>(direccion,user,{'headers':headers});

  }
  //eliminar un usuario
  deleteUser(id:any):Observable<User>{
    var token=this.getMeToken();
    const headers = new HttpHeaders().set('Authorization','Bearer '+token)
    let direccion =this.url+'/delete/'
    return this.http.post<User>(direccion,id,{'headers':headers})

  }
  //crear un usuario
  createUser(User: User):Observable<User>{
    var token=this.getMeToken();
    const headers = new HttpHeaders().set('Authorization','Bearer '+token)
    let direccion= this.url+'/create/'
    return this.http.post<User>(direccion,User,{'headers': headers})
  }


}