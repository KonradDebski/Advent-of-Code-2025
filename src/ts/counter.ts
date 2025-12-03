export default function setupCounter(element: HTMLButtonElement) {
  const btnElement = element
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    btnElement.innerHTML = `count is ${counter}`
  }
  btnElement.addEventListener("click", () => setCounter(counter + 1))
  setCounter(0)
}
