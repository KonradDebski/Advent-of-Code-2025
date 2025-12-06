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
      const currentValueStr = i.toString(10)
      const regex = /^(\d+?)\1+$/

      if (regex.test(currentValueStr)) {
        invalidIDsArr.push(i)
      }
    }
  })

  return invalidIDsArr.length ? invalidIDsArr.reduce((sum, currentValue) => sum += currentValue) : 0
}

// ====================================
// Results
// ====================================
console.log(`🎄 Advent of Code - Day ${DAY}`)

console.log("========================\n")
console.log("Result after adding all invalid IDs: %d", result(input))
