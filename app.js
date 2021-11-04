const billInput = document.querySelector('#bill-input');
const peopleInput = document.querySelector('#people-input')
const billInputBkg = document.querySelector('#input-bkg-1');
const peopleInputBkg = document.querySelector('#input-bkg-2');

billInput.addEventListener('focus', () => {
    billInputBkg.style.outline = `solid 3px #26c0ab`;
})

billInput.addEventListener('blur', () => {
    billInputBkg.style.outline = 'none';
})

peopleInput.addEventListener('focus', () => {
    peopleInputBkg.style.outline = `solid 3px #26c0ab`;
})

peopleInput.addEventListener('blur', () => {
    peopleInputBkg.style.outline = 'none';
})




