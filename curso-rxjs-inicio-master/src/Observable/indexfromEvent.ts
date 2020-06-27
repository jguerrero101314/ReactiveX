import { fromEvent, from } from "rxjs";

/**
 * Eventos del DOM
 */

 const SRC1$ = fromEvent<MouseEvent>( document, 'click');
 const SRC2$ = fromEvent<KeyboardEvent>( document, 'keyup');

 const OBSERVER = {
     next: val => console.log('next', val)
 };

 SRC1$.subscribe( ( { x,y } ) => {
     console.log(x,y);
  
 });
 SRC2$.subscribe( evento => {
     console.log(evento);
 });