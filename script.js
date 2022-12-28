// task 1  Напишите функцию, которая принимает массив чисел, строк и булеан если тип булеан сделайте противоположное значение.
// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false] 
// получаем let newArr = [1,2,3,4,”string”, “hello”, false, true]

// let arr = [1,2,3,4, "string", "hello", true, false]

// let newArr = arr.map((el) => {
//     if(el === true || el === false){
//         return !el 
//     }else{
//         return el
//     }
// })
// console.log(newArr)

// task 2

// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.

// task 2
// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.
//     Пример входных данных: "test"
//     Результат: "tteesstt"

// let str = "test"
// let newStr = str.split("")
// let secondStr = newStr.map((el, idx) => {
//     return ${el}${el} 
// })
// let lastStr = secondStr.join("")
// console.log(lastStr)


// task 3
// Напишите функцию, которая принимает строку и выводит индекс каждого символа
// let str = [1,2,3,4,5]
// let newStr = str.map((el, idx) => {
//     return idx
// })
// console.log(newStr)


// task 4
// Напишите функцию которая принимает массив с четными и нечетными числами
//и возвращает вместо четных “четное” вместо нечетных “нечетное”

// let str = [1,2,3,4,5,6]
// let newStr = str.map((el) => {
//     return el % 2 === 0?"четное": "нечетное"
// })
// console.log(newStr)

// task 5
// Напишите функцию которая принимает строку “головоломка” и заменяет все буквы “o” на  “a”
// let str = "головоломка"
// let newStr = str.replaceAll("о","а")
// console.log(newStr)

// task 6
// Напишите функцию которая принимает строку "           hello world.        " и удаляет отступы по краям
// let str ="           hello world.        "
// let newStr = str.trim()
// console.log(newStr)

// task 7
// напишите функцию которая принимает массив [1,2,3,4,5,6,7,8] и выводит “четное” 
// если число четное “нечетное” если число нечетное. Используйте тернарное выражение
// let str = [1,2,3,4,5,6,7,8]
// let newStr = str.map((el) => {
//     return el % 2 === 0?"четное": "нечетное"
// })
// console.log(newStr)


// task-9
//  Вам дана переменная str = 'Максимально Ужасно, переделывай'.
//     Выведите в консоль все слова этой строки, используя метод split. Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]

// let str = 'Максимально Ужасно, переделывай'
// let newStr = str.split(" ")
// console.log(newStr)