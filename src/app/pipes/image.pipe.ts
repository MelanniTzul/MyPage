import { Pipe, PipeTransform } from '@angular/core';
import { Datos } from '../interface';

@Pipe({
  name: 'image',
  standalone: true
})
export class ImagePipe implements PipeTransform {

  transform(f: Datos): string {
    return './assets/imagenes/dc-wonder.jpg'
  }


}
