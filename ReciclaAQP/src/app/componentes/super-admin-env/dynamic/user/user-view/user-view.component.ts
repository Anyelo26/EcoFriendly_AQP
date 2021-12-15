import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  datosUser:any=[];
  constructor(
    public dialogRef: MatDialogRef<UserViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private centerService:UserService
  ) { }

  ngOnInit(): void {
    this.centerService.viewUser({id:this.data.id}).subscribe(
      (response :any)=>{
      console.log(response)
      return this.datosUser=response;

      }
    )
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
