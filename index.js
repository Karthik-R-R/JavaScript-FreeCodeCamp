
// let welcomeElement = document.getElementById("welcome-el")
let saveEl = document.getElementById('save-el')
// console.log(welcomeElement)
// let name = "Karthik"
// let greeting = "Welcome back, "
// welcomeElement.innerText = greeting + name
// welcomeElement.innerText += "👋"
let count=0
function increment(){
    count += 1
    document.getElementById("count-el").innerText = count
    // console.log(count)
}
function save()
{
    let countStr = count + ' - '
    saveEl.textContent += countStr
    console.log(count)
    document.getElementById("count-el").innerText = 0
    count=0
}