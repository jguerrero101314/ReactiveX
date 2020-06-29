import {  fromEvent } from 'rxjs';
import { map, pluck, mapTo } from "rxjs/operators";

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');
const keyupMapTo$ = keyup$.pipe(
        mapTo( 'tecla presionada' )
    );
keyup$.subscribe(console.log);
keyupMapTo$.subscribe( code => console.log('mapTo', code ));
