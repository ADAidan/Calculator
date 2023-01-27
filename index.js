const buttonIds = ['open-parenthesis', 'close-parenthesis', 'percent', 'clear',
                   'seven', 'eight', 'nine', 'divide',
                   'four', 'five', 'six', 'multiply',
                   'one', 'two', 'three', 'minus',
                   'zero', 'period', 'equal', 'plus']

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < buttonIds.length; i++) {
        clearDisplay()
        document.querySelector(`#${buttonIds[i]}`).addEventListener('click', (event) => {
            let display = document.querySelector('#calculator-display')
            if (event.target.innerHTML === 'AC') {
                clearDisplay()
                return
            }
            if (event.target.innerHTML === '=') {
                calculate(display.value)
            } else {
                display.value += event.target.innerHTML
                console.log(event.target.innerHTML)
            }
        })
    }
})

function clearDisplay() {
    document.querySelector('#calculator-display').value = ''
}

function calculate(equation) {
    let result = math.evaluate(equation)
    document.querySelector('#calculator-display').value = result
    console.log(result)
}
