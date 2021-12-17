import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reduceEachLeadingCommentRange } from 'typescript';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  public isCollapsed = true;
  
  ngOnInit(): void {
    this.isCollapsed = true;
  }

  gotoInicio(){
    this.router.navigate(['/SuperAdmin'])
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
  
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('rol');
    //location.reload();
    this.router.navigate(['/']);
    //location.reload();
  }
 // Reload(){
 //   location.reload()
 // }
}
