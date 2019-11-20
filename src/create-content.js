
const createContent = (parent, create, textContent, addClass) => {
    const appendTo = document.querySelector(`${parent}`);
    const ele = document.createElement(`${create}`);
    ele.textContent = `${textContent}`;
    ele.classList.add(`${addClass}`)
    appendTo.appendChild(ele)
}


export {createContent}