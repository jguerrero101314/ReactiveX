import { fromEvent } from 'rxjs';
import { debounceTime, map, pluck, distinctUntilChanged } from 'rxjs/operators';


const click$ = fromEvent( document, 'click' );
click$
    .pipe(
        debounceTime(3000)
    )
// .subscribe(console.log);

// ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );
const keyupCode$ = input$.pipe(
    debounceTime(1000),
    pluck( 'target', 'value' ),
    distinctUntilChanged()
)
keyupCode$.subscribe( value => console.log('pluck', value));