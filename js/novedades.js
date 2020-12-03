const propNovedades = {
    boton: document.querySelectorAll('.nov-header a'),
    primerContenido: document.querySelector('.nov-content').firstElementChild,   
    primerElemento: document.querySelector('.nov-header').firstElementChild,
    li_encabezado: document.querySelectorAll('#nov_header a'),
    li_content: document.querySelectorAll('#nov_content >div'),
    contenido_activo: null
}
const metNovedades = {
    inicio: function (){
        propNovedades.primerElemento.className = 'active';
        propNovedades.primerContenido.className = 'active';
        for (let i = 0; i < propNovedades.boton.length; i++) {
            propNovedades.boton[i].addEventListener('click', metNovedades.evento);
        }
    },
    evento: function (e) {
        for (let i = 0; i < propNovedades.li_encabezado.length; i++) {
            propNovedades.li_encabezado[i].className = '';
        }
        for (let i = 0; i < propNovedades.li_content.length; i++) {
            propNovedades.li_content[i].className = '';
        }
        this.className= 'active';
        propNovedades.contenido_activo = this.getAttribute('href');
        document.querySelector(propNovedades.contenido_activo).className = 'active';
        document.querySelector(propNovedades.contenido_activo).style.opacity = 0;
        setTimeout(function(){
            document.querySelector(propNovedades.contenido_activo).style.opacity = '1';
        },100);
    }
}
metNovedades.inicio();