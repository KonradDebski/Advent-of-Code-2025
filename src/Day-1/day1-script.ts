import { readInput } from "../utils/index.js"

const DAY = 1
const input = readInput(DAY, "example.txt")

console.log("📝 Input:\n")
console.log(input)
console.log("========================")

function result(input: string): number | string {
  return 0
}

// ====================================
// Results
// ====================================
console.log(`🎄 Advent of Code - Day ${DAY}`)
console.log("========================\n")
console.log("Result:", result(input))
