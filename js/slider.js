(function (){
    const PROPSLIDER = {
        slider: document.querySelector('.slider'),
        primerSlide: null
    }
    const metslider = {
        inicio: function(){
            setInterval(metslider.slai, 4000);
        },
        slai: function(){
            PROPSLIDER.slider.style.transition = 'all 2s ease';
            PROPSLIDER.slider.style.marginLeft = '-100%';
            setTimeout(function(){
                PROPSLIDER.primerSlide = PROPSLIDER.slider.firstElementChild;
                PROPSLIDER.slider.appendChild(PROPSLIDER.primerSlide);
                PROPSLIDER.slider.style.transition = 'unset';
                PROPSLIDER.slider.style.marginLeft = 0;
            }, 2000);;
        }
    }
    metslider.inicio();
}())