import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {Datos} from 'src/app/interface';
import { ImagePipe } from "../../pipes/image.pipe";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
    selector: 'presentacion',
    standalone: true,
    templateUrl: './presentacion.component.html',
    imports: [
        CommonModule,
        MatCardModule,
        ImagePipe,
        MatButtonModule,
        MatIconModule

    ]
})
export class PresentacionComponent  {


  longText=`Actualmente soy estudiante de Ingeniería en ciencias y sitemas en la Universidad San Carlos de Guatemala cursando el 6to Semestre,
  también estudie en el Programa Oracle Next Education impulsado por Oracle y Alura Latam.

  Creo en mis capacidades, me gusta aprender, siempre es bueno adquirir nuevas competencias.`;

  l=`👋 Hola, mi nombre es Melanni del Rosario Tzul Baquiax, me dedico a la programación y también proporciono asistencia técnica.`;

 //Poder mandar el dato
 @Input() public f!: Datos;



  foto:string;


 constructor(){
  this.foto="";
  this.charguefoto();
}

charguefoto(){
  this.foto='./assets/imagenes/Mel.JPG'
}
}
