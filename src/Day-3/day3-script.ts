import { readInput } from "../utils/index.js"

const DAY = 3
const input = readInput(DAY, "input.txt")

function result(input: string): number | string {
  const batteryBanksArr: string[] = input.split("\n")
  const digits: string[] = ["9", "8", "7", "6", "5", "4", "3", "2", "1"]
  const largestPossibleNumsArr: number[] = []

  batteryBanksArr.forEach((batteryBank) => {
    const singleBatteryBankArr = batteryBank.split("")
    let largestDigitIndexStr: string = ""
    let secondLargestDigitIndexStr: string = ""

    digits.forEach((digit) => {
      const foundDigitIndex = singleBatteryBankArr.indexOf(digit)
      const isLastDigit = foundDigitIndex === singleBatteryBankArr.length - 1

      if (
        foundDigitIndex === -1 ||
        largestDigitIndexStr !== "" ||
        isLastDigit
      ) {
        return
      }

      largestDigitIndexStr = foundDigitIndex.toString()
    })

    const largestDigitIndexInt = parseInt(largestDigitIndexStr, 10)

    digits.forEach((digit) => {
      const foundDigitIndex = singleBatteryBankArr.indexOf(
        digit,
        largestDigitIndexInt + 1
      )

      if (foundDigitIndex === -1 || secondLargestDigitIndexStr !== "") {
        return
      }

      secondLargestDigitIndexStr = foundDigitIndex.toString()
    })

    const secondLargestDigitIndexInt = parseInt(secondLargestDigitIndexStr, 10)

    const largestPossibleNumStr =
      batteryBank[largestDigitIndexInt] +
      batteryBank[secondLargestDigitIndexInt]

    largestPossibleNumsArr.push(parseInt(largestPossibleNumStr, 10))
  })

  return largestPossibleNumsArr.reduce((sum, number) => sum + number)
}

// ====================================
// Results
// ====================================
console.log(`🎄 Advent of Code - Day ${DAY}`)
console.log("========================\n")
console.log("Result:", result(input))
