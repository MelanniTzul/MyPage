import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
    selector: 'presentacion',
    standalone: true,
    templateUrl: './presentacion.component.html',
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule

    ]
})
export class PresentacionComponent  {


  longText=`Actualmente soy estudiante de Ingeniería en ciencias y sitemas en la Universidad San Carlos de Guatemala cursando el 6to Semestre,
  también estudie en el Programa Oracle Next Education impulsado por Oracle y Alura Latam.

  Creo en mis capacidades, me gusta aprender, siempre es bueno adquirir nuevas competencias.`;

  l=`👋🏻 Hola, mi nombre es Melanni del Rosario Tzul Baquiax, me dedico a la programación y también proporciono asistencia técnica.`;


   foto:string;


 constructor(){
  this.foto="";
  this.charguefoto();
}

charguefoto(){
  this.foto='./assets/imagenes/Mel.png'
}

goGitHub() {
  window.location.href = 'https://github.com/MelanniTzul'; // Reemplaza con la URL a la que deseas redirigir
 }

 goFace(){
  window.location.href='https://www.facebook.com/melannitzul/';
 }


 goInsta(){
  window.location.href='https://www.instagram.com/melannitzul/';
 }
 goLinkedin(){
  window.location.href='https://www.linkedin.com/in/melannitzul/';
 }
}
