import ScrollReveal from 'scrollreveal';
import {
    main
} from '../elements'

const mainEl = main.self;

window.sr = new ScrollReveal({
    // duration: 100,
    reset: true,
    distance: '30px',
    reset: false
});


if (mainEl !== null) {
    /*
        각각 큰 section
    */
    sr.reveal('main > section');



    /* 
        Heaer 영역  
    */
    // 로고
    sr.reveal('header figure', {
        duration: 1500,
        origin: 'left',
        distance: '30px',
        reset: false
    });
    // 햄버거
    sr.reveal('header .hamburger', {
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
    // const add = (el) => {
    //     el.classList.add('active')
    // }
    // const remove = (el) => {
    //     el.classList.remove('active')
    // }
    // sr.reveal('figure.cube > img', {
    //     beforeReset: remove,
    //     beforeReveal: add
    // })

    // sr.reveal('figure.cube', {
    //     origin: 'top',
    //     distance: '30px',
    //     delay: 300
    // });



    // for (let i = 100; i < 1000; i += 100) {
    //     sr.reveal('.delay2-' + i, {
    //         delay: i,
    //     });
    // }



    /*
        intro
    */
    // sr.reveal('article.cover p.typed', {
    //     duration: 2000,
    //     distance: '70px'
    // })
    // sr.reveal('article.cover a.arrow', {
    //     delay: 1500,
    //     distance: '30px'
    // })


    /*
        about section
    */
    sr.reveal('#about .wrap', {
        delay: 300,
    });



    /* 
        team section
    */
    // profile each
    sr.reveal('#team .profile', {
        delay: 200,
    });



    /*
        services sectoin
    */
    // mining
    sr.reveal('#services .mining h1', {
        distance: '50px'
    })
    sr.reveal('#services .mining li', {
        delay: 200,
        distance: '50px'
    })
    // advisory
    sr.reveal('#services .advisory h1', {
        distance: '50px'
    })
    sr.reveal('#services .advisory li', {
        delay: 200,
        distance: '50px'
    })


    /*
        portfolio section
    */
    sr.reveal('#portfolio li', {
        delay: 200
    })


    /*
        partners section
    */
    sr.reveal('#partners li', {
        delay: 200
    })



    /*
        contact section
    */
    sr.reveal('#contact .address', {
        delay: 200
    })
    sr.reveal('#contact input', {
        delay: 200
    })
    sr.reveal('#contact textarea', {
        delay: 200
    })
    sr.reveal('#contact button', {
        delay: 200
    })
}