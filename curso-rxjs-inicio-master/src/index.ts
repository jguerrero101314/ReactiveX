import { Observable } from "rxjs";

//const OBS$ = Observable.create()

const OBS$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');
    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();

    subs.next('Hola1');
    subs.next('Mundo1');


});

OBS$.subscribe( console.log );






