
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
    console.log(token);
    
    return token;
  }
  getlistUser(){
    return this.http.get<User[]>(this.url)
  }

  getlistUser2(){
    
    var token=this.getMeToken();
    console.log(token)
    const headers = new HttpHeaders().set('Authorization','Bearer '+token)
    
    return this.http.get<User[]>(this.url, {'headers': headers})
  }
  viewUser(data: any):Observable<User>{
    var token=this.getMeToken();
    console.log(token)
    const headers = new HttpHeaders().set('Authorization','Bearer '+token)

    let direccion= this.url+'/retrieve/';

    return this.http.post<User>(direccion,data, {'headers': headers})

  }
  editUser(){
    var token=this.getMeToken();
    console.log(token)
    const headers = new HttpHeaders().set('Authorization','Bearer '+token)

  }
  deleteUser(){
    var token=this.getMeToken();
    console.log(token)
    const headers = new HttpHeaders().set('Authorization','Bearer '+token)

  }


}