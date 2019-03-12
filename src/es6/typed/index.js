import Typed from 'typed.js'
import {
    intro
} from '../elements'

const typedOne = intro.typeOne;


window.addEventListener('DOMContentLoaded', () => {
    new Typed(typedOne, {
        strings: ['Wellcome to KOINVESTOR'],
        typeSpeed: 50,
        startDelay: 1500,
        showCursor: false,
        loop: true
    })
})