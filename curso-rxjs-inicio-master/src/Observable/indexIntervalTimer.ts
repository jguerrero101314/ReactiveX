import { interval, timer } from "rxjs";

const OBSERVER = {
    next: val => console.log(' next: ', val),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );
const INTERVAL$ = interval(1000);
// const TIMER$ = timer(2000);
// const TIMER$ = timer(2000, 1000);
const TIMER$ = timer( hoyEn5 );

console.log('Inicio');
//INTERVAL$.subscribe( OBSERVER );
TIMER$.subscribe(OBSERVER);
console.log('Fin');