import { ajax } from "rxjs/ajax";


const url = "https://httpbin.org/delay/1";

// ajax.get(url, {

// });
// ajax.post(url, {
//     id: 1,
//     nombre: 'Joel'

// }, {
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

// ajax.put(url, {
//     id: 1,
//     nombre: 'Joel'

// }, {
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

ajax({
    url: url,
    method: 'POST',
    headers:{
        'mi-token': 'ABC123'
    },
    body:{
        id:1,
        nombre: 'Fernando'
    }
}).subscribe(console.log);