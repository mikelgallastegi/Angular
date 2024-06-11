export interface ContactoModel {
    id?: number;
    documento: number;
    nombreUsuario: string;
    password: string;
    email: string;
    fechaDeNacimiento: Date;
}