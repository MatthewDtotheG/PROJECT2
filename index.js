

const side1 = document.getElementById('side1')
const side2 = document.getElementById('side2')
const container = document.getElementById('container')
const operation = document.getElementById('operation')
const answer = document.getElementById('answer')
// const add = document.getElementById('add')
// const subtract = document.getElementById('subtract')
// const multiply = document.getElementById('multiply')
// const divide = document.getElementById('divide')

container.addEventListener('submit', calculate)

// function myFunction() {
//     var x = document.getElementById("container").selectedIndex;
//     console.log(document.getElementsByTagName("option")[x].value);
// }

function calculate(e){
  e.preventDefault()
  switch(operation.value) {
    case 'add':
        answer.innerText = (parseInt(side1.value) + parseInt(side2.value))
        break;
    case 'subtract':
        answer.innerText = (parseInt(side1.value) - parseInt(side2.value))
        break;
    case 'multiply':
        answer.innerText = (parseInt(side1.value) * parseInt(side2.value))
        break;
    // case 'divide'
    //     answer.innerText = (parseInt(side1.value) / parseInt(side2.value))
    //     break;
     }
  }
