import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Datos } from 'src/app/interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {NgIf} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'contacto',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    NgIf,
    MatButtonModule],
  templateUrl: './contacto.component.html',
  styles:[``]
})
export class ContactoComponent {



  contacto:Datos[];

  constructor(){
    this.contacto=[];
    this.ingresarDatos();

  }

  ingresarDatos(){
    let dato1:Datos={url:'./assets/contacto/email.png',name:'melannitzul@gmail.com'}
    let dato2:Datos={url:'./assets/contacto/phone.png',name:'Contáctame'}
    this.contacto.push(dato1);
    this.contacto.push(dato2);

  }




}
