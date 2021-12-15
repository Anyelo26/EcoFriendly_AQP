import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Information } from 'src/app/modelos/Information';
import { InformationService } from 'src/app/servicios/information.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-information-view',
  templateUrl: './information-view.component.html',
  styleUrls: ['./information-view.component.css']
})
export class InformationViewComponent implements OnInit {

  datosFicha:any=[];

  constructor(
    private service:InformationService,  
    public dialogRef: MatDialogRef<InformationViewComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  

  ngOnInit(): void {
    this.service.viewInformation({id:this.data.id}).subscribe(
      (response :any)=>{
        console.log(this.data.id)
        console.log(response)
        return this.datosFicha=response;
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
