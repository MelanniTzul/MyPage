import { Datos } from './../../interface/datos';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'experiencia-profesional',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './experiencia-profesional.component.html'
})
export class ExperienciaProfesionalComponent {

array:Datos[];
constructor(){
  this.array=[];
  this.ingresarDatos();
}

ingresarDatos(){
  let dato1:Datos={url:'', name:''}

  this.array.push(dato1);
 }
}
