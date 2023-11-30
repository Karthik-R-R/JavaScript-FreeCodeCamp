let num1=8
let num2=2
let number1 = document.getElementById('num1-el')
let number2 = document.getElementById('num2-el')
number1.textContent=num1
number2.textContent=num2
let sumel = document.getElementById('sum-el')

function add(){
    let result = num1+num2
    sumel.textContent = result
    result=0
}
function sub(){
    let result = num1-num2
    sumel.textContent = result
    result=0
}
function mul(){
    let result = num1*num2
    sumel.textContent = result
    result=0
}
function div(){
    let result = num1/num2
    sumel.textContent = result
    result=0
}