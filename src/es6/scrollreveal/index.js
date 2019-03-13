import ScrollReveal from 'scrollreveal';

window.sr = ScrollReveal({
    reset: true,
    distance: '30px'
});

sr.reveal('main > section', {
    duration: 1000,
});


// sr.reveal('main header', {
//     duration: 1000,
//     distance: '60px',
//     reset: false
// });

sr.reveal('main header figure', {
    duration: 1000,
    origin: 'left',
    distance: '60px',
    reset: false
});

sr.reveal('main header .hamburger', {
    duration: 1000,
    origin: 'right',
    distance: '60px',
    reset: false
});

for (var i = 100; i < 1000; i += 100) {
    sr.reveal('.delay-' + i, {
        origin: 'top',
        delay: i,
        reset: false
    });
}