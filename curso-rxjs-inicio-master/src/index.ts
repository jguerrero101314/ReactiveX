import { interval, timer } from "rxjs";

const OBSERVER = {
    next: val => console.log(' next: ', val),
    complete: () => console.log('complete')
}
const INTERVAL$ = interval(1000);
const TIMER$ = timer(2000);
console.log('Inicio');
//INTERVAL$.subscribe( OBSERVER );
TIMER$.subscribe(OBSERVER);
console.log('Fin');