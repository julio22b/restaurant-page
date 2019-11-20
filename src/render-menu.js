import {createContent} from './create-content.js'

function renderMenu() {
    createContent('#content', 'div', '', 'menu-items-wrapper')
    for (let i = 1; i < 5; i++) {
        createContent('.menu-items-wrapper', 'div', '', `menu-item${i}`)
    }
    createContent(`.menu-item1`, 'span', 'Delicious pancakes with sliced strawberry', 'item-description')
    createContent(`.menu-item2`, 'span', 'Gourment hamburger with fries', 'item-description')
    createContent(`.menu-item3`, 'span', 'Mouthwatering brownies', 'item-description')
    createContent(`.menu-item4`, 'span', 'Exquisite blue curacao with ice', 'item-description')

}

function showMenu(){
    document.querySelector('.menu-items-wrapper').style.display = 'flex'
    document.querySelector('.menu').style.color = `rgb(${158},${39}, ${39})`
    document.querySelector('.menu').style.textShadow = `${1}px ${1}px ${1}px white`

    document.querySelector('.home').style.color = `white`
    document.querySelector('.home').style.textShadow = `none`
    

    document.querySelector('.contact').style.color = `white`
    document.querySelector('.contact').style.textShadow = `none`
}

function removeMenu(){
    document.querySelector('.menu-items-wrapper').style.display = 'none'
 
}

export {renderMenu, showMenu, removeMenu}