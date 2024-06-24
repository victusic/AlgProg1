export const calculateArea = (a: number, b: number) => (a * b) / 2
export const calculateHypotenuse = (a: number, b: number) => Math.sqrt(a * a + b * b)

export const getTriangleType = (a: number, b: number, c: number) => {
  if (a + b > c && a + c > b && b + c > a) {
    switch (true) {
      case a === b && b === c:
        return 'Равносторонний треугольник'
      case a === b || b === c || a === c:
        return 'Равнобедренный треугольник'
      default:
        return 'Разносторонний треугольник'
    }
  }
  return 'Такой треугольник не существует'
}

export const factorial = (n: number) => {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

export const sumFibonacci = (limit: number) => {
  let sum = 0
  let a = 1
  let b = 1
  let c = a + b

  while (c <= limit) {
    sum += c
    a = b
    b = c
    c = a + b
  }

  return sum
}

export const selectionSort = (arr: number[]) => {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }

    if (minIndex !== i) {
      const temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }

  return arr
}

export const bubbleSort = (arr: number[]) => {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    let swapped = false

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        swapped = true
      }
    }

    if (!swapped) break
  }

  return arr
}

export const areaOfRegularHexagon = (sideLength: number) => {
  const height = (Math.sqrt(3) / 2) * sideLength
  const triangleArea = calculateArea(sideLength, height)
  return 6 * triangleArea
}

export const triangleAreaWithCoordinates = (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) =>
  Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2)

export const compareTriangleAreas = (
  x1A: number,
  y1A: number,
  x2A: number,
  y2A: number,
  x3A: number,
  y3A: number,
  x1B: number,
  y1B: number,
  x2B: number,
  y2B: number,
  x3B: number,
  y3B: number,
) => {
  const areaA = triangleAreaWithCoordinates(x1A, y1A, x2A, y2A, x3A, y3A)
  const areaB = triangleAreaWithCoordinates(x1B, y1B, x2B, y2B, x3B, y3B)

  if (areaA > areaB) return 'Первый треугольник больше'
  if (areaB > areaA) return 'Второй треугольник больше'
  return 'Площади треугольников равны'
}
