import { of, range, asyncScheduler } from "rxjs";

//const SRC$ = of(1,2,3,4,5);
const SRC$ = range( 1,5, asyncScheduler );
console.log('inicio');
SRC$.subscribe(console.log);
console.log('fin');