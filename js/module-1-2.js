// const getUserNames = users => users.map(user => user.name);

// console.log(
//   getUserNames([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       balance: 2811,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       balance: 3821,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       balance: 3793,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       balance: 2278,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       balance: 3951,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       balance: 1498,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// //==============================================================================================================================

// {
//   function classicAdd(a, b, c) {
//     return a + b + c;
//   }

//   const arrowAdd = (a, b, c) => a + b + c;

//   const greet = () => {
//     console.log('Hello!');
//   };

//   const add = (...args) => {
//     console.log(args);
//   };
//   add(1, 2, 3);

//   const numbers = [5, 10, 15, 20, 25];
//   // numbers.forEach(function (number, index) {
//   //   console.log(`Index ${index}, value ${number}`);
//   // });

//   const logMessage = (number, index) => {
//     console.log(`Index ${index}, value ${number}`);
//   };

//   numbers.forEach(logMessage);
// }

// {
//   const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i++) {
//       array[i] = array[i] * value;
//     }
//   };
//   const numbers = [1, 2, 3, 4, 5];
//   dirtyMultiply(numbers, 2);
//   console.log(numbers);
// }

// {
//   const pureMultiply = (array, value) => {
//     const newArray = [];
//     array.forEach(element => {
//       newArray.push(element * value);
//     });
//     return newArray;
//   };

//   const numbers = [1, 2, 3, 4, 5];

//   const doubleNumbers = pureMultiply(numbers, 2);

//   console.log(numbers);
//   console.log(doubleNumbers);
// }

// {
//   function changeEven(numbers, value) {
//     const newArray = [];
//     numbers.forEach(element => {
//       if (element % 2 === 0) {
//         newArray.push(element + value);
//       } else {
//         newArray.push(element);
//       }
//     });
//     return newArray;
//   }
//   const newNumbers = changeEven([1, 2, 3, 4, 5], 10);

//   console.log(newNumbers);
// }

// {
//   const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
//   const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
//   console.log(planetsInUpperCase);

//   const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
//   console.log(planetsInLowerCase);

//   console.log(planets);
//   const planetsLengths = planets.map(planet => planet.length);
//   console.log(planetsLengths);
// }

// {
//   const students = [
//     { name: 'Mango', score: 83 },
//     { name: 'Poly', score: 59 },
//     { name: 'Ajax', score: 37 },
//     { name: 'Kiwi', score: 94 },
//     { name: 'Houston', score: 64 },
//   ];
//   const names = students.map(student => student.name);
//   console.log(names);
// }

// {
//   const students = [
//     { name: 'Mango', courses: ['mathematics', 'physics'] },
//     { name: 'Poly', courses: ['science', 'mathematics'] },
//     { name: 'Kiwi', courses: ['physics', 'biology'] },
//   ];
//   const mappedCourses = students.map(student => student.courses);
//   console.log(mappedCourses);
//   const flattenedCourses = students.flatMap(student => student.courses);
//   console.log(flattenedCourses);
// }

{
  // const getUserEmails = users => {
  //   const user = users.map(user => user.email);
  //   return user;
  // };
  // console.log(
  //   getUserEmails([
  //     {
  //       name: 'Moore Hensley',
  //       email: 'moorehensley@indexia.com',
  //       eyeColor: 'blue',
  //       friends: ['Sharron Pace'],
  //       isActive: false,
  //       balance: 2811,
  //       skills: ['ipsum', 'lorem'],
  //       gender: 'male',
  //       age: 37,
  //     },
  //     {
  //       name: 'Sharlene Bush',
  //       email: 'sharlenebush@tubesys.com',
  //       eyeColor: 'blue',
  //       friends: ['Briana Decker', 'Sharron Pace'],
  //       isActive: true,
  //       balance: 3821,
  //       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
  //       gender: 'female',
  //       age: 34,
  //     },
  //     {
  //       name: 'Ross Vazquez',
  //       email: 'rossvazquez@xinware.com',
  //       eyeColor: 'green',
  //       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  //       isActive: false,
  //       balance: 3793,
  //       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
  //       gender: 'male',
  //       age: 24,
  //     },
  //     {
  //       name: 'Elma Head',
  //       email: 'elmahead@omatom.com',
  //       eyeColor: 'green',
  //       friends: ['Goldie Gentry', 'Aisha Tran'],
  //       isActive: true,
  //       balance: 2278,
  //       skills: ['adipisicing', 'irure', 'velit'],
  //       gender: 'female',
  //       age: 21,
  //     },
  //     {
  //       name: 'Carey Barr',
  //       email: 'careybarr@nurali.com',
  //       eyeColor: 'blue',
  //       friends: ['Jordan Sampson', 'Eddie Strong'],
  //       isActive: true,
  //       balance: 3951,
  //       skills: ['ex', 'culpa', 'nostrud'],
  //       gender: 'male',
  //       age: 27,
  //     },
  //     {
  //       name: 'Blackburn Dotson',
  //       email: 'blackburndotson@furnigeer.com',
  //       eyeColor: 'brown',
  //       friends: ['Jacklyn Lucas', 'Linda Chapman'],
  //       isActive: false,
  //       balance: 1498,
  //       skills: ['non', 'amet', 'ipsum'],
  //       gender: 'male',
  //       age: 38,
  //     },
  //     {
  //       name: 'Sheree Anthony',
  //       email: 'shereeanthony@kog.com',
  //       eyeColor: 'brown',
  //       friends: ['Goldie Gentry', 'Briana Decker'],
  //       isActive: true,
  //       balance: 2764,
  //       skills: ['lorem', 'veniam', 'culpa'],
  //       gender: 'female',
  //       age: 39,
  //     },
  //   ])
  // );
}
{
  // const values = [51, -3, 27, 21, -68, 42, -37];
  // const positiveValues = values.filter(value => value >= 0);
  // console.log(positiveValues);
  // const negativeValues = values.filter(value => value < 0);
  // console.log(negativeValues);
  // const bigValues = values.filter(value => value > 1000);
  // console.log(bigValues);
  // console.log(values);
}

// {
//   const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

//   const evenNumbers = numbers.filter(number => number % 2 === 0);
//   const oddNumbers = numbers.filter(number => number % 2 !== 0);
//   console.log(evenNumbers);
//   console.log(oddNumbers);
// }

// {
//   const LOW_SCORE = 50;
//   const HIGH_SCORE = 80;
//   const students = [
//     { name: 'Mango', score: 83 },
//     { name: 'Poly', score: 59 },
//     { name: 'Ajax', score: 37 },
//     { name: 'Kiwi', score: 94 },
//     { name: 'Houston', score: 64 },
//   ];
//   const best = students.filter(student => student.score >= HIGH_SCORE);
//   console.log(best);

//   const worst = students.filter(student => student.score < LOW_SCORE);
//   console.log(worst);

//   const average = students.filter(
//     student => student.score >= LOW_SCORE && student.score < HIGH_SCORE
//   );
//   console.log(average);
// }

// {
//   const products = [
//     { name: 'apple', quantity: 2 },
//     { name: 'orange', quantity: 5 },
//     { name: 'plum', quantity: 0 },
//   ];
//   const hasEveryProduct = products.every(product => product.quantity > 0);
//   console.log(hasEveryProduct);
// }

// {
//   const students = [
//     { name: 'Mango', score: 83 },
//     { name: 'Poly', score: 59 },
//     { name: 'Ajax', score: 37 },
//     { name: 'Kiwi', score: 94 },
//     { name: 'Houston', score: 64 },
//   ];
//   const totalScore = students.reduce((total, student) => {
//     return total + student.score;
//   }, 0);
//   const averegeScore = totalScore / students.length;
//   console.log(averegeScore);
//   console.log(totalScore);
// }

// {
//   const players = [
//     { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//     { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//     { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//     { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
//   ];

//   const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//     return acc + player.playtime / player.gamesPlayed;
//   }, 0);

//   console.log(totalAveragePlaytimePerGame);
// }

// {
//   const calculateTotalBalance = users => {
//     const userBalance = users.reduce((acc, user) => {
//       return acc + user.balance;
//     }, 0);
//     return userBalance;
//   };

//   console.log(
//     calculateTotalBalance([
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//       },
//     ])
//   );
// }

// {
//   const scores = [27, 2, 41, 4, 7, 3, 75];
//   const ascendingScores = scores.toSorted();
//   console.log(scores);
//   console.log(ascendingScores);
// }
// {
//   const students = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];

//   console.log(students.toSorted((a, b) => b.localeCompare(a)));
//   const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
//   console.log(letters.toSorted());
//   console.log(letters.toSorted((a, b) => a.localeCompare(b)));
//   console.log(letters.toSorted((a, b) => b.localeCompare(a)));
// }

// {
//   const scores = [61, 19, 74, 35, 92, 56];
//   const ascedingScores = scores.toSorted((a, b) => b - a);
//   console.log(ascedingScores);
// }
// {
//   const students = [
//     { name: 'Mango', score: 83 },
//     { name: 'Poly', score: 59 },
//     { name: 'Ajax', score: 37 },
//     { name: 'Kiwi', score: 94 },
//   ];
//   const isAscendingScoreOrder = students.toSorted(
//     (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
//   );
//   console.log(isAscendingScoreOrder);

//   const isDiscendingScoreOrder = students.toSorted(
//     (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
//   );
//   console.log(isDiscendingScoreOrder);

//   const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//     firstStudent.name.localeCompare(secondStudent.name)
//   );
//   console.log(inAlphabeticalOrder);
// }

// {
//   const students = [
//     { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
//     { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
//     { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
//     { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
//   ];
//   const names = students
//     .toSorted((a, b) => a.score - b.score)
//     .map(student => student.name);
//   console.log(names);

//   const uniqueSortedCourses = students
//     .flatMap(student => student.courses)
//     .filter((course, index, array) => array.indexOf(course) === index)
//     .toSorted((a, b) => a.localeCompare(b));
//   console.log(uniqueSortedCourses);
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
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//     {
//       title: 'The Dreams in the Witch House',
//       author: 'Howard Lovecraft',
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;

//   const names = books
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .map(book => book.author)
//     .toSorted((a, b) => a.localeCompare(b));
//   console.log(names);
// }

// {
//   const user = {
//     username: 'Viktor',
//     showName() {
//       console.log(this.username);
//     },
//   };
//   user.showName();
// }
// {
//   const pizzaPalace = {
//     pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);

//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }

//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//   };

//   console.log(pizzaPalace.order('Smoked'));
// }
// {
//   ('use strict');

//   function showThis() {
//     console.log('this in showThis: ', this);
//   }

//   const user = {
//     username: 'Poly',
//   };

//   user.showContext = showThis;

//   // Викликаємо в контексті об'єкта
//   user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

//   // Викликаємо в глобальному контексті
//   showThis(); //
// }

// {
//   ('use strict');

//   const book = {
//     updateAuthor(newAuthor) {
//       console.log(this);
//     },
//   };

//   book.updateAuthor('Jacob');
// }

// {
//   function greet(str) {
//     console.log(`${str}, ${this.username}, your room is ${this.room}`);
//   }
//   const mango = {
//     username: 'Mango',
//     room: 27,
//   };
//   const poly = {
//     username: 'Poly',
//     room: 191,
//   };
//   greet.call(mango, 'Welcome');
//   greet.call(poly, 'Aloha');
// }

// {
//   function sayHello(greeting) {
//     console.log(`${greeting}, ${this.name}!`);
//   }

//   const user = {
//     name: 'Alice',
//   };

//   const greet = sayHello.bind(user);
//   greet('Hello');
// }

// {
//   const customer = {
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     getFullName() {
//       return `${this.firstName}, ${this.lastName}`;
//     },
//   };
//   function makeMessage(callback) {
//     const username = callback();
//     console.log(`Processing an application from ${username}`);
//   }
//   makeMessage(customer.getFullName.bind(customer));
// }

// {
//   const library = {
//     books: 1923,
//     logBookCount() {
//       console.log(this.books);
//     },
//   };

//   const showBooks = library.logBookCount.bind({ books: 724 });

//   showBooks();
// }
// {
//   ('use strict');

//   const library = {
//     books: 1923,
//     logBookCount() {
//       console.log(this.books);
//     },
//   };

//   function showBooks(callback) {
//     callback();
//   }

//   showBooks(library.logBookCount.bind(library));
// }

// {
//   function showThis() {
//     console.log('this in showThis: ', this);
//   }

//   const user = {
//     username: 'Mango',
//   };

//   user.showContext = showThis;

//   user.showContext(); // this in showThis: window
// }

// {
//   const hotel = {
//     username: 'Resort hotel',
//     showThis() {
//       const foo = () => {
//         console.log('this in foo:', this);
//       };
//       foo();
//       console.log('this in showThis:', this);
//     },
//   };
//   hotel.showThis();
// }

// {
//   const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = 'Mango';
//   console.log(dog.name);
//   console.log(dog.legs);
// }
// {
//   const parent = {
//     name: 'Stacey',
//     surname: 'Moore',
//     age: 54,
//     heritage: 'Irish',
//   };

//   const child = Object.create(parent);
//   child.name = 'Jason';
//   child.age = 27;
//   console.log(parent.hasOwnProperty('surname'));
//   console.log(child.hasOwnProperty('surname'));

//   console.log(parent.hasOwnProperty('name'));

//   console.log(parent.isPrototypeOf(child));
//   console.log(child.heritage);
//   console.log(child.surname);
//   console.log(child.age);
//   console.log(child.name);
// }

// {
//   const customer = {
//     username: 'Jacob',
//   };
//   const animal = {
//     legs: 2,
//   };

//   const dog = Object.create(animal);
//   dog.name = 'mango';
//   console.log(dog);
//   console.log(dog.hasOwnProperty('legs'));
// }

// {
//   const animal = { legs: 4 };
//   const dog = Object.create(animal);
//   dog.name = 'Mango';
//   // for (const key in dog) {
//   //   if (dog.hasOwnProperty(key)) {
//   //     console.log(key);
//   //   }
//   // }
//   console.log(Object.keys(dog));
//   console.log(Object.values(dog));
//   for (const key of Object.keys(dog)) {
//     console.log(key);
//   }
// }

// {
//   const objC = { c: 'objC prop' };

//   const objB = Object.create(objC);
//   objB.b = 'objB prop';

//   const objA = Object.create(objB);
//   objA.a = 'objA prop';

//   console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
//   console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
//   console.log(objC); // { c: "objC prop", [[Prototype]]: Object }
// }

// {
//   const employee = {
//     baseSalary: 30000,
//     overtime: 10,
//     rate: 20,
//     getWage() {
//       return this.baseSalary + this.overtime * this.rate;
//     },
//   };

//   console.log(employee.getWage());
// }

// {
//   class User {
//     static roles = {
//       admin: 'admin',
//       editor: 'editor',
//       basic: 'basic',
//     };
//     name;
//     #email;
//     #role;
//     constructor(params) {
//       this.name = params.name;
//       this.#email = params.email;
//       this.#role = params.role || User.roles.basic;
//     }
//     get role() {
//       return this.#role;
//     }
//     set role(newRole) {
//       this.#role = newRole;
//     }

//     get email() {
//       return this.#email;
//     }
//     set email(newEmail) {
//       if (this.#validateEmail(newEmail)) {
//         this.#email = newEmail;
//       } else {
//         console.log('Invalid email format');
//       }
//     }
//     #validateEmail(email) {
//       return email.includes('@');
//     }
//   }

//   const mango = new User({
//     name: 'Mango',
//     email: 'mango@gmail.com',
//     role: User.roles.admin,
//   });
//   console.log(mango.name);
//   console.log(mango.role);
//   mango.role = User.roles.editor;
//   console.log(mango.role);

// console.log(mango.#email);

// console.log(User.prototype);

// const poly = new User({
//   name: 'Poly',
//   email: 'poly@gmail.com',
// });
// console.log(poly);
// }

// {
//   class MyClass {
//     static myProp = 'value';
//   }
//   const inst = new MyClass();
//   console.log(inst.myProp);
// }
// {
//   class Car {
//     static maxPrice = 50000;
//     #price;

//     constructor(params) {
//       this.#price = params.price;
//     }

//     get price() {
//       return this.#price;
//     }

//     set price(newPrice) {
//       if (newPrice <= Car.maxPrice) {
//         this.#price = newPrice;
//       } else {
//         return;
//       }
//     }
//   }

//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000

//   audi.price = 49000;
//   console.log(audi.price); // 49000

//   audi.price = 51000;
//   console.log(audi.price); // 49000
// }

// {
//   class MyClass {
//     static myMethod() {
//       console.log('A static method');
//     }
//   }
//   MyClass.myMethod();
// }

// {
//   class User {
//     static #takenEmails = [];
//     static isEmailTaken(email) {
//       return User.#takenEmails.includes(email);
//     }
//     #email;
//     constructor(params) {
//       this.#email = params.email;
//       User.#takenEmails.push(params.email);
//     }
//   }
//   const mango = new User({ email: 'mango@mail.com' });
//   console.log(User.isEmailTaken('poly@mail.com'));
//   console.log(User.isEmailTaken('mango@mail.com'));
// }

// {
//   class Car {
//     static #maxPrice = 50000;
//     static checkPrice(price) {
//       if (price > Car.#maxPrice) {
//         return 'Error! Price exceeds the maximum';
//       } else {
//         return 'Success! Price is within acceptable limits';
//       }
//     }
//     constructor(params) {
//       this.price = params.price;
//     }
//   }

//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });

//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// }

// {
//   class Parent {}
//   class Child extends Parent {}
// }
// {
//   class User {
//     #email;
//     #password;
//     name;
//     constructor(email, password, name) {
//       this.#email = email;
//       this.#password = password;
//       this.name = name;
//     }
//     get email() {
//       return this.#email;
//     }
//     set password(newPassword) {
//       this.#password = newPassword;
//     }

//     get password() {
//       return this.#password;
//     }
//     set email(newEmail) {
//       this.#email = newEmail;
//     }

//     get name() {
//       return this.name;
//     }
//     set name(newName) {
//       this.name = newName;
//     }
//   }
//   class ContentEditor extends User {}
//   const editor = new ContentEditor('mango@gmail.com', 'Mango987', 'Mango');
//   console.log(editor);
//   console.log(editor.email);
//   console.log(editor.password);
// }

// {
//   class User {
//     constructor(email) {
//       this.email = email;
//     }

//     get email() {
//       return this.email;
//     }

//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }

//   class Admin extends User {
//     static role = { BASIC: 'basic', SUPERUSER: 'superuser' };
//   }
//   console.log(Admin.role);
// }

// {
//   class User {
//     #email;
//     constructor(email) {
//       this.#email = email;
//     }
//     get email() {
//       return this.#email;
//     }
//     set email(newEmail) {
//       this.#email = newEmail;
//     }
//   }
//   class ContentEditor extends User {
//     constructor(params) {
//       super(params.email);
//       this.posts = params.posts;
//     }
//     addPost(post) {
//       this.posts.push(post);
//     }
//   }
//   const editor = new ContentEditor({
//     email: 'mango@gmail.com',
//     posts: [],
//   });
//   editor.addPost('post-1');
//   editor.addPost('post-2');

//   console.log(editor);
//   console.log(editor.email);
//   console.log(editor.posts);
// }

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   access;
//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }

//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// {
//   class User {
//     email;

//     constructor(email) {
//       this.email = email;
//     }

//     get email() {
//       return this.email;
//     }

//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     static role = {
//       BASIC: 'basic',
//       SUPERUSER: 'superuser',
//     };

//     constructor(params) {
//       super(params.email);
//       this.access = params.access;
//       this.blacklistedEmails = [];
//     }
//     blacklist(email) {
//       this.blacklistedEmails.push(email);
//     }
//     isBlacklisted(email) {
//       return this.blacklistedEmails.includes(email);
//     }
//   }

//   const mango = new Admin({
//     email: 'mango@mail.com',
//     access: Admin.role.SUPERUSER,
//   });

//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.access); // "superuser"

//   mango.blacklist('poly@mail.com');
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted('mango@mail.com')); // false
//   console.log(mango.isBlacklisted('poly@mail.com')); // true
// }
