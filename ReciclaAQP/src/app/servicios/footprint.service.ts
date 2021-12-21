import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootprintService {

  //url:string="http://127.0.0.1:8000/api/usuarios/login/";
  url:string="https://tranquil-cliffs-10384.herokuapp.com/api/huella/ambito/";

  constructor(private http:HttpClient) { }

  getHuellaxAmbito(body:any):Observable<any>{
    return this.http.post<any>(this.url,body);
  }
  getHuellaxAmbitoPrediccion(body:any):Observable<any>{
    let url = "https://tranquil-cliffs-10384.herokuapp.com/api/huella/prediccion/";
    return this.http.post<any>(url,body);
  }
}
