import { Hobbies } from './../../interface/hobbies';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'hobbies',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './hobbies.component.html'
})
export class HobbiesComponent {

  hobbie:Hobbies[];

  constructor(){
    this.hobbie=[];
    this.cargardatos()
  }

  cargardatos(){
    let hobbie1 :Hobbies={url:'./assets/hobbies/escuchar.png',name:'Oír música'}
    let hobbie2:Hobbies={url:'./assets/hobbies/libro.png', name:'Leer libros'}
    let hobbie3:Hobbies={url:'./assets/hobbies/jugando-videojuegos.png', name:'Jugar video juegos'}
    let hobbie4:Hobbies={url:'./assets/hobbies/viendo-una-pelicula.png', name:'Ver series/Peliculas'}
    let hobbie5:Hobbies={url:'./assets/hobbies/mapa.png', name:'Viajar'}
    let hobbie6:Hobbies={url:'./assets/hobbies/corte-de-pelo.png', name:'Cortar cabello'}



    this.hobbie.push(hobbie1);
    this.hobbie.push(hobbie2);
    this.hobbie.push(hobbie3);
    this.hobbie.push(hobbie4);
    this.hobbie.push(hobbie5);
    this.hobbie.push(hobbie6);




  }
}
