import { Component,Inject ,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { CollectionCenter } from 'src/app/modelos/CollectionCenter';
import { CollectionService } from 'src/app/servicios/collection.service';

@Component({
  selector: 'app-collection-center-delete',
  templateUrl: './center-delete.component.html',
  styleUrls: ['./center-delete.component.css']
})
export class CollectionCenterDeleteComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    public dialogRef: MatDialogRef<CollectionCenterDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private collectionService:CollectionService,
    private toastr:ToastrService
    
  ) { }

  ngOnInit(): void {
    
  }
  gotoCollectionCenterDelete(){
    console.log(this.data.id);
    this.collectionService.deleteCollectionCenter({id:this.data.id}).subscribe(
      (response)=>{
        console.log(response)
        this.toastr.error('Se eliminó un centro de acopio','Centro de acopio eliminado');
        this.dialogRef.close();
        
      }
    )
  }

  public Cancelar(){
    this.dialogRef.close();
  }
}
