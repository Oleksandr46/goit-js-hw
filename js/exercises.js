// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }
// // // // console.log(getShippingMessage('Australia', 120, 50));  "Shipping to Australia will cost 170 credits"
// // // // console.log(getShippingMessage('Germany', 80, 20));  "Shipping to Germany will cost 100 credits"
// // // // console.log(getShippingMessage('Sweden', 100, 20));  "Shipping to Sweden will cost 120 credits"

/**
 * Напиши скрипт для обчислення прощі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */
// const values = '8 11';

// function calculateSquare(data) {
//   if (typeof data !== 'string') {
// // // // console.log('Wrong data type');
//     console.warn('Wrong data type');

//     return;
//   }

//   const squareParams = data.split(' ');
//   const square = squareParams[0] * squareParams[1];
// // // // console.log('🚀 ~ calculateSquare ~ square:', square);
// // // // console.log("🚀 ~ calculateSquare ~ squareParams:", squareParams)
// }
// calculateSquare(values);

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерайія елементів повинна починатися з 1.
 */
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i++) {
//   const element = fruits[i];
// // // // console.log(`${i + 1}: ${element}`);
// }

/**Напиши скрипт, який підлахує суму всіх парних чисел у масивію */
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// function calculateEvenSum(numbers) {
//   let total = 0;

//   for (const number of numbers) {
// // // // console.log(number);
//     if (number % 2 === 0) {
//       total += number;
//     }
//   }
//   return total;
// }
// const res1 = calculateEvenSum(numbers);
// // // // console.log('res1:', res1);

/**Напиши скрипт, який виволить у консоль ім'я та телефонний номер користувача.
 * у змінних names та phones зберігаються рядки імен та телефонних ермерів,
 * розділені комами. Порядковий номер імен та телефонів у рядку вказують на
 * відповідність. Кільлість імен та телефонів гарантовано однакова.
 */

// function printInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');

//   for (let i = 0; i < namesArr.length; i++) {
//     const name = namesArr[i];
//     const phone = phonesArr[i];

// //     console.log(`Contact: ${name}\nPhone number: ${phone}`);
//   }
// }
// printInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,8900555663377,890022266300'
// );

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символом пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */
// const string = 'Welcome to the future';

// function showWordr(string) {
//   const arr = string.split(' ');
//   return arr.slice(1, arr.length - 1).join(' ');
// }
// const res3 = showWordr(string);
// // // // console.log('res3:', res3);

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву числа. Використовуйте цикл для розв'язання задачі.
 */
const values = [2, 12, 94, 1, 23, 37];
let min;
function findMinNun(numbers) {
  let minNum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber < minNum) {
      minNum = currentNumber;
    }
  }
  return minNum;
}
min = findMinNun(values);
// // // // console.log('min:', min);

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
function calAverage() {
  const args = Array.from(arguments);
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total / args.length;
}
// // // console.log(calAverage(1, 2, 3, 4)); //2.5;
// // // console.log(calAverage(14, 8, 2)); //8;
// // // console.log(calAverage(27, 43, 2, 8, 36)); //23.2;

/**
 * Перепишм функцію add для складання довільеої
 * кількості аргументів (чисел) на function expression
 */
const add = function () {
  const args = Array.from(arguments);
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
};

// // console.log(add(1, 2, 3));
// // console.log(add(1, 2, 4, 5, 6));

/**
 // * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводоти в консоль повідомлення у
 * форматі <номер елемента> - <значення улемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ["Mango", "Poly", "Ajax"]
 * з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3- Ajax.
 */

// // function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
// //     console.log(`${i + 1} - ${item}`);
//   }
// }
// // logItems(['Mango', 'Poly', 'Ajax']);
// // logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minuts (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM
 */

function formatTime(minutes) {
  const hours = Math.trunc(minutes / 60);
  minutes = minutes % 60;

  return `${normalizeDigits(hours)}:${normalizeDigits(minutes)}`;
}
function normalizeDigits(number) {
  return String(number).padStart(2, '0');
}

// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));
