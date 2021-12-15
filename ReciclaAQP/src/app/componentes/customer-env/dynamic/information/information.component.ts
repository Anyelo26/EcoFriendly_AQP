import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Information } from 'src/app/modelos/Information';
import { InfoDetailComponent } from './info-detail/info-detail.component';
import { InformationService } from 'src/app/servicios/information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  public cards:Information[]=[];

  constructor(
    private userService:InformationService,
    private router: Router, 
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.golistarcards()
  }

  golistarcards(){
    this.userService.getListInformation()
    .subscribe(
      (response) =>{
        this.cards=(response as any).data;
        return console.log(this.cards)
        },
        (error) =>{
          console.log("error"+ error);
        }
    )
  }

  goInformationDetail(){
    //this.router.navigate(['/Detail', id_ficha]);
    this.router.navigate(['/Detail']);
  }
}
