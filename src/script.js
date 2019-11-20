import {createContent} from './create-content.js'
import {renderMenu, removeMenu, showMenu} from './render-menu.js'
import {renderHome, removeHome, showHome} from './render-home.js'
import {renderContact, removeContact, showContact} from './render-contact.js'

createContent('#content', 'div', '', 'tabsWrapper')
createContent('.tabsWrapper', 'div', 'Home', 'home')
createContent('.tabsWrapper', 'div', 'Menu', 'menu')
createContent('.tabsWrapper', 'div', 'Contact', 'contact')

renderHome()
renderMenu()
renderContact()

const menu = document.querySelector('.menu')
menu.addEventListener('click', removeHome)
menu.addEventListener('click', removeContact)
menu.addEventListener('click', showMenu)

const home = document.querySelector('.home')
home.addEventListener('click', removeContact)
home.addEventListener('click', removeMenu)
home.addEventListener('click', showHome)


const contact = document.querySelector('.contact')
contact.addEventListener('click', removeMenu)
contact.addEventListener('click', removeHome)
contact.addEventListener('click', showContact)

