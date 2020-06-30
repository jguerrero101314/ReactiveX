import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';
import { from } from 'rxjs/internal/observable/from';


const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$
    .pipe(
        distinct()
    )
.subscribe(console.log);

interface Personaje {
    nombre: string;
}
const personajes: Personaje[] = [
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'X'
    }, {
        nombre: 'Aquaman'
    },
    {
        nombre: 'Aquaman'
    },
    {
        nombre: 'Megamente'
    }
];

from( personajes )
.pipe(
    distinct( p => p.nombre )
)
.subscribe(console.log)