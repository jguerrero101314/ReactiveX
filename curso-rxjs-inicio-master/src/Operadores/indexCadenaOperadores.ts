import { from, fromEvent } from 'rxjs';
import { filter, map } from "rxjs/operators";

interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code), //KeyboardEvent, string
    filter( Key => Key === 'Enter')
)

keyup$.subscribe(console.log);



