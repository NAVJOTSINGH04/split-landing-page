const left= document.querySelector('.left');
const right= document.querySelector('.right');
const container= document.querySelector('.container');

// => is a arrow function used instead the name of function.
left.addEventListener('mouseenter',() => {
    container.classList.add('hover-left');
});
left.addEventListener('mouseleave',() => {
    container.classList.remove('hover-left');
});
right.addEventListener('mouseenter',() => {
    container.classList.add('hover-right');
});
right.addEventListener('mouseleave',() => {
    container.classList.remove ('hover-right');
});