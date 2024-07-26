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
*/

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
