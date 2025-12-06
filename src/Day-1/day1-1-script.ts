import { readInput } from "../utils/index.js"

const DAY = 1
const input = readInput(DAY, "input.txt")

console.log("📝 Input:\n")
console.log(input)
console.log("========================")

function rotateDial(
  startPosition: number,
  minPosition: number,
  maxPosition: number,
  rotation: string
): number {
  const direction = rotation.charAt(0)
  const steps = parseInt(rotation.slice(1), 10)

  let totalDistance = 0

  if (direction === "R") {
    totalDistance += steps
  } else if (direction === "L") {
    totalDistance -= steps
  }

  // Matematyczny wzór dla owijania w zakresie [minPosition, maxPosition]
  const range = maxPosition - minPosition + 1
  const currentPosition =
    ((((startPosition - minPosition + totalDistance) % range) + range) %
      range) +
    minPosition

  console.log(`Rotation: ${rotation}, New Position: ${currentPosition}`)

  return currentPosition
}

function result(input: string): number {
  const instructions = input.split("\n")
  const numberOfInstructions: number = input.split("\n").length
  const startPosition = 50
  const minPosition = 0
  const maxPosition = 99

  let _numTimesPointingAtZero = 0

  let resultPosition = startPosition
  for (let i = 0; i < numberOfInstructions; i++) {
    const instruction = instructions[i]
    resultPosition = rotateDial(
      resultPosition,
      minPosition,
      maxPosition,
      instruction
    )
    if (resultPosition === 0) {
      _numTimesPointingAtZero++
    }
  }

  return _numTimesPointingAtZero
}

// ====================================
// Results
// ====================================
console.log(`🎄 Advent of Code - Day ${DAY}`)

console.log("========================\n")
console.log("Times pointed at 0: %d", result(input))
