// const sortByDescendingFriendCount = users =>
//   users.toSorted((a, b) => b.friends.length - a.friends.length);

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: 'Moore Hensley',
//       friends: ['Sharron Pace'],
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       gender: 'female',
//     },
//   ])
// );
// // [
// //   {
// //     name: "Ross Vazquez",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Carey Barr",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Moore Hensley",
// //     friends: ["Sharron Pace"],
// //     gender: "male"
// //   }
// // ]
// {
//   let price = 0;
//   const subscription = 'free';

//   if (subscription === 'pro') {
//     price = 100;
//   }
//   console.log(price);
// }

// {
//   function getPrice(subscription) {
//     let price = 0;
//     if (subscription === 'pro') {
//       price = 100;
//     }
//     return price;
//   }
//   console.log(getPrice('free'));
//   console.log(getPrice('pro'));
// }

// {
//   function getBiggerNumber(a, b) {
//     return a > b ? a : b;
//   }
//   console.log(getBiggerNumber(5, 10)); // 10
//   console.log(getBiggerNumber(20, 15)); // 20
//   console.log(getBiggerNumber(7, 7)); // 7
// }

// {function getShippingCost(country) {
//   switch (country) {
//     case 'China':
//       console.log(`Shipping to ${country} will cost 100 credits`);
//       break;
//     case 'Chile':
//       console.log(`Shipping to ${country} will cost 250 credits`);
//       break;
//     case 'Australia':
//       console.log(`Shipping to ${country} will cost 170 credits`);
//       break;
//     case 'Jamaica':
//       console.log(`Shipping to ${country} will cost 120 credits`);
//       break;
//     default:
//       console.log('Sorry, there is no delivery to your country');
//   }
// }
// getShippingCost('China');
// getShippingCost('Germany');
// getShippingCost('Chile');
// getShippingCost('Australia');
// getShippingCost('Jamaica');
// getShippingCost('Sweden');
// }

// function week(day) {
//   switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//       console.log('This is a working day');
//       break;
//     case 6:
//     case 7:
//       console.log('It is a day off');
//       break;
//     default:
//       console.log('Invalid');
//   }
// }

// week(2);
// week(6);
// week(7);
// week(8);
// {
//   const planets = ['Earth', 'Mars', 'Venus'];
//   // console.log(planets[0]);
//   // console.log(planets[1]);
//   console.log(planets.length - 1);
//   planets[0] = 'Jupiter';
//   const firstElement = planets[0];
//   console.log(firstElement);
//   console.log(planets);
//   const lastElementIndex = planets.length - 1;
//   console.log(planets.length);
//   console.log(lastElementIndex);
//   console.log(planets[lastElementIndex]); // 2
//   console.log(planets[2]);
// }
// {
//   function getOrderQuantity(order) {
//     return order.length;
//   }
//   console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana']));
// }

// {
//   function getLastElementMeta(array) {
//     const lastElement = array.length - 1;
//     console.log(lastElement);
//     const total = [lastElement, array[lastElement]];
//     return total;
//   }
//   console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));
// }
// {
//   function getExtremeElements(array) {
//     const firstElement = array[0];
//     const lastElement = array.length - 1;
//     const totalElement = [firstElement, array[lastElement]];
//     return totalElement;
//   }
//   console.log(getExtremeElements([1, 2, 3, 4, 5]));
//   console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// }

// let a = ['Mango', 'Poly'];
// let b = a;
// let c = ['Mango', 'Poly'];

// console.log(a);
// console.log(b);
// a[1] = 'Jacob';
// // a = [10];
// console.log(a);
// console.log(b);
// b[0] = 'Ajax';
// console.log(a);
// console.log(b);
// console.log(a === b);
// console.log(a === c);

// {
//   let a = [5];
//   let b = a;
//   console.log(a);
//   console.log(b);
//   a[0] = 10;
//   console.log(a);
//   console.log(b);
//   console.log(a === b);
// }
// {
//   const array = [1, true, 'Poly'];
//   console.log(String(array));
//   console.log(array + 5);
//   console.log(array);
// }
// console.log(Number([1]));
// console.log(Number([1, 2, 3]));

// const emplyArray = [];
// const nonEmplyArrray = [1, 2, 3];
// console.log(Boolean(emplyArray));
// console.log(Boolean(nonEmplyArrray));

// if (emplyArray) {
//   console.log('if is in progress');
// } else {
//   console.log('else is not progress');
// }
// if (nonEmplyArrray) {
//   console.log('if is in progress');
// } else {
//   console.log('else is not progress');
// }
// const words = ['JavaScript', 'is', 'amazing'];
// console.log(words.join(''));
// console.log(words.join('-'));

// function transformString(string) {
//   const words = string.split('_');
//   return words.join('-');
// }
// console.log(transformString('user_age'));
// console.log(transformString('price_per_droid'));
// {
// function getLength(array) {
//   const newArray = array.join('');
//   console.log(newArray);
//   return newArray.length;
// }
// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));
// console.log(getLength(['M', 'a', 'n', 'g', 'o']));
// console.log(getLength(['top', 'picks', 'for', 'you']));
// }
// {
//   const name = 'Mango';
//   const letters = name.split('');
//   console.log(letters);

//   const message = 'JavaScript essentials';
//   const words = message.split(' ');
//   console.log(words);

//   const slug = 'amazing-french-recipes';
//   const slugParts = slug.split('-');
//   console.log(slugParts);
// }
// {
//   function calculateEngravingPrice(message, pricePerWord) {
//     const priceGraving = message.split(' ');
//     // console.log(priceGraving);
//     return priceGraving.length * pricePerWord;
//   }
//   console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
//   console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
//   console.log(calculateEngravingPrice('Web-development is creative work', 40));
//   console.log(calculateEngravingPrice('Web-development is creative work', 20));
// }
// {
//   const planets = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];
//   console.log(planets.slice(0, 2));
//   console.log(planets.slice(0, 4));
//   console.log(planets.slice(0, 3));
// }
// {
//   const firstArray = ['Mercury', 'Venus'];
//   const secondArray = ['Mars', 'Jupiter'];
//   const result = firstArray.concat(secondArray);
//   console.log(result);
// }

// {
//   const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Poly'];
//   console.log(clients.indexOf('Poly'));
//   console.log(clients.indexOf('Moncong'));
//   console.log(clients.indexOf('poly'));
// }
// {
//   function getSlice(array, value) {
//     const newArray = array.indexOf(value);
//     // console.log(newArray);
//     const result = [];
//     if (newArray >= 0) {
//       result.push(newArray + 1);
//     }
//     return array.slice(0, result);
//   }
//   console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'));
//   console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax'));
//   console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango'));
//   console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob'));
//   console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey'));
// }
// {
//   const planets = ['Earth', 'Mars', 'Venus'];
//   planets.push('Jupiter');
//   console.log(planets);
//   planets.push('Saturn', 'Neptune');
//   console.log(planets);
// }
// {
//   const tags = [];
//   for (let i = 0; i < 3; i++) {
//     tags.push(`tag-${i}`);
//   }
//   console.log(tags);
// }
// {
//   function createArrayOfNumbers(min, max) {
//     const arrayNumbers = [];
//     for (let i = min; i <= max; i++) {
//       arrayNumbers.push(i);
//     }
//     return arrayNumbers;
//   }
//   console.log(createArrayOfNumbers(1, 3));
//   console.log(createArrayOfNumbers(14, 17));
//   console.log(createArrayOfNumbers(29, 34));
//   console.log(createArrayOfNumbers());
// }
// {
//   const planets = ['Earth', 'Mars', 'Venus'];
//   for (let i = 0; i < planets.length; i++) {
//     console.log(planets[i]);
//   }
//   console.log(planets.includes('Mars'));
// }
// {
//   function calculateTotalPrice(order) {
//     let result = 0;
//     for (let i = 0; i < order.length; i++) {
//       // console.log(order[i]);
//       result += order[i];
//     }
//     return result;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// }
// {
//   function getEvenNumbers(start, end) {
//     const result = [];
//     for (let i = start; i <= end; i++) {
//       if (i % 2 === 0) {
//         result.push(i);
//       }
//     }
//     return result;
//   }
//   console.log(getEvenNumbers(2, 5));
//   console.log(getEvenNumbers(3, 11));
//   console.log(getEvenNumbers(6, 12));
//   console.log(getEvenNumbers(8, 8));
//   console.log(getEvenNumbers(7, 7));
// }
// {
//   const fruits = ['apple', 'banana', 'orange'];
//   if (fruits.includes('banana')) {
//     console.log('The array has an element banana');
//   } else {
//     console.log('Array does not contain banana element');
//   }
// }
// {
//   function checkStorage(storage, item) {
//     if (storage.includes(item.toLowerCase())) {
//       return `${item.toLowerCase()} is available to order!`;
//     } else {
//       return 'Sorry! We are out of stock!';
//     }
//   }
//   console.log(checkStorage(['apple', 'plum', 'pear'], 'plum'));
//   console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));
//   console.log(checkStorage(['apple', 'plum', 'pear'], 'pear'));
//   console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));
//   console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));
//   console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot'));
// }

// {
//   function getCommonElements(array1, array2) {
//     const resultArr = [];
//     for (let i = 0; i < array1.length; i++) {
//       // console.log(array1[i]);
//       if (array2.includes(array1[i])) {
//         resultArr.push(array1[i]);
//       }
//     }
//     return resultArr;
//   }
//   console.log(getCommonElements([1, 2, 3], [2, 4]));
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// }
// {
//   const planets = ['Earth', 'Mars', 'Venus'];
//   for (const planet of planets) {
//     console.log(planet);
//   }
// }
// {
//   function sum(a, b) {
//     console.log(arguments);
//     return a + b;
//   }
//   console.log(sum(2, 5));
// }
// {
//   function multiply() {
//     let total = 1;
//     for (const arg of arguments) total *= arg;
//     return total;
//   }
//   console.log(multiply(1, 2, 3)); //  6
//   console.log(multiply(1, 2, 3, 4)); //  24
//   console.log(multiply(1, 2, 3, 4, 5)); //  120
// }
// {
//   function foo(...args) {
//     // const args = Array.from(arguments);
//     return args.join('-');
//   }
//   console.log(foo(1, 2, 3));
// }
// {
//   function multiply(...args) {
//     return args.reduce((acc, number) => acc * number, 1);
//   }

//   console.log(multiply(1, 2)); // 2);
//   console.log(multiply(1, 2, 3)); // 6
//   console.log(multiply(1, 2, 3, 4)); // 24
// }
// {
//   function createReversedArray(...args) {
//     return args.toReversed();
//   }
//   console.log(createReversedArray(12, 85, 37, 4));
//   console.log(createReversedArray(164, 48, 291));
//   console.log(createReversedArray(412, 371, 94, 63, 176));
//   console.log(createReversedArray());
// }

// {
//   function greet(username = 'Guest') {
//     console.log(`Hello, ${username}`);
//   }
//   console.log(greet('Jacob'));
//   console.log(greet());
// }
// {
//   function count(from, to, step = 1) {
//     console.log(`from: ${from}, to: ${to}, step: ${step}`);
//     for (let i = from; i <= to; i += step) {}
//   }
//   console.log(count(1, 15, 4));
//   console.log(count(1, 15));
// }
// {const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);
// }
// {
//   const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     rating: 8.38,
//   };
//     const keys = Object.keys(book);
//     console.log(keys);
//     for (const key of keys) {
//       console.log(key);
//       console.log(book[key]);
//       }
// }
// {
//   const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//   };
//   //   const values = [];
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);

//   //   for (const key of keys) {
//   //     values.push(apartment[key]);
//   //   }
//   console.log(keys);
//   console.log(values);
// }
// {
//   function countProps(object) {
//     let propCount = Object.keys(object);
//     return propCount.length;
//   }
//   console.log(countProps({}));
//   console.log(countProps({ name: 'Mango', age: 2 }));
//   console.log(
//     countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })
//   );
// }
// {
//   function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const values = Object.values(salaries);
//     for (const value of values) {
//       totalSalary += value;
//     }
//     return totalSalary;
//   }
//   console.log(countTotalSalary({}));
//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
//   console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// }
// {
//   const books = [
//     {
//       title: 'The Last Kingdom',
//       author: 'Bernard Cornwell',
//       rating: 8.38,
//     },
//     {
//       title: 'Beside Still Waters',
//       author: 'Robert Sheckley',
//       rating: 8.51,
//     },
//     {
//       title: 'The Tell-Tale Heart',
//       author: 'Edgar Allan Poe',
//       rating: 7.75,
//     },
//   ];
//   for (const book of books) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.genres);
//     console.log(book.rating);
//   }
// }
// {
//   const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   const values = Object.values(colors);
//   for (const value of values) {
//     hexColors.push(value.hex);
//     rgbColors.push(value.rgb);
//   }

//   console.log('hex', hexColors);
//   console.log('rgb', rgbColors);
// }
// {
//   const books = [
//     { title: 'The Last Kingdom', author: 'Bernard Cornwell' },
//     { title: 'Beside Still Waters', author: 'Robert Sheckley' },
//     { title: 'The Tell-Tale Heart', author: 'Edgar Allan Poe' },
//   ];
//   const authorToSearchFor = 'Robert Sheckley';
//   for (const book of books) {
//     if (book.author === authorToSearchFor) {
//       console.log(book);
//       console.log(book.title);
//       console.log(book.rating);
//     }
//   }
// }
// {
//   function getProductPrice(productName) {
//     const products = [
//       { name: 'Radar', price: 1300, quantity: 4 },
//       { name: 'Scanner', price: 2700, quantity: 3 },
//       { name: 'Droid', price: 400, quantity: 7 },
//       { name: 'Grip', price: 1200, quantity: 9 },
//     ];
//     for (const product of products) {
//       if (product.name === productName) {
//         return product.price;
//       }
//     }
//     return null;
//   }

//   console.log(getProductPrice('Radar'));
//   console.log(getProductPrice('Grip'));
//   console.log(getProductPrice('Scanner'));
//   console.log(getProductPrice('Droid'));
//   console.log(getProductPrice('Engine')); // null
// }

// {
//   const books = [
//     { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.2 },
//     { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 9 },
//     { title: 'The Tell-Tale Heart', author: 'Edgar Allan Poe', rating: 6.8 },
//   ];
//   const titles = [];
//   let totalRating = 0;
//   for (const book of books) {
//     titles.push(book.title);
//     totalRating += book.rating;
//   }
//   const averageRating = totalRating / books.length;
//   console.log(titles);
//   console.log(averageRating);
// }

// {
//   function getAllPropValues(propName) {
//     const products = [
//       { name: 'Radar', price: 1300, quantity: 4 },
//       { name: 'Scanner', price: 2700, quantity: 3 },
//       { name: 'Droid', price: 400, quantity: 7 },
//       { name: 'Grip', price: 1200, quantity: 9 },
//     ];
//     const values = [];
//     for (const product of products) {
//       if (product[propName] !== undefined) {
//         values.push(product[propName]);
//       }
//     }

//     return values;
//   }
//   console.log(getAllPropValues('name')); //["Radar", "Scanner", "Droid", "Grip"]
//   console.log(getAllPropValues('quantity')); //[4, 3, 7, 9]
//   console.log(getAllPropValues('price')); //[1300, 2700, 400, 1200]
//   console.log(getAllPropValues('category')); //[]
// }

// {
//   function calculateTotalPrice(productName) {
//     const products = [
//       { name: 'Radar', price: 1300, quantity: 4 },
//       { name: 'Scanner', price: 2700, quantity: 3 },
//       { name: 'Droid', price: 400, quantity: 7 },
//       { name: 'Grip', price: 1200, quantity: 9 },
//       { name: 'Batata', price: 1400, quantity: 6 },
//     ];
//     let totalPrice = 0;
//     let quantity = 0;
//     for (const product of products) {
//       if (product.name === productName) {
//         totalPrice = product.price;
//         quantity = product.quantity;
//       }
//     }
//     const totalQuantity = totalPrice * quantity;
//     if (totalQuantity === 0) {
//       return `Product ${productName} not found!`;
//     }

//     return totalQuantity;
//   }
//   console.log(calculateTotalPrice('Blaster'));
//   console.log(calculateTotalPrice('Radar'));
//   console.log(calculateTotalPrice('Droid'));
//   console.log(calculateTotalPrice('Grip'));
//   console.log(calculateTotalPrice('Scanner'));
//   console.log(calculateTotalPrice('Batata'));
// }

// const obj = {
//   method(value) {
//     console.log(`I'm a method with ${value}!`);
//   },
// };
// obj.method(5);
// obj.method(10);
// {
//   const bookShelf = {
//     books: ['The Last Kingdom', 'Dream Guardian'],
//     getBooks() {
//       return 'Returning all books';
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },
//   };
//   console.log(bookShelf.getBooks());
//   console.log(bookShelf.addBook('new book 1'));
//   console.log(bookShelf);
// }
// {
//   const atTheOldToad = {
//     potions: [],
//     getPotions() {
//       return 'List of all available potions';
//     },
//     addPotion(potionName) {
//       return `Adding ${potionName}`;
//     },
//   };
//   console.log(atTheOldToad.getPotions());
//   console.log(atTheOldToad.addPotion('Invisibility'));
//   console.log(atTheOldToad.addPotion('Power potion'));
// }
// {
//   const bookShelf = {
//     books: ['The Last Kingdom'],
//     getBooks() {
//       return this.books;
//     },
//     addBook(bookName) {
//       this.books.push(bookName);
//     },
//   };
//   console.log(bookShelf.getBooks());
//   bookShelf.addBook('The Mist');
//   console.log(bookShelf.getBooks());
//   bookShelf.addBook('Dream Guardian');
//   console.log(bookShelf.getBooks());
// }
// {
//   const bookShelf = {
//     books: ['The last Kingdom'],
//   };
//   bookShelf.books.push('The Mist');
//   console.log(bookShelf.books);
// }
// {
//   const bookShelf = {
//     books: [
//       { title: 'The Last Kingdom', rating: 8 },
//       { title: 'The Mist', rating: 6 },
//     ],
//     getBooks() {
//       return this.books;
//     },
//     addBook(newBook) {
//       this.books.push(newBook);
//     },
//     getAvarageRating() {
//       let totalRating = 0;
//       for (const book of this.books) {
//         totalRating += book.rating;
//       }
//       return totalRating / this.books.length;
//     },
//   };
//   console.log(bookShelf.getBooks());
//   //   bookShelf.addBook({ title: 'Dream Guardian', rating: 9 });
//   console.log(bookShelf.getBooks());
//   console.log(bookShelf.getAvarageRating());
// }

// {
//   const atTheOldToad = {
//     potions: [
//       { name: 'Speed potion', price: 460 },
//       { name: 'Stone skin', price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       this.potions.push(newPotion);
//     },
//     getTotalPrice() {
//       let totalPrice = 0;
//       for (const potion of this.potions) {
//         totalPrice += potion.price;
//       }
//       return totalPrice;
//     },
//   };
//   console.log(atTheOldToad.getPotions());
//   atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
//   atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
//   console.log(atTheOldToad.getTotalPrice());
// }

// {
//   const bookShelf = {
//     books: [
//       { title: 'The Last Kingdom', rating: 8 },
//       { title: 'The Mist', rating: 6 },
//     ],
//     getBook() {
//       return this.books;
//     },
//     changeRating(bookName, newRating) {
//       for (const book of this.books) {
//         if (book.title === bookName) {
//           book.rating = newRating;
//         }
//       }
//     },
//   };
//   bookShelf.changeRating('The Last Kingdom', 8.56);
//   console.log(bookShelf.getBook());
// }

// {
//   function multiply(...args) {
//     // console.log(args);
//     let total = 0;
//     for (const arg of args) {
//       total += arg;
//     }
//     return total;
//   }
//   console.log(multiply(1, 2, 3, 4));
//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);
// }

// {
//   function addOverNum(value, ...args) {
//     let totalSum = 0;
//     for (const arg of args) {
//       if (arg > value) {
//         totalSum += arg;
//       }
//     }
//     return totalSum;
//   }
// }
// {
//   function getExtremeScores(scores) {
//     const obj = {
//       best: Math.max(...scores),
//       worst: Math.min(...scores),
//     };
//     return obj;
//   }
//   console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
//   console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
// }

// {
//   const temps = [14, -4, 25, 8, 11];
//   const copyOfTemos = [...temps];
//   console.log(copyOfTemos);

//   const lastWeekTemps = [14, 25, 11];
//   const currentWeekTemps = [23, 17, 18];
//   const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...copyOfTemos];
//   console.log(allTemps);
// }

// {
//   const firstGroupScores = [64, 42, 93];
//   const secondGroupScores = [89, 14, 51, 26];
//   const thirdGroupScores = [29, 47, 18, 97, 81];

//   const allScores = [
//     ...firstGroupScores,
//     ...secondGroupScores,
//     ...thirdGroupScores,
//   ];
//   const bestScore = Math.max(...allScores);
//   const worstScore = Math.min(...allScores);

//   console.log(allScores);
//   console.log(bestScore);
//   console.log(worstScore);
// }
// {
//   const first = { propA: 5, propB: 10, propC: 50 };
//   const second = { propC: 15 };

//   const third = { propB: 20, ...first, ...second };
//   console.log(third);

//   const fourth = { ...first, ...second, propB: 20 };
//   console.log(fourth);

//   const fifth = { ...first, propB: 20, ...second };
//   console.log(fifth);
// }
