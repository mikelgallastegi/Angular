import { Observable } from "rxjs";
import { ContactoModel } from "../models/contacto.model";

export abstract class ContactoServiceInterface {
    abstract agregar(nuevo: ContactoModel): Observable<any>;
    abstract eliminar(id: number): Observable<any>;
    abstract getContactos(): Observable<ContactoModel[]>;
}
