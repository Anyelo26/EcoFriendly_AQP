import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CollectionCenter } from 'src/app/modelos/CollectionCenter';
import { CollectionService } from 'src/app/servicios/collection.service';

@Component({
  selector: 'app-collection-center-view',
  templateUrl: './collection-center-view.component.html',
  styleUrls: ['./collection-center-view.component.css']
})
export class CollectionCenterViewComponent implements OnInit {

  
  datosCentro:any=[];
  constructor(
    public dialogRef: MatDialogRef<CollectionCenterViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private centerService:CollectionService
  ) { }

  ngOnInit(): void {
    this.centerService.viewCollectionCenter({id:this.data.id}).subscribe(
      (response :any)=>{
      console.log(this.data.id)
      console.log(response)
      return this.datosCentro=response;

      }
    )
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
