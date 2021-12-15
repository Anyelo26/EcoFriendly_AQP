import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { CollectionCenter } from 'src/app/modelos/CollectionCenter';
import { CollectionService } from 'src/app/servicios/collection.service';
import { CollectionCenterCreateComponent } from '../center-create/center-create.component';
import { CollectionCenterDeleteComponent } from '../center-delete/center-delete.component';
import { CollectionCenterEditComponent } from '../center-edit/center-edit.component';
import { CollectionCenterViewComponent } from '../center-view/collection-center-view.component';

import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-collection-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.css']
})
export class CollectionCenterListComponent implements OnInit,AfterViewInit {

  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort)sort!: MatSort
  
  constructor(
    private collectionService:CollectionService,
    private router: Router, 
    private route: ActivatedRoute, 
    public dialog: MatDialog,
  ) { }

  public headers:string[]=["id","categoria","nombre","telefono","direccion","horario","acciones"]
  public centrosAcopio:CollectionCenter[]=[]
  public dataSource= new MatTableDataSource(this.centrosAcopio)

  ngOnInit(): void {
    this.goToListCollectionCenter()
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

  gotoCollectionCenterCreate(){
    const dialogRef = this.dialog.open(CollectionCenterCreateComponent, {
      width:'61%',

    });
    dialogRef.afterClosed().subscribe(Response=>{
      this.goToListCollectionCenter();
    });

  }

  gotoCollectionCenterEdit(){
    const dialogRef = this.dialog.open(CollectionCenterEditComponent, {
      width:'61%'
    });
  }

  gotoCollectionCenterDelete(identifica:String){
    const dialogRef = this.dialog.open(CollectionCenterDeleteComponent, {
      width:'30%',
      
      data:{id:identifica},
    });
    dialogRef.afterClosed().subscribe(Response=>{
      this.goToListCollectionCenter();
    });
  }

  gotoCollectionCenterView(identifica: String){
    const dialogRef = this.dialog.open(CollectionCenterViewComponent, {
      width:'61%',
      data:{id:identifica},
    });
  }
  goToListCollectionCenter(){
    this.collectionService.getListCollectionCenter().subscribe(
      (response)=>{
        this.centrosAcopio=(response as any).data;
        this.dataSource=new MatTableDataSource(this.centrosAcopio)
        this.ngAfterViewInit()
      },
      (error)=>{
        console.log("error"+error)
      }

    )

  }

}
