import { of, from } from "rxjs";

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

 const OBSERVER = {
     next: val => console.log('next', val),
     complete: () => console.log('complete')
 };
 const miGenerador = function*(){
     yield 1;
     yield 2;
     yield 3;
     yield 4;
     yield 5;
 }
 const miIterable = miGenerador();
//  for( let id of miIterable){
//      console.log(id);
//  }
from(miIterable).subscribe(OBSERVER);
//  const SOURCE$ = from([1,2,3,4,5]);
// const SOURCE$ = of(...[1,2,3,4,5]);
// const SOURCE$ = from('Joel');
// const SOURCE$ = of('Joel');
const SOURCE$ = from( fetch('https://api.github.com/users/klerith') );

//  SOURCE$.subscribe( async (resp) => {
//      console.log(resp);
//      const dataResp =  await resp.json();
//      console.log(dataResp)
//  });