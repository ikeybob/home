let goals = 0
let shots = 0

function takePenalty(direction) {
  const keeperDirection = keeperPenalty()
  shots += 1

  if (direction === keeperDirection) {
    document.getElementById("result").textContent =
      `Saved! You shot ${direction}; the goalkeeper dived ${keeperDirection}.`
  } else {
    goals += 1
    document.getElementById("result").textContent =
      `Goal! You shot ${direction}; the goalkeeper dived ${keeperDirection}.`
  }

  updateScore()
}

function keeperPenalty() {
  const directions = ["left", "centre", "right"]
  const dive = directions[Math.floor(Math.random() * directions.length)]
  const positions = { left: "12%", centre: "50%", right: "88%" }

  document.getElementById("goalkeeper").style.left = positions[dive]
  document.getElementById("result").textContent = `The goalkeeper dives ${dive}.`
  return dive
}

function updateScore() {
  document.getElementById("score").textContent = `Goals: ${goals} | Shots: ${shots}`
}