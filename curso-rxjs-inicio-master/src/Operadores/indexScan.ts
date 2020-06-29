import { from } from "rxjs/internal/observable/from";
import { reduce, scan, map } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc, curr) =>{
//     return acc + curr;
// }

const totalAcumulador = (acc, curr) => acc + curr;

// Reduce
from(numeros).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

//Scan
from(numeros).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

// Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  toke?: string;
  edad?: number;
}
const user: Usuario[] = [
  { id: "Joel", autenticado: false, toke: null },
  { id: "Joel", autenticado: true, toke: "ABC" },
  { id: "Joel", autenticado: true, toke: "ABC123" },
];
const state$ = from(user).pipe(
  scan<Usuario>(
    (acc, curr) => {
      return { ...acc, ...curr };
    },
    { edad: 33 }
  )
);
// const id$ = state$.pipe(map((state) => state.id));
const id$ = state$.pipe(map((state) => state));
id$.subscribe(console.log);
