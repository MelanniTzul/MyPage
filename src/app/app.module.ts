import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BarraInicioComponent } from "./Componentes/barra-inicio/barra-inicio.component";
import { PresentacionComponent } from "./Componentes/presentacion/presentacion.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        BarraInicioComponent,
        PresentacionComponent
    ]
})
export class AppModule { }
