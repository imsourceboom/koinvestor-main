import {
    header,
    main
} from "../elements"

const menus = Array.from(header.li);
const sections = Array.from(main.section);

const activeMenu = () => {
    sections.map((s, i) => {
        const t = s.getBoundingClientRect().top;
        // const b = s.getBoundingClientRect().bottom;
        if (t > -300 && t < 300) {
            menus[i].classList.add('active');
        } else {
            menus[i].classList.remove('active')
        }
        if (i === 4 && t < -150) {
            menus[i].classList.remove('active')
            menus[5].classList.add('active')
        }
    })
}

window.addEventListener('scroll', activeMenu);