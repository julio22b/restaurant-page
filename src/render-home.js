import {createContent} from './create-content.js'

function renderHome(){
    
    createContent('#content', 'h1','CitoBar', 'header')
    createContent('#content','div','','description')
    createContent('.description', 'p', 'Gastronomy')
    createContent('.description', 'p', 'Events')
    createContent('.description', 'p', 'Live Music')
    createContent('.description', 'p', 'Cocktails and Drinks')
    createContent('.description', 'p', 'Open every day from 11:00 AM')
    
}

function removeHome(){
    document.querySelector('h1').style.display = 'none'
    document.querySelector('.description').style.display = 'none'
}

function showHome(){

    document.querySelector('.home').style.color = `rgb(${158},${39}, ${39})`
    document.querySelector('.home').style.textShadow = `${1}px ${1}px ${1}px white`

    document.querySelector('.menu').style.color = `white`
    document.querySelector('.menu').style.textShadow = `none`


    document.querySelector('.contact').style.color = `white`
    document.querySelector('.contact').style.textShadow = `none`

    document.querySelector('h1').style.display = 'block'
    document.querySelector('.description').style.display = 'block'
}

export {renderHome, removeHome, showHome}