import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getlistUser2(){
    
    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ.eyJzdWIiOiIxMjM0NTZkYTdhc2Rhc2Q4OTAiLCJuYW1lIjoiSm9obiBzRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.1-5EX1LuTCORsBPu-Md6F7eOPCh63FXd5vkjyNWOguM'
    const headers = new HttpHeaders()
      .set('Authorization','Bearer '+token)
    
    return this.http.get<User>(this.url, {'headers': headers})
  }


}
