import Typed from 'typed.js'
import {
    intro
} from '../elements'

const typedOne = intro.typeOne;

new Typed(typedOne, {
    strings: ['Wellcome to KOINVESTOR'],
    typeSpeed: 50,
    startDelay: 1000,
    showCursor: false,
    loop: true
})