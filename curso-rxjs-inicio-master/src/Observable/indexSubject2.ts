import { Observable, Observer, Subject } from "rxjs";

const OBSERVER: Observer<any> = {
    next: value => console.log('Next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const INTERVALO$ = new Observable<number>(subs => {

    const INTERVALOID = setInterval(
        () => subs.next(Math.random()), 1000
    );
    return () => {
        clearInterval(INTERVALOID);
        console.log('Intervalo destruido')
    };
});
/**
 * 1- Casteo multiple
 * 2- Tambien es un observer
 * 3- Next, error y complete tambien se manejan
 */
const SUBJECTS$ = new Subject();
const INTERVALSUBJECT = INTERVALO$.subscribe(SUBJECTS$);

// const subs1 = INTERVALO$.subscribe(rnd => console.log);
// const subs2 = INTERVALO$.subscribe(rnd => console.log('subs2', rnd));

const subs1 = SUBJECTS$.subscribe(OBSERVER);
const subs2 = SUBJECTS$.subscribe(OBSERVER);

setTimeout(() => {
    SUBJECTS$.next(10);
    SUBJECTS$.complete();
    INTERVALSUBJECT.unsubscribe();

}, 3500);