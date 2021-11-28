const billInput = document.querySelector('#bill-input');
const peopleInput = document.querySelector('#people-input');
const billInputBkg = document.querySelector('#input-bkg-1');
const peopleInputBkg = document.querySelector('#input-bkg-2');
const customInput = document.querySelector('#custom-input');
const cantBe0 = document.querySelector('#cant-be-0');
const resetBtn = document.querySelector('#btn-reset');

const tipAmountChange = document.querySelector('#tip-amount-change');
const totalValueChange = document.querySelector('#total-value-change');

let bill = 0
let nOfPeople = 1

billInput.addEventListener('focus', () => {
    billInputBkg.style.outline = `solid 3px #26c0ab`;
})

billInput.addEventListener('blur', () => {
    bill = parseFloat(billInput.value);
    billInputBkg.style.outline = 'none';
    updateValues()
})

peopleInput.addEventListener('focus', () => {
    peopleInputBkg.style.outline = 'solid 3px #26c0ab';
})

peopleInput.addEventListener('blur', () => {
    nOfPeople = peopleInput.value;
    console.log(nOfPeople)
    if (nOfPeople == 0) {
        peopleInputBkg.style.outline = 'solid 3px #eb593f'
        cantBe0.innerText = "Can't be zero"
        tipAmountChange.innerText = "0.00"
        totalValueChange.innerText = "0.00"

    } else {
        peopleInputBkg.style.outline = 'none'
        cantBe0.innerText = ''
        updateValues()
    }
})

const tipButtons = document.querySelectorAll('.tip-btn');


function removeActiveId() {
    for (let btn of tipButtons) {
        btn.removeAttribute('id')
    }
}

let tipValue = 1.10

customInput.addEventListener('focus', () => {
    removeActiveId()
    customInput.style.outline = `solid 3px #26c0ab`;
    tipValue = parseFloat(((customInput.value) / 100) + 1);
})

customInput.addEventListener('change', () => {
    tipValue = parseFloat(((customInput.value) / 100) + 1);
    updateValues()
})

for (let btn of tipButtons) {
    btn.addEventListener('click', function () {
        removeActiveId();
        customInput.style.outline = 'none';
        btn.id = 'active-btn'
        tipValue = parseFloat(btn.value);
        updateValues()
    })
}

function updateValues() {
    if (nOfPeople == 0) {
        tipAmountChange.innerText = '0.00';
        totalValueChange.innerText = '0.00';
    } else {
        const individualTipAmount = (((bill * tipValue) - bill) / nOfPeople).toFixed(2)
        const totalPerPerson = ((bill * tipValue) / nOfPeople).toFixed(2)
        tipAmountChange.innerText = individualTipAmount;
        totalValueChange.innerText = totalPerPerson;
    }
}

resetBtn.addEventListener('click', () => {
    bill = 0
    tipValue = 1.10
    nOfPeople = 1

    billInput.value = 0
    customInput.value = ""
    peopleInput.value = ""

    tipAmountChange.innerText = '0.00';
    totalValueChange.innerText = '0.00';

    for (let btn of tipButtons) {
        removeActiveId();
        customInput.style.outline = 'none';
    }
    tipButtons[1].id = 'active-btn'
})

//adicionar event listeners para todos
//ele deve: remover o #active-btn e todos
//adicionar o #active btn no que foi clicado
//tualizar a variavel tip-percent baseado no botão que foi clicado

//custom-btn: change event listener
//remove o #active-btn dos outros
//atualizar a variável com o valor inserido

//dois decimais no máximo






