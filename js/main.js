
let calculation = document.querySelector(".screen-container #calculation")
let answer = document.querySelector(".screen-container #answer")
answer.innerText = "0"

let btnDelete = document.querySelector(".calculator #btnDelete")
function show(num) {
  calculation.innerText += num
  if (btnDelete.disabled) {
    btnDelete.disabled = false
  }
  calculate()
  resultFormat()
  showCalculation()
}

function calculate(){
  const expression = new String(calculation.innerText)
  answer.innerText = eval(String(expression))
}

function allClear(){
  calculation.innerText = ""

  answer.innerText = "0"
  answer.style.fontSize = 'xxx-large'
  answer.style.color = "#000000"
}
function deleteChar(){
  let arr = calculation.innerText.split("")
  arr.pop()
  calculation.innerText = arr.join("")
}


const resultFormat = () => {
  answer.innerText = `= ${answer.innerText}`
}

const showAns = () => {
  answer.style.fontSize = 'xxx-large'
  answer.style.color = "#000000"

  calculation.style.color = 'grey'
  calculation.style.fontSize = 'large'

  //disable delete button
  btnDelete.disabled = true
}

const showCalculation = () => {
  calculation.style.fontSize = 'xxx-large'
  calculation.style.color = "#000000"

  answer.style.color = 'grey'
  answer.style.fontSize = 'large'
}