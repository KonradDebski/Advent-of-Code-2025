import { readInput } from "../utils/index.js"

const DAY = 3
const input = readInput(DAY, "example.txt")

function monotonicStack(array: number[]): number[] {
  const n = array.length
  const result = new Array(n).fill(0)
  const stack: number[] = []

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && array[i] > array[stack[stack.length - 1]]) {
      const prevIndex = stack.pop()
      if (prevIndex) {
        result[prevIndex] = i - prevIndex
      }
    }
    stack.push(i)
  }
  return result
}

function result(input: string): number | string {
  const batteryBanksArr: string[] = input.split("\n")
  const digits: string[] = ["9", "8", "7", "6", "5", "4", "3", "2", "1"]
  const largestPossibleNumsArr: number[] = []

  batteryBanksArr.forEach((batteryBank) => {
    const batteryBankStrArr = batteryBank.split("")
    const batteryBankIntArr = batteryBankStrArr.map(Number)
    const largestPossibleNumArr = monotonicStack(batteryBankIntArr)
  })

  return largestPossibleNumsArr.reduce((sum, number) => sum + number)
}

// ====================================
// Results
// ====================================
console.log(`🎄 Advent of Code - Day ${DAY}`)
console.log("========================\n")
console.log("Result:", result(input))
