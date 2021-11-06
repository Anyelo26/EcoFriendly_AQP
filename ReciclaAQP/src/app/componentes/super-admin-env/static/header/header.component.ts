import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoInicio(){
    this.router.navigate(['/SuperAdmin/body'])
  }

  gotoUser(){
    this.router.navigate(['/SuperAdmin/UserList'])
  }

  gotoCentroAcopio(){
    this.router.navigate(['/SuperAdmin/CollectionCenterList'])
  }

  gotoPerfil(){
    this.router.navigate(['/SuperAdmin/Profile'])
  }

  gotoInformation(){
    this.router.navigate(['/SuperAdmin/InformationList'])
  }
}