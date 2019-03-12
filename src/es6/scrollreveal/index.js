import ScrollReveal from 'scrollreveal';

window.sr = ScrollReveal({
    reset: true,
    distance: '30px'
});

sr.reveal('main > section', {
    duration: 1000,
});

sr.reveal('main > section li', {
    duration: 1000,
});