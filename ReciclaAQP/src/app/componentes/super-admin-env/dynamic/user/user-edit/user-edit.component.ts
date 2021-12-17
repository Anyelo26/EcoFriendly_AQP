import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserEditComponent>
  ) { }

  ngOnInit(): void {
  }

  public Cancelar(){
    this.dialogRef.close();
  }

}
