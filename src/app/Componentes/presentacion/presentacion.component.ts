import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {Datos} from 'src/app/interface';



@Component({
  selector: 'presentacion',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
    ],
  templateUrl: './presentacion.component.html',
})
export class PresentacionComponent {
  longText=`Actualmente soy estudiante de Ingeniería en ciencias y sitemas en la Universidad San Carlos de Guatemala cursando el 6to Semestre,
  también estudie en el Programa Oracle Next Education impulsado por Oracle y Alura Latam.

  Creo en mis capacidades, me gusta aprender, siempre es bueno adquirir nuevas competencias.`;

  l=`👋 Hola, mi nombre es Melanni del Rosario Tzul Baquiax, me dedico a la programación y también proporciono asistencia técnica.`;

  foto:Datos[];


 constructor(){
  this.foto=[];
  this.charguefoto();
}

charguefoto(){
let fotopersonal: Datos = {
  imagen:'./src/assets/imagenes/dc-wonder.jpg'
}

this.foto.push(fotopersonal);
}



}
