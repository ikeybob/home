const rock = "rock"
const paper = "paper"
const sci = "sci"

function main(userChoice) {
  let result = winDecider(compChoice(),userChoice)
  alert(result)
  return result
}

function compChoice() {
  choice = ["rock","paper","sci"]
  compChoice = choice[Math.floor(Math.random() * choice.length)]
  return compChoice 
}

function winDecider(compChoice,userChoice) {
  if (compChoice === userChoice){
    return "draw"
  }
  if (compChoice === "rock" && userChoice === "sci"){
    return "loss"
  }
  if (compChoice === "paper" && userChoice === "rock"){
    return "loss"
  }
  if (compChoice === "sci" && userChoice === "paper"){
    return "loss"
  }
  if (compChoice === "sci" && userChoice === "rock"){
    return "win"
  }
    if (compChoice === "paper" && userChoice === "sci"){
    return "win"
  }
    if (compChoice === "rock" && userChoice === "paper"){
    return "win"
  }
}

console.log(main("sci"))