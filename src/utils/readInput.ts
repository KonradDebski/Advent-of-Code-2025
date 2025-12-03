import { readFileSync } from "fs"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

/**
 * Reads input file for a given day
 * @param day - Day number (e.g., 1, 2, 3...)
 * @param filename - Name of the input file (default: 'input.txt')
 * @returns Content of the input file as string
 */
export function readInput(day: number, filename = "input.txt"): string {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const inputPath = join(__dirname, "..", `Day-${day}`, "input", filename)
  return readFileSync(inputPath, "utf-8")
}

/**
 * Reads input and splits by lines
 */
export function readInputLines(day: number, filename = "input.txt"): string[] {
  return readInput(day, filename).trim().split("\n")
}

/**
 * Reads input and splits by double newlines (for grouped data)
 */
export function readInputGroups(day: number, filename = "input.txt"): string[] {
  return readInput(day, filename).trim().split("\n\n")
}

/**
 * Reads input and parses as numbers (one per line)
 */
export function readInputNumbers(
  day: number,
  filename = "input.txt"
): number[] {
  return readInputLines(day, filename).map(Number)
}
