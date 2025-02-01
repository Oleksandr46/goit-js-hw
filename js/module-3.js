// function getElementWidth(content, padding, border) {
//   const contentWidth = parseFloat(content);
//   const paddingWidth = parseFloat(padding);
//   const borderWidth = parseFloat(border);
//   const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

//   return totalWidth;
// }
// // console.log(getElementWidth('50px', '8px', '4px')); // 74
// // console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// // console.log(getElementWidth('200px', '0px', '0px')); // 200

// Модуль 3 урок 1

/** Масиви
 * Стаорення масиву
 * Доступ до елементів
 * Перевизначення значення елемента
 * Довжина масиву
 * Індекс останнього елемента
 */

// const secondArr = [2];
// // console.log('secondArr:', secondArr);

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// // console.log('🚀 ~ courses [0]:', courses[0]);
// // console.log('🚀 ~ courses [1]:', courses[1]);
// // console.log('🚀 ~ courses [2]:', courses[2]);
// // console.log('🚀 ~ courses [-1]:', courses[-1]);
// // console.log('🚀 ~ courses [-1]:', courses.at(-1));

// // console.log(courses.length);
// courses.length = 3;
// // console.log('🚀 ~ courses:', courses);
// // console.log(courses.length);

// const lastIndex = courses.length - 1;
// // console.log('🚀 ~ lastIndex:', lastIndex);

// courses[1] = 'SQL';
// courses[3] = 'Desing';
// console.table(courses);

// // console.log('courses:', courses);
// console.table(courses);

// const lastIndex = courses.length - 1;
// // console.log('🚀 ~ lastIndex:', lastIndex);
// courses[lastIndex];
// // console.log('🚀 ~ courses[lastIndex]:', courses[lastIndex]);

// const diffElements = ['Some text', 123, true, [1, 2, 3]];
// // console.log('🚀 ~ diffElements:', diffElements);

// const userFavouriteItems = [];
// userFavouriteItems[0] = 'BMW';
// userFavouriteItems[1] = 'Zara jeanse';
// userFavouriteItems[2] = 'T-shirts';
// // console.log('🚀 ~ userFavouriteItems:', userFavouriteItems);
// userFavouriteItems.length = 0;
// // console.log('🚀 ~ userFavouriteItems:', userFavouriteItems);

/**
 *Передача за посиланням і за значенням
 *Примітиви і складеі типи
 *Посилальна рівеість (referential equality)
 */

// const a = [1, 2, 3];
// const b = a;

// // console.log('a', a);
// // console.log('b', b);

// a[0] = 500;
// b[2] = -100;
// // console.log('a', a);
// // console.log('b', b);

// // console.log(a === b);

// // console.log([] === []);
// // console.log([1, 2, 3] === [1, 2, 3]);

//  Примітивні типи даних
// let str1 = 'Mango';
// let str2 = str1;
// // console.log('str1:', str1);
// // console.log('str2:', str2);

// str1 = 'Poly';
// // console.log('str1:', str1);
// // console.log('str2:', str2);

/** Методи масиву
 * join()
 * split()
 * slice()
 * concat()
 * indexOf()
 * push() | POP()
 * shift() | unshift
 */

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const joinArr = courses.join('');
// // console.log('🚀 ~ joinArr:', joinArr);

// const joinArr = courses.join(' ');
// // console.log('🚀 ~ joinArr:', joinArr);

// const joinArr = courses.join('-');
// // console.log('🚀 ~ joinArr:', joinArr);

// const str = 'JavaScript is awesome!';
// // console.log('🚀 ~ str:', str);
// const arrFromStr = str.split();
// // console.log('🚀 ~ arrFromStr:', arrFromStr);

// const arrFromStr = str.split('');
// // console.log('🚀 ~ arrFromStr:', arrFromStr);

// const arrFromStr = str.split(' ');
// // console.log('🚀 ~ arrFromStr:', arrFromStr);

// const arrFromStr = str.split(' ');
// // console.log('🚀 ~ arrFromStr:', arrFromStr.reverse());

// const reversedArr = arrFromStr.reverse();
// const reversedStr = reversedArr.join(' ');
// // console.log('🚀 ~ reversedStr:', reversedStr);

// const updateCourses = courses.slice();
// // console.log('🚀 ~ updateCourses:', updateCourses);

// // console.log(courses === updateCourses);

// const newCourses = ['Desing', 'Python', 'Math'];
// const updateCourses = courses.concat(newCourses);
// const updateCourses = courses.concat(newCourses, 'SQL', true);
// console.table(updateCourses);

// const searchIdx = courses.indexOf('JavaScript');
// // console.log('🚀 ~ searchIdx:', searchIdx);
// const arr1 = courses.slice(0, searchIdx + 1).join('-');
// // console.log('🚀 ~ arr1:', arr1);
// const arr2 = courses.slice(searchIdx + 1).join(',');
// // console.log('🚀 ~ arr2:', arr2);

// const resultStr = arr1 + ' | ' + arr2;

// // console.log('resultStr:', resultStr);

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// courses.push('Java');
// // console.log('🚀 ~ courses:', courses);
// courses.push('Desing', 'Python');
// // console.log('🚀 ~ courses:', courses);
// courses.pop();
// // console.log('🚀 ~ courses:', courses);

// courses.shift();
// // console.log('🚀 ~ courses:', courses);

/**
 * Ітерація по масиву
 *
 * Ітерація по масиву циклом for
 * Метод includes()
 * Цикл for ...of
 * Різниця у використанні for  і for ...of
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// // console.log('🚀 ~ friends:', friends);
// for (let i = 0; i < friends.length; i += 1) {
// //   console.log(i);
// //   console.log(friends[i]);
// //   console.log((friends[i] += `-${i}`));
// //   console.log((friends[i] += `-${i + 1}`));
// }

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const isFriendsOnline = [true, true, false, true];

// for (let i = 0; i < friends.length; i += 1) {
// //   console.log((friends[i] += `-${i + 1}`));
//   const res = isFriendsOnline[i] ? 'Online' : 'Offline';
// //   console.log('🚀 ~ res:', res);
// }
// for (let i = 0; i < friends.length; i += 1) {
// //   console.log((friends[i] += `-${isFriendsOnline[i] ? 'Online' : 'Offline'}`));
//   const res = isFriendsOnline[i] ? 'Online' : 'Offline';
// //   console.log('🚀 ~ res:', res);
// }

// for (let friend of friends) {
// //   console.log(friend);
// }

/**
 * Псевдомасив arguments i Array.from
 * Параметри за замоачуванням
 * Функціональний вираз
 */

// function showArguments(a, b) {
//   // a = underfined
//   // b = underfined
//   // arguments = []
// //   //   console.log(arguments);
//   // перетворення псевдомасива в масив
//   const args = Array.from(arguments);
//   //   const args = [...arguments]; альтернативний варіант (  const args = Array.from(arguments);)

// //   console.log('showArguments ~ args:', args);

//   // return underfined
// }

// showArguments(1, 2, 3);
// showArguments(1, 2, 3, 4, 5);
// showArguments(1, 2, 3, 4, 5, 6, 7);

// let room = 1;
// function printMessage(
//   guestName,
//   hotelName = 'Peaach Hotel',
//   roomNumber = room
// ) {
//   const message = `Room number ${roomNumber} in hotel ${hotelName} reserved by${guestName}`;
//   room += 1;
//   return message;
// }
// const result = printMessage('Mango');
// // console.log('result:', result);
// const result2 = printMessage('Kiwi');
// // console.log('result2:', result2);
// const result3 = printMessage('Poly', 'Strawberry Hotel');
// // console.log('result3:', result3);

// function createLink(domen, protocol = 'https://') {
//   const link = protocol + domen + '/';
//   return link;
// }
// const res1 = createLink('goit.ua');
// // console.log('res1:', res1);

/**Анонімна самовикликаюча функція
 * function ecspretion
 */
// (function () {
//   return 'Worked';
// })();

// /**Присвоєння функції у змінну */
// const fn1 = function () {
// //   console.log('Unonimous function worked 🌟');
// };
// fn1();

// //====================== //
// //Оголошння всіх змінних та операцій над ними
// const a = 1;
// const b = 2;
// const c = 3;

// const d = multiply(a, b, c);

// // ====================== //
// // Опис самих процедур над змінними
// function multiply(a, b, c) {
//   return a + b + c;
// }
// function divide(a, b, c) {
//   return a + b + c;
// }
// function pow(base, pow) {
//   return base ^ pow;
// }

// // ====================== //
// // Оголошння функції на початку файлу з кодом
// const multiply1 = function (a, b, c) {
//   return a + b + c;
// };
// const divide1 = function (a, b, c) {
//   return a + b + c;
// };
// const pow1 = function (base, pow) {
//   return base ** pow;
// };

// // ====================== //
// // Оголошння змінних та операцій над ними
// const a1 = multiply1(1, 2, 3);

/**
 * Стек викликів
 * Порядок виконання
 */

function fnA() {
  // console.log('fnA execution');
}
function fnB() {
  // console.log('fnB execution');
}
function fnC() {
  // console.log('fnC execution');
}
// console.log('Before fnA execution');
fnA();
// console.log('After fnA execution');

// console.log('Before fnB execution');
fnB();
// console.log('After fnB execution');

// console.log('Before fnC execution');
fnC();
// console.log('After fnC execution');
