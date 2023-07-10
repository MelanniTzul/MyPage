import { FormacionAcademica } from './../../interface/formacion-academica';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'formacion-academica',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './formacion-academica.component.html'
})
export class FormacionAcademicaComponent {

  formacion:FormacionAcademica[];

  constructor(){
    this.formacion=[];
    this.cargarDatos();
  }

 cargarDatos(){
  let formacion1:FormacionAcademica={url:'./assets/formacion/usac1.png', name:'Ingenieria en Sistemas'}
  let formacion2:FormacionAcademica={url:'./assets/formacion/ONE.png', name:'Oracle Next Education'}
  let formacion3:FormacionAcademica={url:'./assets/formacion/sigel.png', name:'Jab Academy'}
  let formacion4:FormacionAcademica={url:'./assets/formacion/platzi.png', name:'Platzi'}



  this.formacion.push(formacion1);
  this.formacion.push(formacion2);
  this.formacion.push(formacion3);
  this.formacion.push(formacion4);
 }

}
