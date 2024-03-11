const input = document.querySelector('.input')
const numberButtons = document.querySelectorAll('.number')
const operandButtons = document.querySelectorAll('.operand')
let inputNum = document.createTextNode('')
input.appendChild(inputNum)
let tempValues = []

const eraseBtn = document.querySelector('.erase')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const asteriskBtn = document.querySelector('.asterisk')
const divideBtn = document.querySelector('.divide')
// const equalBtn = document.querySelector('.plus')

let minusIsClicked = false
let plusIsClicked = false
let asteriskIsClicked = false
let divideIsClicked = false

operandButtons.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.textContent === '=' && inputNum.textContent !== '' && plusIsClicked) {
            console.log(tempValues)
            plusBtn.style.backgroundColor = '#b95d00';
            inputNum.textContent = parseFloat(inputNum.textContent) + tempValues[tempValues.length - 1]
        } else if (button.textContent === '=' && inputNum.textContent !== '' && minusIsClicked) {
            console.log(tempValues)
            minusBtn.style.backgroundColor = '#b95d00';
            inputNum.textContent = tempValues[tempValues.length - 1] - parseFloat(inputNum.textContent)
        }
        else if (button.textContent === '=' && inputNum.textContent !== '' && asteriskIsClicked) {
            console.log(tempValues)
            asteriskBtn.style.backgroundColor = '#b95d00';
            inputNum.textContent = tempValues[tempValues.length - 1] * parseFloat(inputNum.textContent)
        }
        else if (button.textContent === '=' && inputNum.textContent !== '' && divideIsClicked) {
            console.log(tempValues)
            divideBtn.style.backgroundColor = '#b95d00';
            inputNum.textContent = Math.floor(tempValues[tempValues.length - 1] / parseFloat(inputNum.textContent) * 10) / 10
        }
        if (button.textContent === '+') {
            tempValues.push(parseFloat(inputNum.textContent))
            inputNum.textContent = ''
            plusIsClicked = true
            minusIsClicked = false
            asteriskIsClicked = false
            divideIsClicked = false
            plusBtn.style.backgroundColor = '#9a4e00';
        }
        if (button.textContent === '-') {
            tempValues.push(parseFloat(inputNum.textContent))
            inputNum.textContent = ''
            minusIsClicked = true
            plusIsClicked = false
            asteriskIsClicked = false
            divideIsClicked = false
            minusBtn.style.backgroundColor = '#9a4e00';

        }
        if (button.textContent === '*') {
            tempValues.push(parseFloat(inputNum.textContent))
            inputNum.textContent = ''
            asteriskIsClicked = true
            plusIsClicked = false
            minusIsClicked = false
            divideIsClicked = false
            asteriskBtn.style.backgroundColor = '#9a4e00';
        }
        if (button.textContent === '/') {
            tempValues.push(parseFloat(inputNum.textContent))
            inputNum.textContent = ''
            divideIsClicked = true
            asteriskIsClicked = false
            plusIsClicked = false
            minusIsClicked = false
            divideBtn.style.backgroundColor = '#9a4e00';
        }
    })
})

eraseBtn.addEventListener('click', () => {
    inputNum.textContent = ''
    tempValues.splice(0, tempValues.length)
})

function inputNumbers() {
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            inputNum.textContent += button.textContent
        })
    })
}

inputNumbers()