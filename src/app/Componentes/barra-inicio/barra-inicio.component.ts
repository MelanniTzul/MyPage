import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'barra-inicio',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule

  ],
  templateUrl: './barra-inicio.component.html',
})
export class BarraInicioComponent {

}
