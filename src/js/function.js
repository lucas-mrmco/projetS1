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
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return 2*delta +d;
                         if (ind == 1) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 2) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta +d;
            return 3*delta + 2*d;
        }
    });
}