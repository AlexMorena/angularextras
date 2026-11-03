import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { FileModel } from "../models/filemodel";

@Injectable(
    {providedIn: 'root'}
)

export class ServiceSubida{
    url = environment.urlApiImagenes;

    constructor(private _http: HttpClient){}

    uploadFiles(filemodel: FileModel): Observable<any>{
        let json = JSON.stringify(filemodel);
        let header = new HttpHeaders()
                    .set("content-type", "application/json");
        let request = "api/testingfiles";

        return this._http.post(this.url + request, json, { headers: header });
    }
}