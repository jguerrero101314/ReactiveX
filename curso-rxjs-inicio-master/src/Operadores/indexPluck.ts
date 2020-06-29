import {  fromEvent } from 'rxjs';
import { map, pluck } from "rxjs/operators";

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

// const keyupPluck$ = keyup$.pipe(
//     pluck( 'key' )
// );

const keyupPluck$ = keyup$.pipe(
        pluck( 'target', 'baseURI' )
    );
keyup$.subscribe(console.log);
keyupPluck$.subscribe( code => console.log('pluck', code ));
