import { Observable, Observer} from "rxjs";

const OBSERVER: Observer<any> ={
    next : value => console.log('Next: ', value),
    error:error => console.warn('error: ', error),
    complete: () => console.info('completado')  
};


const INTERVALO$ = new Observable<number>( subscriber => {

    let count = 0;

 const interval = setInterval( () => {
       count++;
       subscriber.next(count);
       console.log(count);
    }, 1000);

    setTimeout( () => {
     subscriber.complete();
    },2500);
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }

})

const subs1 = INTERVALO$.subscribe(OBSERVER);
const subs2 = INTERVALO$.subscribe(OBSERVER);
const subs3 = INTERVALO$.subscribe(OBSERVER);

subs1.add(subs2)
     .add(subs3);
setTimeout( () => {
    subs1.unsubscribe();
    console.log('Completado timeout');
}, 6000);

