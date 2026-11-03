import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceSubida } from '../../services/service-subida';
import { FileModel } from '../../models/filemodel';

@Component({
  selector: 'app-subir-imagen-component',
  standalone: false,
  styleUrl: './subir-imagen-component.css',
  templateUrl: './subir-imagen-component.html',
})
export class SubirImagenComponent {
  public urlFile!: string;
  public mensaje!: string;
  @ViewChild("cajafile") cajaFile!: ElementRef;
  constructor(
    private _service: ServiceSubida,
    private _cdr: ChangeDetectorRef
  ) { }

  uploadFiles(): void {

    //POR UN LADO TENEMOS EL FICHERO DEL INPUT FILE
    let file = this.cajaFile.nativeElement.files[0];
    //EN EL VALUE VIENE TODA LA ROTA: ES DECIR C:/DOCUMENTS/ANGULAR... ETC

    let miPath = this.cajaFile.nativeElement.value.split("\\");
    //RECUPERAMOS EL ULTIMO VALOR: 2
    let fileName = miPath[2];
    //PARA LEER UN FICHERO SE UTILIZA FileReader
    let reader = new FileReader();

    //NECESITAMOS UN METODO DELEGADO PARA CUANDO EL READER FINALICE LA LECTURA
    reader.onloadend = () => {
      let buffer: ArrayBuffer;
      buffer = reader.result as ArrayBuffer;
      let base64: string;
      //DENTRO DE ANGULAR TENEMOS UNA FUNCION LLAMADA btoa PARA CONVERTIR bytes a string
      base64 = btoa(
        new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
      let fileModel = new FileModel(fileName, base64);
      this._service.uploadFiles(fileModel).subscribe((response) => {
        this.mensaje = "Fichero subido correctamente";
        console.log(response);
        this.urlFile = response.urlFile;
        this._cdr.detectChanges();
      })
    }

    //LE INDICAMOS QUE COMIENCE A LEER LOS DATOS DEL FILE
    reader.readAsArrayBuffer(file);
  }
}
