import { Injectable } from '@angular/core';
import { Login } from '../modelos/Login';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://127.0.0.1:8000/api/usuarios/login/";

  constructor(private http:HttpClient) { }

  authLogin(form:any):Observable<any>{
    
    return this.http.post<any>(this.url,form);
  }
}
