import { fromEvent } from 'rxjs';
import { map, sampleTime, debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click' );
click$
    .pipe(
        sampleTime(2000),
        map( ({ x, y }) => ({ x, y }) )
    )
 .subscribe(console.log);