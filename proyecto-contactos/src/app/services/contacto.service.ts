import { Injectable } from '@angular/core';
import { ContactoModel } from '../models/contacts.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {
  
  private contactos: ContactoModel[] = [
    {
      id: 1,
      documento: 12345678,
      nombreUsuario: 'usuario1',
      password: 'password1',
      email: 'usuario1@example.com',
      fechaDeNacimiento: new Date('1990-01-01')
    },
    {
      id: 2,
      documento: 23456789,
      nombreUsuario: 'usuario2',
      password: 'password2',
      email: 'usuario2@example.com',
      fechaDeNacimiento: new Date('1985-02-02')
    },
    {
      id: 3,
      documento: 34567890,
      nombreUsuario: 'usuario3',
      password: 'password3',
      email: 'usuario3@example.com',
      fechaDeNacimiento: new Date('1992-03-03')
    },
    {
      id: 4,
      documento: 45678901,
      nombreUsuario: 'usuario4',
      password: 'password4',
      email: 'usuario4@example.com',
      fechaDeNacimiento: new Date('1988-04-04')
    },
    {
      id: 5,
      documento: 56789012,
      nombreUsuario: 'usuario5',
      password: 'password5',
      email: 'usuario5@example.com',
      fechaDeNacimiento: new Date('1995-05-05')
    }
  ];

  constructor() { }

  obtenerContactos(): Observable<ContactoModel[]> {
    return of(this.contactos);
  }

  
}