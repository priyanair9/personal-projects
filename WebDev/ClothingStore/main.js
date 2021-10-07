let img = document.querySelector('#image');
let greenButton = document.querySelector('#green');
let redButton = document.querySelector('#red');
let blueButton = document.querySelector('#blue');

greenButton.addEventListener('click', () => {
    img.src = 'images/Screen Shot 2021-07-09 at 5.25.46 pm.png';
    greenButton.style.borderColor = '#000000';
    redButton.style.borderColor = '#f46a6a';
    blueButton.style.borderColor = '#c7dbfa';
})

redButton.addEventListener('click', () => {
    img.src = 'images/Screen Shot 2021-07-09 at 5.30.12 pm.png';
    redButton.style.borderColor = '#000000';
    greenButton.style.borderColor = '#5ea089';
    blueButton.style.borderColor = '#c7dbfa';
})

blueButton.addEventListener('click', () => {
    img.src = 'images/Screen Shot 2021-07-09 at 5.31.37 pm.png';
    blueButton.style.borderColor = '#000000';
    redButton.style.borderColor = '#f46a6a';
    greenButton.style.borderColor = '#5ea089';
})