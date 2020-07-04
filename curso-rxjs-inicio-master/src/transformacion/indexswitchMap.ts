import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/githu-user.interfaces';
import { GithubUsersResp } from '../interfaces/github-users.interfaces';


// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('Input');
const orderList = document.createElement('ol');

body.append( textInput, orderList );

// helpers
const mostrarUsuarios = ( usuarios: GithubUser[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for(const usuario of usuarios){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blanck';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);

    }
}


// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );
const url = 'https://httpbin.org/delay/1?arg='
input$.pipe(
    pluck('target', 'value'),
    switchMap( texto =>  ajax.getJSON(url + texto)),
).subscribe(console.log);


