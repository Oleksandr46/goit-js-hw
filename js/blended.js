//?Завдання 1:
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().
// {
//   const number = prompt('Введіть число');
//   if (Number(number) === 10) {
//     alert('Вірно');
//   } else {
//     alert('Невірно');
//   }
// }
//?Завдання 2:
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"
// {
//   const min = Math.floor(Math.random() * 59);
//   if (min >= 0 && min <= 15) {
//     alert(`${min} входить в першу чверть`);
//   } else if (min > 15 && min <= 30) {
//     alert(`${min} входить в другу чверть`);
//   } else if (min > 30 && min <= 45) {
//     alert(`${min} входить в третю чверть`);
//   } else if (min > 45 && min <= 60) {
//     alert(`${min} входить в четверту чверть`);
//   }

//   console.log(min);
// }
//?Завдання 3:
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// {
//   const num = prompt('Введіть значення від 1 до 4 включно');
//   let result;
//   switch (Number(num)) {
//     case 1:
//       console.log('зима');
//       result = 'зима';
//       break;
//     case 2:
//       result = 'весна';
//       break;
//     case 3:
//       result = 'літо';
//       break;
//     case 4:
//       result = 'осінь';
//     default:
//       result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
//   }
//   console.log(result);
//   alert(result);
// }
//?Завдання 4:
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const number = prompt('Веліть число');

// const time = number / 60;
// const timeMinuts = number % 60;
// const hours = Math.floor(number / 60);
// const formatHours = String(hours).padStart(2, 0);
// const formatMinuts = String(timeMinuts).padStart(2, 0);
// const hoursMinuts = formatHours + ':' + formatMinuts;
// console.log(hoursMinuts);

//?Завдання 5:
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt('login');
// let password;
// if (login === 'Адмін') {
//   password = prompt('password');
//   if (password === 'Я головний') {
//     alert('Добрий день!');
//   } else {
//     alert('Невірний пароль!');
//   }
// } else if (!login) {
//   alert('Скасовано');
// } else {
//   alert('Я вас не знаю');
// }
// console.log(login);
// console.log(password);

//?Завдання 6:

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let count = 0;
// while (count <= 20) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

//?Завдання 7:

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(getNumbers(2, 15));

//?Завдання 8:

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   let minCount = a;
//   if (typeof a === 'number' && typeof b === 'number') {
//     if (b < a) {
//       minCount = b;
//     }
//   } else {
//     return 'Not a number!';
//   }
//   return minCount;
// }
// console.log(min(5, 45));
// console.log(min(55, 45));
// console.log(min('sfdf', 45));
// console.log(min(55, '45'));

// ?Завдання 9:

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).
// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Please confirm that you are at least 18 years old!');
//   }
// }
// console.log(isAdult(19));
// console.log(isAdult(18));
// console.log(isAdult(8));

//? Завдання 10:

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz(15);
//!===============================================================================================
// ? 3. Заняття 02
//!===============================================================================================
// ?Завдання 1:

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// console.log(styles);
// const indexStyle = styles.indexOf('blues');
// console.log(indexStyle);
// styles[1] = 'classic';
// console.log(styles);

// function logItems(array) {
//   const tel = [];
//   for (let i = 0; i < array.length; i++) {
//     tel.push(`${i + 1} - ${array[i]}`);
//   }
//   return tel;
// }
// console.log(logItems([+380971108341, +380964532569, +380684586245]));
//!===============================================================================================

// ?Завдання 2:

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];
// function checkLogin(array) {
//   const getLogin = prompt("ім'я користувача");
//   if (array.includes(getLogin)) {
//     alert(`Welcome, ${getLogin}!`);
//   } else {
//     alert('User not found');
//   }
//   console.log(getLogin);
// }
// checkLogin(logins);

//!===============================================================================================

// ?Завдання 3:

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
// function caclculateAverage() {
//   // console.log(arguments);
//   let total = 0;
//   if (arguments.length === 0) {
//     return 0;
//   }

//   for (const arg of arguments) {
//     if (typeof arg !== 'number') {
//       return 'Not a number!';
//     }
//     total += arg;
//   }

//   return total / arguments.length;
// }
// console.log(caclculateAverage(12, 4, 58, 3, 54, 78));
// console.log(caclculateAverage(45, 87, 9, 3, 14));
// console.log(caclculateAverage(45, '87', 9, 3, 14));
// console.log(caclculateAverage());
//!===============================================================================================

// ?Завдання 4:

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function colculateFun(someArr) {
//   const sumArr = [];
//   for (let i = 0; i < someArr.length - 1; i++) {
//     const currentEl = someArr[i];
//     const nexEl = someArr[i + 1];
//     const sumEl = currentEl + nexEl;
//     sumArr.push(sumEl);
//   }
//   return sumArr;
// }
// console.log(colculateFun(someArr));
//!===============================================================================================
// ?Завдання 6:

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// function findLongestWord(string) {
//   const newString = string.split(' ');
//   let result = '';
//   for (const element of newString) {
//     if (element.length > result.length) {
//       result = element;
//     }
//   }
//   return result;
// }
// console.log(findLongestWord('London is the capital of Great Britain')); // 'capital'
//!===============================================================================================

// ?Завдання 7:

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key} : ${user[key]}`);
// }
//!===============================================================================================

// ?Завдання 8:

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// const keys = Object.keys(salaries);
// console.log(keys);
// let sum = 0;
// for (const key of keys) {
//   //   console.log(salaries[key]);
//   sum += salaries[key];
// }
// const values = Object.values(salaries);
// let total = 0;
// console.log(values);
// for (const value of values) {
//   total += value;
// }
// console.log(total);
// console.log(sum);
//!===============================================================================================

// ?Завдання 9:

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     if (this.exist()) {
//       return this.a + this.b;
//     }
//     return 'No such propeties';
//   },
//   mult() {
//     if (this.exist()) {
//       return this.a * this.b;
//     }
//     return 'No such propeties';
//   },
//   raise() {
//     if (this.exist()) {
//       return this.a ** this.b;
//     }
//     return 'No such propeties';
//   },
//   exist() {
//     return this.a && this.b;
//   },
// };
// calculator.read(5, 10);
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.raise());
//!===============================================================================================

// ?Завдання 10:

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
//   { name: 'Банан', price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let total = 0;
//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       total += fruit.price * fruit.quantity;
//     }
//   }
//   return total;
// }
// console.log(calcTotalPrice(fruits, 'Груша'));
