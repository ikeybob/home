function takePenalty(direction) {
  alert(direction)
}

function keeperPenalty() {
  let dive = Math.floor(Math.random() * 3) + 1
  if (dive == 1) {
    dive = "left"
  }
  if (dive == 2) {
    dive = "middle"
  }
  if (dive == 3) {
    dive = "right"
  }
  alert(dive)
}