function carrousel9Images() {
    var images9 = document.querySelectorAll('.image9');
    let d = 2000;
    let delta = 1000;

    images9.forEach(function(img,ind) {
        img.style.zIndex = images9.length - ind;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images9,
        translateX: [{value: '330', duration: d},
                     {value: '-330', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (8*delta)+(7*d);
                         if (ind == 1) return (7*delta)+(6*d);
                         if (ind == 2) return (6*delta)+(5*d);
                         if (ind == 3) return (5*delta)+(4*d);
                         if (ind == 4) return (4*delta)+(3*d);
                         if (ind == 5) return (3*delta)+(2*d);
                         if (ind == 6) return (2*delta)+d;
                         if (ind == 7) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 8) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta +d;
            if (ind == 2) return (3*delta) +(2*d);
            if (ind == 3) return (4*delta) +(3*d);
            if (ind == 4) return (5*delta) +(4*d);
            if (ind == 5) return (6*delta) +(5*d);
            if (ind == 6) return (7*delta) +(6*d);
            if (ind == 7) return (8*delta) +(7*d);
            return 3*delta + 2*d;
        }
    });
}
function monterLegende(x) {
    galerie__titles = document.querySelector('.galerie__title'+ x);
    return anime ({
      targets: galerie__titles,
      translateY:'-5em',
      autoplay: false,
      duration: 300,
      easing: 'linear'  
    }).play;

}

function descendreLegende(x) {
    
    return anime ({

        targets: galerie__titles,
        translateY: 0,
        autoplay: false,
        duration: 300,
        easing: 'linear'  
      }).play;
    
}