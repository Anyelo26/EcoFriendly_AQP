import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserCreateComponent } from '../user-create/user-create.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { UserViewComponent } from '../user-view/user-view.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,AfterViewInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    public dialog: MatDialog,
  ) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  gotoUserCreate(){
    const dialogRef = this.dialog.open(UserCreateComponent, {
      width:'61%'
    });
  }

  gotoUserEdit(){
    const dialogRef = this.dialog.open(UserEditComponent, {
      width:'61%'
    });
  }

  gotoUserDelete(){
    const dialogRef = this.dialog.open(UserDeleteComponent, {
      width:'30%'
    });
  }

  gotoUserView(){
    const dialogRef = this.dialog.open(UserViewComponent, {
      width:'61%'
    });
  }

}
