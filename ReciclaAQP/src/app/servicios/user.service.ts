import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modelos/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  ngOnInit(){

  }
  url:string="http://127.0.0.1:8000/api/usuarios/"
  
  getlistUser(){
    return this.http.get<User>(this.url)
  }
}
