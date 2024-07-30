'use strict';

/*
////////////////////////////////
//Default Parameter

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
//tO SKIP THE SECOND PARAMETER(numpassenger)
createBooking('LH123', undefined, 1500);


/////////////////////////
//Passing arguements
const flight = 'LH123';
const timmy = {
  name: 'Timmy Amolegbe',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //flightNum is a completely differnet variable from flight
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check In');
  } else {
    alert('Wrong Passport!');
  }
};

// checkIn(flight, timmy);
// console.log(flight);
// console.log(timmy);

// //Is the same as doing ...
// const flightNum = flight;
// const passenger = timmy;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};

newPassport(timmy);
checkIn(flight, timmy);


//////////////////////
//Firstclass Fuctions and Higher order

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed strings: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

//JS uses callback all the time
const high5 = function () {
  console.log('👋');
};
document.addEventListener('click', high5);
['Timmy', 'Micheal', 'Feds'].forEach(high5);

///////////////////
//Returning Function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Timmy');
greeterHey('Micheal');
//or
greet('Hello')('Timmy');

//Challenge: Rewriting it in Arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greet('Hi')('Timmy');

////////////////////////
//The call and aply method
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Timmy Amolegbe');
lufthansa.book(239, 'Micheal Feds');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Dosen't work
// book(23, 'Timmy Amolegbe');

//Call method
book.call(eurowings, 23, 'Timmy Amolegbe');
console.log(eurowings);

book.call(lufthansa, 239, 'Micheal Feds');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

//Apply Method
const flightData = [285, 'Timmy Amolegbe'];
console.log(swiss);

book.call(swiss, ...flightData); //same result

//BIND METHOD
//book.call(eurowings, 23, 'Timilehin Amolegbe');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Timilehin Amolebe');

//Partial Applications
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Timilehin Amolegbe');
bookEW23('Micheal Feds');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

//Partial application

const addTax = (rate, value) => value + value * rate;
conaole.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));
*/

////////////////////////////
//Coding Challenge

const poll = {
  question: 'What is your favourite prgramming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  //The answer generates [0, 0, 0, 0].
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write Option Number)`
      )
    );
    console.log(answer);

    // Register Number
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this, answers);
    } else if (type === 'string') {
      // poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
//poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
