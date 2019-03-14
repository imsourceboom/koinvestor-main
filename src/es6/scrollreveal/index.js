import ScrollReveal from 'scrollreveal';

window.sr = new ScrollReveal({
    duration: 700,
    reset: true,
    distance: '30px'
});


/*
    각각 큰 section
*/
sr.reveal('main > section');

/*
    section의 첫 article
*/
sr.reveal('main > section > article.container > .wrap', {
    delay: 350,
});


/* 
    Heaer 영역  
*/
// 로고
sr.reveal('main header figure', {
    duration: 1500,
    origin: 'left',
    distance: '30px',
    reset: false
});
// 햄버거
sr.reveal('main header .hamburger', {
    duration: 1500,
    origin: 'right',
    distance: '30px',
    reset: false
});
// nav의 li 요소
for (var i = 100; i < 1000; i += 100) {
    sr.reveal('.delay-' + i, {
        origin: 'top',
        delay: i,
        reset: false
    });
}


/*
    Cube animation
*/
const add = (el) => {
    el.classList.add('active')
}
const remove = (el) => {
    el.classList.remove('active')
}
sr.reveal('figure.cube > img', {
    beforeReset: remove,
    beforeReveal: add
})

sr.reveal('figure.cube', {
    origin: 'top',
    distance: '30px',
    delay: 300
});




for (let i = 100; i < 1000; i += 100) {
    sr.reveal('.delay2-' + i, {
        delay: i,
    });
}




sr.reveal('#team .profile');