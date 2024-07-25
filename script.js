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

*/

/////////////////////////
//Passing arguements
const flight = 'LH123';
const timmy = {
  name: 'Timmy Amolegbe',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check In');
  } else {
    alert('Wrong Passport!');
  }
};

checkIn(flight, timmy);
console.log(flight);
console.log();
