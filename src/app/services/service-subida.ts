import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable(
    {providedIn: 'root'}
)

export class ServiceSubida{
    url = environment.urlApiImagenes;

    constructor(private _http: HttpClient){}

    subirArchivo(fileName: string, fileContent: string): Observable<any>{
        let request = "api/testingfiles";
        let imagen = {
            fileName: fileName,
            fileContent: fileContent
        }

        return this._http.post(this.url + request, imagen);
    }
}