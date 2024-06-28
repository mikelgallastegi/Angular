import { Injectable } from '@angular/core';
import { ContactoModel } from '../models/contacto.model';
import { GeneroModel } from '../models/genero.model';
import { Observable, of } from 'rxjs';
import { ContactoServiceInterface } from './contacto.service.interface';

//Lo puedo recibir por inyeccion de dependencias en el constructor
@Injectable({
  providedIn: 'root'
})
export class ContactoService extends ContactoServiceInterface {

  private contactos : ContactoModel[] = [
    { id: 1, documento: 123456789, nombre: 'Juan', fechaNacimiento: new Date(), genero: GeneroModel.Masculino },
    { id: 2, documento: 234567890, nombre: 'Pedro', fechaNacimiento: new Date(), genero: GeneroModel.Masculino },
    { id: 3, documento: 345678901, nombre: 'Maria', fechaNacimiento: new Date(), genero: GeneroModel.Femenino },
  ]

  constructor() {
    super();
   }

  //Metodo que simula la consulta a un servicio REST
  override getContactos() : Observable<ContactoModel[]> {
    return of(this.contactos);
  }

  override agregar(nuevo : ContactoModel) : Observable<any> {
    nuevo.id = Math.max(...this.contactos.map(c => c.id)) + 1;
    this.contactos.push(nuevo);
    return of("OK");
  }

  override eliminar(id : number) : Observable<any> {
    const index = this.contactos.findIndex(c => c.id === id);
    if (index > -1) {
      this.contactos.splice(index, 1);
    }
    return of("OK");
  }

}
