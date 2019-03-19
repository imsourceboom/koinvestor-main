import {
    contactUs
} from '../elements'

const contact = contactUs.self;
const name = contactUs.name;
const email = contactUs.email;
const message = contactUs.message;
const button = contactUs.button;


contact.addEventListener('keyup', () => {
    if (name.value.length > 0 && email.value.length > 0 && message.value.length > 0) {
        button.classList.add('can-send');
    } else {
        button.classList.remove('can-send');
    }
})