export enum Color {
    rojo, negro, azul, verde, amarillo, plomo
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}