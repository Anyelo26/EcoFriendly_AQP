import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Information } from 'src/app/modelos/Information';
import { ToastrService } from 'ngx-toastr';
import { InformationService } from 'src/app/servicios/information.service';

@Component({
  selector: 'app-information-delete',
  templateUrl: './information-delete.component.html',
  styleUrls: ['./information-delete.component.css']
})
export class InformationDeleteComponent implements OnInit {

  constructor(
    private modalService: NgbModal, 
    public dialogRef: MatDialogRef<InformationDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Information,
    private informationservice:InformationService,
    private toastr:ToastrService  
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  eliminarInformation(){
    console.log(this.data.id);
    this.informationservice.eliminarInformation({id:this.data.id}).subscribe(Response=>{
      console.log(Response);
      this.toastr.error('Se elimino una ficha informativa','Ficha Informativa Eliminada')
    })
    this.dialogRef.close();
  }

  public Cancelar(){
    this.dialogRef.close();
  }

}
