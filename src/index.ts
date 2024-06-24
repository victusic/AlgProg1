import {
  handleGetBubbleSort,
  handleGetFactorial,
  handleGetFibonacci,
  handleGetHexagonArea,
  handleGetSelectionSort,
  handleGetTriangle,
  handleGetTriangles,
  handleTriangleCalculations,
} from './tasks'
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const start = () => {
  rl.question(
    `\n\nВыберите задание: 
    1 - Тема 1: 1) Даны катеты прямоугольного треугольника. Найти его гипотенузу и площадь
    2 - Тема 1: 2) Даны произвольные числа a, b, c. Если существует треугольник со сторонами a, b, c, то определить, какой это треугольник: равносторонний, равнобедренный или разносторонний. Если треугольник не существует, вывести соответствующее сообщение
    3 - Тема 2: 2) Дано натуральное число n. Вычислить n!
    4 - Тема 2: 3) Вычислить сумму всех членов ряда Фибоначчи, не превосходящую 1000
    5 - Тема 3: 5) Реализовать сортировку массива методом выбора
    6 - Тема 3: 6) Реализовать сортировку массива методом пузырька
    7 - Тема 4: 2) Вычислить площадь правильного шестиугольника со стороной A, используя подпрограмму вычисления площади треугольника
    8 - Тема 4: 3) Даны координаты вершин 2 треугольников, найти, площадь какого из них больше, используя подпрограмму вычисления площади треугольника.
    \n`,
    (choice: string) => {
      switch (choice.trim()) {
        case '1':
          handleTriangleCalculations()
          start()
          break
        case '2':
          handleGetTriangle()
          start()
          break
        case '3':
          handleGetFactorial()
          start()
          break
        case '4':
          handleGetFibonacci()
          start()
          break
        case '5':
          handleGetSelectionSort()
          start()
          break
        case '6':
          handleGetBubbleSort()
          start()
          break
        case '7':
          handleGetHexagonArea()
          start()
          break
        case '8':
          handleGetTriangles()
          start()
          break
        default:
          return
      }
    },
  )
}

start()
