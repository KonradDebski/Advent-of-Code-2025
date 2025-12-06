import { readInput } from "../utils/index.js"

const DAY = 2
const input = readInput(DAY, "input.txt")

function result(input: string): number {
  const rangesArr: string[] = input.split(',')

  const invalidIDsArr: number[] = []

  rangesArr.forEach((range) => {
    const [minValueStr, maxValueStr] = range.split('-')
    const minValueInt = parseInt(minValueStr)
    const maxValueInt = parseInt(maxValueStr)

    for (let i = minValueInt; i <= maxValueInt; i++) {
      const currentValueStr = i.toString()
      const currentValueStrLength = currentValueStr.length
      if (currentValueStrLength % 2 !== 0) continue

      const currentValueStrMiddle = Math.floor(currentValueStrLength / 2)
      const currentValueFirstHalf = currentValueStr.slice(0, currentValueStrMiddle)
      const currentValueSecondHalf = currentValueStr.slice(currentValueStrMiddle, currentValueStrLength)

      if (currentValueFirstHalf !== currentValueSecondHalf) continue

      invalidIDsArr.push(i)
    }
  })

  return invalidIDsArr ? invalidIDsArr.reduce((sum, currentValue) => sum += currentValue) : 0
}

// ====================================
// Results
// ====================================
console.log(`🎄 Advent of Code - Day ${DAY}`)

console.log("========================\n")
console.log("Result after adding all invalid IDs: %d", result(input))
