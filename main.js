
let first = document.querySelector("#num_one");

let second = document.querySelector("#num_two");

const answer = document.querySelector("#answer");

const equals = document.querySelector("#calculate");

let operands = document.querySelector("#mathing");

// document.querySelector('#mathing').addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.log(e.submitter.id)
// })

// take in the input.value of the operand button that the user pushes.

operands.addEventListener('click', (e) => {
  e.preventDefault()
  const operator = e.target.dataset.operate
  console.log(operator)
  let a = parseInt(first.value)
  let b = parseInt(second.value)
  // console.log(a,b)
    if (operator == 'add'){
      let result = a+b
  } else if (operator == 'subtract'){
      let result = a-b
      console.log(result)
  } else if (operator == 'multiply'){
      let result = a*b
  } else {
      let result = a/b
  }
  answer.value = result;
})




  



