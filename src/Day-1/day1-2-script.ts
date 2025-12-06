import { readInput } from "../utils/index.js"

const DAY = 1
const input = readInput(DAY, "input.txt")

function rotateDial(
  startPosition: number,
  minPosition: number,
  maxPosition: number,
  rotation: string
): number[] {
  const rotationDirection = rotation.charAt(0)
  const numSteps = parseInt(rotation.slice(1), 10)

  let currentPosition = startPosition
  let numOfPointsAtZero = 0

  for (let i = 0; i < numSteps; i++) {
    if (currentPosition === 0) {
      numOfPointsAtZero++
    }

    if (rotationDirection === "R") {
      currentPosition++
    } else if (rotationDirection === "L") {
      currentPosition--
    }

    if (currentPosition > maxPosition) {
      currentPosition = minPosition
    } else if (currentPosition < minPosition) {
      currentPosition = maxPosition
    }
  }

  return [currentPosition, numOfPointsAtZero]
}

function result(input: string): number {
  const rotationsArr: string[] = input.split("\n")
  const numberOfRotations: number = rotationsArr.length
  const minValue = 0
  const maxValue = 99
  const startPosition = 50
  let currentPosition = startPosition

  let numOfPointsAtZeroTotal = 0

  for(let i = 0; i < numberOfRotations; i++) {
    let numOfPointsAtZeroInCurrentRotation = 0
    ;[currentPosition, numOfPointsAtZeroInCurrentRotation] = rotateDial(
      currentPosition,
      minValue,
      maxValue,
      rotationsArr[i]
    )
    numOfPointsAtZeroTotal += numOfPointsAtZeroInCurrentRotation;

    console.log(`Rotation: ${rotationsArr[i]}, Position after rotation: ${currentPosition}`)
  }

  return numOfPointsAtZeroTotal
}

// ====================================
// Results
// ====================================
console.log(`🎄 Advent of Code - Day ${DAY}`)

console.log("========================\n")
console.log("Times pointed at 0: %d", result(input))
