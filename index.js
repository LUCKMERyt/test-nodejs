// const CC = require('currency-converter-lt')
// let currencyConverter = new CC({from:"USD", to:"JPY", amount:100, isDecimalComma:true})

// currencyConverter.convert().then((response) => {
//     console.log(response) //or do something else
// }).catch((err) => {
//     console.log(err)
// })

// console.log(currencyConverter.convert(100)) //or do something else



// // * использование мождуля встроенного в Node.js os-операционная система
// const os = require('os');
// console.log(os.platform())
// // console.log(os.arch())



// // * использование своево мождуля
// const my_math = require('./my_math');

// console.log(my_math.add(1, 2))
// console.log(my_math.minus(1, 2))

// let res1 = my_math.add(10, 20);
// let res2 = my_math.minus(10, 20);
// console.log(`Результат сложения: ${res1} \nРезультат вычитания: ${res2}`)



// const fs = require('fs');// ? модуль для работы с файлами
// // let result = fs.readFileSync(`some.txt`, 'utf-8')
// // fs.writeFileSync('some.txt', '\nSome test')// ? перезаписывает файл, если он уже существует, если его нет, то создаёт новый файл и записывает в него текст */

// fs.readFile(`some.txt`, 'utf-8', (err, data) => {

//     fs.writeFile('some.txt', data + '\nSome test', (err, data) => {// ? добавляет текст в конец файла, если он уже существует, если его нет, то создаёт новый файл и записывает в него текст */
//         console.log('текст добавлен в файл')
//     })
// })



//  // * создание папки и файла внутри неё */
// const fs = require('fs');

// fs.mkdir('CSS',()=>{// ? создаёт папку, если папка уже существует, то выдаёт ошибку
//     console.log('папка CSS создана')
//     fs.writeFile('CSS/style.css', '\nbody{background-color: red;}', (err, data) => {
//         console.log('файл style.css создан и в него записан текст')
//     })
// })
//  // * удаление папки и файла внутри неё */
// fs.unlink('./CSS/style.css', (err) => {// ? удаляет файл, если файл существует
//     console.log('файл style.css удален')
//     fs.rmdir('./CSS', () => {// ? удаляет папку, если папка существует и в ней нет файлов
//         console.log('папка CSS удалена')
//     })
// })




