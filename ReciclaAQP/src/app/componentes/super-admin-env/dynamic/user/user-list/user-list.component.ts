import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserCreateComponent } from '../user-create/user-create.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { UserViewComponent } from '../user-view/user-view.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/modelos/User';
import { UserService } from 'src/app/servicios/user.service';

import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,AfterViewInit {


  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort)sort!: MatSort

  constructor(
    public userService:UserService,
    private router: Router, 
    private route: ActivatedRoute, 
    public dialog: MatDialog,
  ) { }


  public headers:string[]=["id","rol","nombre","apellido","email","estado","acciones"]
  public users:User[]=[]
  public dataSource= new MatTableDataSource(this.users)
  ngOnInit(): void {
    this.goToUserList()

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event:Event){
    const filterValue= (event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }

  gotoUserCreate(){
    const dialogRef = this.dialog.open(UserCreateComponent, {
      width:'61%'
    });
    dialogRef.afterClosed().subscribe(Response=>{
      this.goToUserList();
    });
  }

  gotoUserEdit(identifica: String){
    const dialogRef = this.dialog.open(UserEditComponent, {
      width:'61%',
      data:{id:identifica}
    });
    dialogRef.afterClosed().subscribe(Response=>{
      this.goToUserList();
    });
  }

  gotoUserDelete(identifica:String){
    const dialogRef = this.dialog.open(UserDeleteComponent, {
      width:'30%',
      data:{id:identifica}
    });
    dialogRef.afterClosed().subscribe(Response=>{
      this.goToUserList();
    });
  }

  gotoUserView(identifica:String){
    const dialogRef = this.dialog.open(UserViewComponent, {
      width:'61%',
      data:{id:identifica}
    });
    dialogRef.afterClosed().subscribe(Response=>{
      this.goToUserList();
   });
  }
  goToUserList(){
    this.userService.getlistUser2().subscribe(
      (response)=>{
        this.users=(response as any).data;
        this.dataSource=new MatTableDataSource(this.users)
        this.ngAfterViewInit()
      },
      (error)=>{
        console.log("error"+error)
      }

    )

  }

}
