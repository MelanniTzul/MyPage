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
  let formacion1:FormacionAcademica={url:'./assets/formacion/usac1.png',title:'Ingenieria en Sistemas', subtitle:'2019-Actualmente'}
  let formacion2:FormacionAcademica={url:'./assets/formacion/ONE.png', title:'Oracle Next Education', subtitle:'Junio 2022-Febrero 2023'}
  let formacion3:FormacionAcademica={url:'./assets/formacion/sigel.png', title:'Jab Academy', subtitle:'Diciembre 2022-Mayo 2023'}
  let formacion4:FormacionAcademica={url:'./assets/formacion/platzi.png', title:'Platzi', subtitle:'Mayo 2022-Diciembre 2022'}
  let formacion5:FormacionAcademica={url:'./assets/formacion/devtalles.jpeg', title:'{dev/talles}',subtitle:'2023-Actualmente'}
  this.formacion.push(formacion1);
  this.formacion.push(formacion2);
  this.formacion.push(formacion3);
  this.formacion.push(formacion4);
  this.formacion.push(formacion5);
 }
}
