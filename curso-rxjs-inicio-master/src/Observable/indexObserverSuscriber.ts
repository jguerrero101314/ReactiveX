import { Observable, Observer } from "rxjs";

const OBSERVER: Observer<any> ={
    next : value => console.log('Next: ', value),
    error:error => console.warn('error: ', error),
    complete: () => console.info('completado')  
};

//const OBS$ = Observable.create()

const OBS$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');
    // forzar un error
    /*const A = undefined;
    A.nombre = 'Fernando'*/

    subs.complete();
});
OBS$.subscribe(OBSERVER);

/*OBS$.subscribe(
    valor => console.log('next', valor),
    error => console.warn('error', error),
    () => console.info('completado')
);
*/





