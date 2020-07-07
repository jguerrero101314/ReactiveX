import { ajax } from 'rxjs/ajax';
import { map, concatMap, pluck } from 'rxjs/operators';
import { zip } from 'rxjs';
 
const SW_API = 'http://swapi.py4e.com/api';
const getRequest = ( url: string ) => ajax.getJSON<any>(url);
 
const luke$ = getRequest(SW_API + '/people/1');
const human$ = luke$.pipe(
    pluck( 'species' ),
    concatMap( getRequest )
)
 
zip(luke$, human$).pipe(
    map(([personaje, especie]) => ({personaje, especie}))
).subscribe( console.log )  