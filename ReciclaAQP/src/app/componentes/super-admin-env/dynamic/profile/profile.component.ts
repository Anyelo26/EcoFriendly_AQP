import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/servicios/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/modelos/User';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public datosUser: User ={id:0,nombre:'',apellido:'',rol:'',email:'',estado:'',password:''};
  constructor(
    public userService: UserService,
    public router: Router,
  ) { }

  ngOnInit() {
    //console.log(localStorage.getItem('id'))
    let id=this.userService.getMeIdOfLocalStorage();
    this.userService.viewUser({"id":id}).subscribe(
      (response)=>{
        this.datosUser=response;
      }
    )
    
    
}

}
