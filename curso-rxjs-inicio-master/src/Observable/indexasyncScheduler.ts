import { asyncScheduler } from "rxjs";

// setTimeout ( () => {}, 3000);
// setInterval( () => {}, 3000 );

const SALUDAR = () => console.log('Hola mundo');
const SALUDAR2 = nombre => console.log(`Hola ${ nombre }`);

//setTimeout
// asyncScheduler.schedule( SALUDAR, 2000 );
// asyncScheduler.schedule( SALUDAR2, 2000, 'Joel' );

//setInterval
const SUBS =asyncScheduler.schedule( function(state) {
    console.log('state', state);
    this.schedule( state + 1, 1000 );
}, 3000, 0);

// setTimeout (() => {
//     SUBS.unsubscribe();
// }, 6000);

asyncScheduler.schedule( () => SUBS.unsubscribe(), 6000 );