import { of } from 'rxjs';

// const OBS$ = of<number>(...[1,2,3,4,5,6], 2,3,4,5);
const OBS$ = of( [1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true) );

console.log('Inicion del OBS$');
OBS$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia')
 );
 console.log('Fin del OBS$');