
export interface PeliculaModel {
    id: number;
    titulo: string;
    director: string;
    fechaEstreno: Date;
    duracion: number;
    genero: string;
    sinopsis: string;
    imagen: string;
    precio: number;
    rating: number;
}

// Se puede hacer como clase
/*export class PeliculaModel {
    id: number;
    titulo: string;
    director: string;
    fechaEstreno: Date;
    duracion: number;
    genero: string;
    sinopsis: string;
    imagen: string;
    precio: number;
    rating: number;
}*/