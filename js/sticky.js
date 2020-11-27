// Propiedades para la barra de navegación
const PROP_STICKY = {
    navBar: document.querySelector('.menu-nav-pc'),
    logoBanner: document.querySelector('.logo-banner')
}

// Metodos para la barra de Navegación

const MET_STICKY = {
    inicio: function () {
        window.addEventListener('scroll', MET_STICKY.changeClass);
    },
    changeClass: function () {
        if(window.scrollY > 50){
            PROP_STICKY.navBar.className = 'stickyMenu'
            PROP_STICKY.logoBanner.setAttribute('src', 'img/logoBlanco.png');
        } else{
            PROP_STICKY.navBar.className = 'menu-nav-pc'
            PROP_STICKY.logoBanner.setAttribute('src', 'img/capa 1.png');
            // PROP_STICKY.logoBanner.style.width = '120px';
        }

    }
}
MET_STICKY.inicio();