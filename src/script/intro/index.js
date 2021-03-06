import {
    body,
    main,
    intro,
    about,
    header
} from '../elements';


const cover = intro.self;
const typed = intro.typed;
const arrow = intro.arrow;

const li = Array.from(header.li);
const logo = header.logo;
const hamburger = header.hamburger;




window.addEventListener('scroll', () => {

    let coverNone;
    const mainEle = main.self;
    const headerEle = header.self;
    if (cover.style.display !== 'none') {
        typed.classList.add('trigger');
        arrow.classList.add('disappear');

        coverNone = setTimeout(() => {
            cover.style.display = 'none';

            window.scrollTo(0, 0);



            mainEle.classList.add('active');
            headerEle.classList.add('active');
        }, 1500);

    } else {
        clearTimeout(coverNone);

        li.map((e) => {
            e.classList.add('reveal');
        })

        logo.classList.add('active');
        hamburger.classList.add('active');
    }
});