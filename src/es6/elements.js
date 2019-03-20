const doc = document;

export const body = {
    self: doc.querySelector('body')
}

export const header = {
    self: doc.querySelector('body > header'),
    logo: doc.querySelector('body> header figure '),
    nav: doc.querySelector('body > header nav'),
    li: doc.querySelectorAll('body > header nav ul li'),
    hamburger: doc.querySelector('body > header .hamburger'),
};

export const intro = {
    self: doc.querySelector('body > article.cover'),
    typed: doc.querySelector('body > article.cover > .logo'),
    arrow: doc.querySelector('body > article.cover .arrow')
}

export const main = {
    self: doc.querySelector('body > main'),
    section: doc.querySelectorAll('body > main > section')
}

export const about = {
    self: doc.querySelector('body > main > #about')
}
export const contactUs = {
    self: doc.querySelector('body > main > #contact'),
    name: doc.querySelector('#contact input#name'),
    email: doc.querySelector('#contact input#email'),
    message: doc.querySelector('#contact textarea#message'),
    button: doc.querySelector('#contact button')
}

console.log('Webpack On!!');