import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BarraInicioComponent } from "./Componentes/barra-inicio/barra-inicio.component";
import { PresentacionComponent } from "./Componentes/presentacion/presentacion.component";
import { SobremiComponent } from "./Componentes/sobremi/sobremi.component";
import { SkillsComponent } from "./Componentes/skills/skills.component";
import { HobbiesComponent } from "./Componentes/hobbies/hobbies.component";
import { FormacionAcademicaComponent } from './Componentes/formacion-academica/formacion-academica.component';

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
        PresentacionComponent,
        MatIconModule,
        SobremiComponent,
        SkillsComponent,
        HobbiesComponent,
        FormacionAcademicaComponent
    ]
})
export class AppModule { }
