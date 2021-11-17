import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { InformationCreateComponent } from '../information-create/information-create.component';
import { InformationViewComponent } from '../information-view/information-view.component';
import { InformationEditComponent } from '../information-edit/information-edit.component';
import { InformationDeleteComponent } from '../information-delete/information-delete.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Information } from 'src/app/modelos/Information';
import { InformationService } from 'src/app/servicios/information.service';

import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.css']
})
export class InformationListComponent implements OnInit,AfterViewInit {

  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort)sort!: MatSort

  constructor(
    private informationService:InformationService,
    private router: Router, 
    private route: ActivatedRoute, 
    public dialog: MatDialog,
  ) { }

  public headers:string[] = ["fecha","titulo","tipo","descripción","acciones"]
  public information:Information[] = []
  public dataSource= new MatTableDataSource(this.information)

  ngOnInit(): void {
    this.goToInformationList()
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

  gotoInformationCreate(){
    const dialogRef = this.dialog.open(InformationCreateComponent,{
      width:'61%'
    })
  }

  gotoInformationEdit(){
    const dialogRef = this.dialog.open(InformationEditComponent,{
      width:'61%'
    })
  }

  gotoInformationDelete(){
    const dialogRef = this.dialog.open(InformationDeleteComponent,{
      width:'30%'
    })
  }

  gotoInformationView(){
    const dialogRef = this.dialog.open(InformationViewComponent,{
      width:'61%'
    })
  }

  goToInformationList(){
    this.informationService.getListInformation().subscribe(
      (response)=>{
        this.information=(response as any).data;
        this.dataSource=new MatTableDataSource(this.information)
        //return console.log(this.information)
        this.ngAfterViewInit()
      },
      (error)=>{
        console.log("error"+error)
      }

    )

  }

}
