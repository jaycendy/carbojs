const propLightbox = {
    contenedor: document.getElementsByClassName('lightbox'),
    imagen: null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    imagenSrc: null,
    lightbox_contenedor: null,
    modal: null,
    animacion: 'fade'
}
const metLightbox = {
    inicio: function (){
        for (let i = 0; i < propLightbox.contenedor.length; i++) {
            propLightbox.contenedor[i].addEventListener('click', metLightbox.capturaImagen);
        }
    },
    capturaImagen: function (){
        propLightbox.imagen = this;
        metLightbox.lightbox(propLightbox.imagen);
    },
    lightbox: function(imagen){
        propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);
        propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_contenedor');
        propLightbox.lightbox_contenedor = document.getElementById('lightbox_contenedor');
        propLightbox.lightbox_contenedor.style.width = '100%';
        propLightbox.lightbox_contenedor.style.width = '100%';
        propLightbox.lightbox_contenedor.style.position = 'fixed';
        propLightbox.lightbox_contenedor.style.height = '100%';
        propLightbox.lightbox_contenedor.style.zIndex = '1000';
        propLightbox.lightbox_contenedor.style.background = 'rgba(0,0,0,0.8)';
        propLightbox.lightbox_contenedor.style.top = 0;
        propLightbox.lightbox_contenedor.style.left = 0;
        propLightbox.lightbox_contenedor.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
        propLightbox.modal = document.getElementById('modal');
        propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSrc);
        propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');
        // animación para que aparezca suavemente
        if (propLightbox.animacion == 'fade') {
            document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;
            setTimeout(function () {
                document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;
            }, 50);
        }
        propLightbox.modal.innerHTML += '<i id="cerrar_modal" class="fas fa-times-circle"></i>';
        propLightbox.cerrarModal = document.getElementById('cerrar_modal');
        propLightbox.cerrarModal.addEventListener('click', metLightbox.cerrarModal);
    },
    cerrarModal: function(){
        propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_contenedor);
    }
}
metLightbox.inicio();
