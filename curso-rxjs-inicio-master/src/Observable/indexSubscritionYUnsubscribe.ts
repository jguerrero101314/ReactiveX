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

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }

})

const subs1 = INTERVALO$.subscribe();
const subs2 = INTERVALO$.subscribe();
const subs3 = INTERVALO$.subscribe();
setTimeout( () => {
    subs1.unsubscribe();  
    subs2.unsubscribe();
    subs3.unsubscribe();
    console.log('Completado timeout');
}, 3000);

