import {
  areaOfRegularHexagon,
  bubbleSort,
  calculateArea,
  calculateHypotenuse,
  compareTriangleAreas,
  factorial,
  getTriangleType,
  selectionSort,
  sumFibonacci,
} from './calculations'

export const handleTriangleCalculations = () => {
  const a = 3
  const b = 4

  const area = calculateArea(a, b)
  const hypotenuse = calculateHypotenuse(a, b)
  console.log(`Площадь треугольника: ${area}`)
  console.log(`Гипотенуза треугольника: ${hypotenuse}`)
}

export const handleGetTriangle = () => {
  const a = 3
  const b = 4
  const c = 5

  console.log(getTriangleType(a, b, c))
}

export const handleGetFactorial = () => {
  const n = 0

  const result = factorial(n)
  console.log(`${n}! = ${result.toString()}`)
}

export const handleGetFibonacci = () => {
  const limit = 1000

  const result = sumFibonacci(limit)
  console.log('Сумма всех чисел Фибоначчи, до ', limit, ':', result)
}

export const handleGetSelectionSort = () => {
  const arrayToSort = [48, 24, 6, 20, 9]
  console.log('Исходный массив:', arrayToSort)

  const sortedArray = selectionSort(arrayToSort)
  console.log('Отсортированный массив:', sortedArray)
}

export const handleGetBubbleSort = () => {
  const arrayToSort = [48, 24, 6, 20, 9]
  console.log('Исходный массив:', arrayToSort)

  const sortedArray = bubbleSort(arrayToSort)
  console.log('Отсортированный массив:', sortedArray)
}

export const handleGetHexagonArea = () => {
  const sideLength = 5

  const hexagonArea = areaOfRegularHexagon(sideLength)
  console.log(`Площадь шестиугольника со стороной ${sideLength} равна ${hexagonArea}`)
}

export const handleGetTriangles = () => {
  const result = compareTriangleAreas(
    0,
    0, // A1
    4,
    0, // A2
    0,
    3, // A3
    2,
    0, //  1
    6,
    0, // B2
    2,
    5, // B3
  )

  console.log(result)
}
