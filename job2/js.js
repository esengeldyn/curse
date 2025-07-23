// 1 задача

// let str = prompt('Ваше имя')
// let str2 = str.length

// let otvet = 'Имя короткое и милое!'
// let otvet2 = 'Какое длинное имя!'


// if ( str2 < 5){
//     alert('Имя короткое и милое!');
//     document.getElementById("otvet").innerHTML = otvet;
// } else {
//     alert('Какое длинное имя!')
//     document.getElementById("otvet2").innerHTML = otvet2;
// }

// console.log(str2)
// document.getElementById("result").innerHTML = str2;

// 2 задача

// let number = prompt('Пользователь 1. Введите первое число')
// let number2 = prompt('Пользователь 2. Введите второе число')

// if ( number > number2){
//     alert('У пользователя 1 число больше')
// } else if ( number < number2){
//     alert('У пользователя 2 число больше')
// } else {
//     alert('Цифры одинаковые')
// }

// 3 задача

// let srt = prompt('Введите имя')
// let message = srt.toUpperCase([1])

// if( srt[0] === srt[0].toUpperCase() ){
//     alert('В вашем имени есть буква с заглавной буквы')
// } else{
//     alert('В вашем имени нету буквы с заглавной буквы')
// }

// console.log(srt)

// 4 задача

// let num = prompt('Введите число')

// if ( num < 60){
//     alert('Неудовлетворительно')
// } else if (num >= 60 && num <= 74){
//     alert('Удовлетворительно')
// } else if( num >= 75 && num <= 89){
//     alert('Хорошо')
// } else{
//     alert('Отлично')
// }

// 5 задача

// let text = prompt('Введите текст')
// let result = text.split(' ')

// alert(result.length)

// 6 задача

// let str = prompt('Введите пароль')
// let str2 = str.length

// if ( str2 > 8){
//     alert('Пароль слишком длинный')

// } else if ( str2.test('/[A-Z]/') ){
//     alert('Нету заглавной буквы')
// } else if ()

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// for ( let i = 0; i < arr.length; i++ ){
//     if( arr[i] % 2 !== 0){
//         continue
//     }
//     console.log(arr[i])
// }

// for ( let i = 1; i <= 100; i++ ){
//     if( i % 3 ===0 && i % 5 ===0 && i % 7 !==0 ){
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 10; i++ ){
//     let row = '';
//     for ( let j = 1; j <= i; j++){
//         row += '*'
//     }
//     console.log(row)
// }

let num = prompt('Число')

for ( let i = 0; i <= 20; i++){
    console.log(`${num} * ${i} = ${num * i}`)
}