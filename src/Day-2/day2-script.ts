import { readInput } from "../utils/index.js"

const DAY = 2
const input = readInput(DAY, "input.txt")

console.log("📝 Input:\n")
console.log(input)
console.log("========================")

function result(_input: string): number {
  return 0
}

// ====================================
// Results
// ====================================
console.log(`🎄 Advent of Code - Day ${DAY}`)

console.log("========================\n")
console.log("Times pointed at 0: %d", result(input))
