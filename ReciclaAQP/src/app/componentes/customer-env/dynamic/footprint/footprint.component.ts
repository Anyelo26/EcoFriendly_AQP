import { Component, OnInit } from '@angular/core';
interface Departamento {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-footprint',
  templateUrl: './footprint.component.html',
  styleUrls: ['./footprint.component.css']
})
  
export class FootprintComponent {
  departamentos: Departamento[] = [
    {value: 'Amazonas-0', viewValue: 'Amazonas'},
    {value: 'Áncash-1', viewValue: 'Áncash'},
    { value: 'Apurímac-2', viewValue: 'Apurímac' },
    { value: 'Arequipa-3', viewValue: 'Arequipa' },
    { value: 'Ayacucho-4', viewValue: 'Ayacucho' },
    { value: 'Cajamarca-5', viewValue: 'Cajamarca' },
    { value: 'Callao-6', viewValue: 'Callao' },
    { value: 'Cusco-7', viewValue: 'Cusco' },
    { value: 'Huancavelica-8', viewValue: 'Huancavelica' },
    { value: 'Huánuco-9', viewValue: 'Huánuco' },
    { value: 'Ica-10', viewValue: 'Ica' },
    { value: 'Junín-11', viewValue: 'Junín' },
    { value: 'La Libertad-12', viewValue: 'La Libertad' },
    { value: 'Lambayeque-13', viewValue: 'Lambayeque' },
    { value: 'Lima Metropolitana-14', viewValue: 'Lima Metropolitana' },
    { value: 'Lima (departamento)-15', viewValue: 'Lima (departamento)' },
    { value: 'Loreto-16', viewValue: 'Loreto' },
    { value: 'Madre de Dios-17', viewValue: 'Madre de Dios' },
    { value: 'Moquegua-18', viewValue: 'Moquegua' },
    { value: 'Pasco-19', viewValue: 'Pasco' },
    { value: 'Piura-20', viewValue: 'Piura' },
    { value: 'San Martín-21', viewValue: 'San Martín' },
    { value: 'Tacna-22', viewValue: 'Tacna' },
    { value: 'Tumbes-23', viewValue: 'Tumbes' },
    { value: 'Ucayali-24', viewValue: 'Ucayali' },
    
  ];

  selectedDep = this.departamentos[2].value;
  lat = 19.290950;
   lng = -99.653015;
   zoom = 9;


}
