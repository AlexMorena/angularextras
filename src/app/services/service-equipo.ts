import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Equipo } from "../models/equipo";
import { environment } from "../../environments/environment.development";
import { SKIP_TOKEN } from "../utils/token.context";

@Injectable()

export class ServiceEquipo {
    constructor(
        private _hhtp: HttpClient
    ) { }

    getEquipos(): Observable<Equipo[]> {
        let request = "api/equipos";
        let url = environment.urlEquipos + request;

        return this._hhtp.get<Equipo[]>(url, {
            context: new HttpContext().set(SKIP_TOKEN, true)
        });
    }
}