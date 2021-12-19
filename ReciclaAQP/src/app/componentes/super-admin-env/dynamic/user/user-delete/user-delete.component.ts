import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/modelos/User';
import { UserService } from 'src/app/servicios/user.service';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private toastr:ToastrService,

  ) { }

  ngOnInit(): void {
  }

  public Cancelar(){
    this.dialogRef.close();
  }
  public gotoUserDelete(){
    this.userService.deleteUser({id:this.data.id}).subscribe(
      (response)=>{
        this.toastr.error('Se eliminó el usuario','Usuario eliminado');
        this.dialogRef.close();
        
      }
    )
  }
}
