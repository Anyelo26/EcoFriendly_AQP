import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Information } from '../modelos/Information';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http:HttpClient) { }

  ngOnInit(){

  }

  url:string="http://127.0.0.1:8000/api/fichas/"

  getListInformation(){
    return this.http.get<Information>(this.url)
  }
}
