function takePenalty(direction) {
  alert(direction)
}

function keeperPenalty() {
  let dive = Math.floor(Math.random() * 3) + 1
  let position = 10
  if (dive == 1) {
    dive = "left"
    document.getElementById("goalkeeper").style.left = position + "px"
  }
  if (dive == 2) {
    dive = "middle"
    document.getElementById("goalkeeper").style.left = position + "px"
  }
  if (dive == 3) {
    dive = "right"
    document.getElementById("goalkeeper").style.left = position + "px"
  }
  alert(dive)
  
}