import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
    this.router.navigate(['/'])
  }

  gotoCentroAcopio(){
    this.router.navigate(['/CollectionCenter'])
  }

  gotoHuella(){
    this.router.navigate(['/Footprint'])
  }

  gotoInformation(){
    this.router.navigate(['/Information'])
  }

  gotoLogin(){
    this.router.navigate(['/Sesion/Login'])
  }
  
}
