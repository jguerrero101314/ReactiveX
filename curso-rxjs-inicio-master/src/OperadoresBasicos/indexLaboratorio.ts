import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur suscipit nisl, quis ultrices elit ornare nec. Etiam vulputate metus nibh, in lobortis justo aliquam ac. Vivamus vulputate dolor dolor, in condimentum risus tincidunt convallis. Aliquam pretium ultrices lacus, non ultrices erat tempor a. Vestibulum ac risus quis neque dapibus accumsan. Sed rhoncus non lectus sed tristique. Nulla facilisi. Etiam tincidunt aliquet auctor. Nulla semper magna vitae eros mollis venenatis. Pellentesque bibendum egestas risus ac scelerisque. In aliquam sagittis velit nec cursus. Integer accumsan orci tellus, at lacinia mi vehicula eu.
<br/><br/>
Vestibulum malesuada purus non massa suscipit efficitur. Proin justo leo, viverra quis nisi eget, vehicula aliquet risus. Pellentesque ut nulla lectus. Praesent vestibulum, ex vitae euismod venenatis, nibh libero lacinia neque, eu lobortis orci libero sed libero. Ut pellentesque ex vel viverra tincidunt. Sed vulputate metus eu leo accumsan fermentum. Aliquam pellentesque, dui sit amet rutrum varius, odio diam aliquet dolor, at porttitor lorem diam efficitur nulla.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ex eros. Maecenas a ipsum non risus efficitur dapibus at vehicula nunc. Sed varius ipsum nec massa pretium fringilla. Sed luctus metus ex, consequat mattis lorem egestas et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas id nunc mi. Nam et justo et ligula malesuada placerat nec sed ipsum. Praesent elementum dolor ipsum, et vulputate sem scelerisque sit amet. Nullam blandit rutrum diam eget varius. Nam ac commodo nunc. Pellentesque massa odio, porta et pharetra non, tempus id lacus. Sed eget ullamcorper massa, ut imperdiet purus. Aliquam in nulla in augue pellentesque consectetur. Pellentesque eu metus at arcu iaculis lacinia. Duis volutpat gravida enim sit amet auctor.
<br/><br/>
Maecenas consequat dapibus facilisis. Quisque vestibulum et leo eget tincidunt. Nulla finibus eget risus a egestas. Maecenas nec sodales mi, quis euismod erat. Curabitur vitae nisi nec sapien suscipit viverra in non elit. Sed leo ligula, viverra eu lacinia a, dictum a ante. Nulla orci risus, tempus at elementum elementum, sodales non enim. Aenean sollicitudin interdum lobortis. Sed accumsan quam leo, a posuere neque luctus vel. Aliquam vulputate euismod euismod. Etiam efficitur fringilla tristique. Aenean scelerisque pretium magna, ut sollicitudin odio rutrum vitae. Nunc metus velit, tincidunt scelerisque tempor ut, molestie et dolor.
<br/><br/>
Vivamus pulvinar magna sit amet nisl aliquet, sit amet rhoncus augue mollis. Sed consectetur velit id faucibus varius. Vivamus nisl mi, semper a enim eget, tempus commodo sem. Ut id euismod erat, id ultricies augue. Proin vulputate purus tellus, a sagittis mauris scelerisque eu. In tincidunt sem non risus cursus, efficitur fringilla lorem condimentum. Aliquam a diam mattis, hendrerit ex sit amet, varius elit. Quisque vitae sem eu lacus aliquam pulvinar et a lectus. Praesent luctus pulvinar sem non molestie. Phasellus mollis, lectus ut pretium varius, urna purus fermentum ligula, at iaculis nunc felis a ante. Nam blandit suscipit feugiat.
`;
const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

// Funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
    // console.log({ scrollTop, scrollHeight, clientHeight})

}

// Stream

const scroll$ = fromEvent( document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map( evento => calcularPorcentajeScroll(event) )
       map( calcularPorcentajeScroll ),
       tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});