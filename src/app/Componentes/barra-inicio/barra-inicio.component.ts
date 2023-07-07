import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'barra-inicio',
  standalone: true,
  imports: [CommonModule,
    MatToolbarModule],
  templateUrl: './barra-inicio.component.html',
  styleUrls: ['./barra-inicio.component.scss']
})
export class BarraInicioComponent {

}
