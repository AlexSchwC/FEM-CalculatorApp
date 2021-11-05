const billInput = document.querySelector('#bill-input');
const peopleInput = document.querySelector('#people-input');
const billInputBkg = document.querySelector('#input-bkg-1');
const peopleInputBkg = document.querySelector('#input-bkg-2');
const customInput = document.querySelector('#custom-input');

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

const tipButtons = document.querySelectorAll('.tip-btn');


function removeActiveId () {
    for (let btn of tipButtons) {
        btn.removeAttribute('id')
    }
}

let tipValue = 10

customInput.addEventListener('focus', () => {
    removeActiveId()
    customInput.style.outline = `solid 3px #26c0ab`;
    tipValue = parseFloat(customInput.value);
})

customInput.addEventListener('change', () => {
    tipValue = parseFloat(customInput.value);
})

for(let btn of tipButtons) {
        btn.addEventListener('click', function (evt) {
            removeActiveId();
            customInput.style.outline = 'none';
            btn.id = 'active-btn'
            tipValue = parseInt(btn.value);
    })
}

customInput.addEventListener('keydown', function (evt) {
    
})

//adicionar event listeners para todos
//ele deve: remover o #active-btn e todos
//adicionar o #active btn no que foi clicado
//tualizar a variavel tip-percent baseado no botão que foi clicado

//custom-btn: change event listener
//remove o #active-btn dos outros
//atualizar a variável com o valor inserido

//custom-btn não pode aceitar mais de 3 numeros

//dois decimais no máximo para tudo






