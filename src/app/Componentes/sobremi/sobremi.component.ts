import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sobremi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobremi.component.html'
})
export class SobremiComponent {

  nota1=`Soy un estudiante apasionado de Ingeniería en Sistemas con un fuerte interés en el desarrollo de
   software y la resolución de problemas tecnológicos. Mi objetivo es adquirir experiencia práctica en el
    campo de la ingeniería mientras aplico los conocimientos teóricos y practicos adquiridos durante mis estudios,
    he tenido la oportunidad de estar en el programa Oracle Next Education y culminarlo exitosamente.
  `;

  nota2=` Durante mi carrera universitaria, he participado en diversos proyectos académicos que me han permitido desarrollar
  habilidades de resolución de problemas y trabajar en equipo. He tenido la oportunidad de aplicar mis conocimientos
  de programación en proyectos prácticos, lo que ha reforzado mi comprensión de los conceptos y me ha enseñado
  la importancia de la colaboración en entornos de desarrollo.`;
  nota3=`Además de mi formación académica, soy una persona comprometida, responsable y
  con habilidades de comunicación efectiva. Tengo la capacidad de ser autodidacta
  y adaptarme a nuevos desafíos. Mi pasión por la tecnología y mi motivación para crecer
  profesionalmente me impulsan a buscar oportunidades de aprendizaje y desarrollo continuo.
 `;
  nota4=`Estoy emocionada por la posibilidad de aplicar mis conocimientos y habilidades en un entorno laboral,
  donde pueda contribuir de manera significativa y seguir desarrollándome como profesional en el campo de
  la ingeniería en sistemas.
  `;

}
