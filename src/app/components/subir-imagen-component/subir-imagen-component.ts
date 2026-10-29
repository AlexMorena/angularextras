import { Component } from '@angular/core';
import { ServiceSubida } from '../../services/service-subida';

@Component({
  selector: 'app-subir-imagen-component',
  standalone: false,
  styleUrl: './subir-imagen-component.css',
  templateUrl: './subir-imagen-component.html',
})
export class SubirImagenComponent {
  constructor(private _service: ServiceSubida) {}

  subirImagen(input: HTMLInputElement): void {
    // 1. Cogemos el archivo que seleccionó el usuario
    let file = input.files![0];

    // 2. Preparamos el lector de archivos de JavaScript
    let reader = new FileReader();
    reader.readAsDataURL(file);

    // 3. Cuando termina de leer la imagen, extraemos el base64 y llamamos al servicio
    reader.onload = () => {
      let base64 = (reader.result as string).split(',')[1];

      // 4. Enviamos los datos a tu servicio
      this._service.subirArchivo(file.name, base64).subscribe((response) => {
        console.log('¡Subido!', response);
      });
    };
  }
}
