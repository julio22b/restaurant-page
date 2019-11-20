import {createContent} from './create-content.js'

function renderContact (){
    createContent('#content', 'div', '', 'contactWrapper')
    createContent('.contactWrapper', 'p', `Address: 114 San Carlos Rd.
    North Olmsted, OH 44070`)
    createContent('.contactWrapper', 'p', 'Phone: (476) 241-4505')
    createContent('.contactWrapper', 'p', 'Email: citobar@fakebar.com')
}

function showContact(){
    document.querySelector('.contactWrapper').style.display = 'block'

    document.querySelector('.menu').style.color = `white`
    document.querySelector('.menu').style.textShadow = `none`

    document.querySelector('.home').style.color = `white`
    document.querySelector('.home').style.textShadow = `none`

    document.querySelector('.contact').style.color = `rgb(${158},${39}, ${39})`
    document.querySelector('.contact').style.textShadow = `${1}px ${1}px ${1}px white`
}

function removeContact(){
    document.querySelector('.contactWrapper').style.display = 'none'
}

export {renderContact, showContact, removeContact}