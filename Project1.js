let ages = [3, 9, 23, 64, 2, 8, 28, 93];

let a = ages.length - 1; //length of string from 0

console.log(ages[a] - ages[0]); // print step 1.

ages.push(98);

a = ages.length - 1; //length of string again from 0

console.log(ages[a] - ages[0]); // print step 1b

let aver1 = 0;
for (let i = 0; i <= a; i++) {
  aver1 = aver1 + ages[i];
}
a = ages.length;
aver1 = aver1 / a;
console.log(aver1); //average of array 1

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck"];

let b = names.length - 1;
let aver2 = 0;
var str = "";
for (let i = 0; i <= b; i++) {
  str = names[i];

  aver2 = aver2 + str.length;
}
b++;
console.log(aver2 / b); //average of array 2

let combine = "";
b = names.length - 1;
for (let i = 0; i <= b; i++) {
  combine = combine + " " + names[i]; //combining strings of array 2
}
console.log(combine);

let nameLengths = [0, 0, 0, 0, 0];
b = names.length - 1;
for (let i = 0; i <= b; i++) {
  str = names[i];
  nameLengths[i] = str.length; // Copying the length of names into the array nameLengths
}
let sumlength = 0;

for (let i = 0; i <= b; i++) {
  sumlength = nameLengths[i] + sumlength;
}
console.log(sumlength); //the sum of all the elements in sumLength

let word = "Hello";
let n = 3;

function repeatfunct(word, n) {
  let sumstring = "";
  for (i = 1; i <= n; i++) {
    sumstring = sumstring + word;
  }

  return sumstring;
}
console.log(repeatfunct(word, n)); // Function 7. Copyitsef n number of times

let firstName = "Mark";
let lastName = "Smith";
function twonames(firstName, lastName) {
  let namesum = "";

  namesum = firstName + " " + lastName;

  return namesum;
}
console.log(twonames(firstName, lastName)); // Function 8. Combine first and last name

function sumfunct(Array1 = []) {
  let alength = Array1.length;
  let asum = 0;
  for (i = 0; i <= alength; i++) {
    asum = Array1[i] + asum;
  }
  if (asum <= 100) {
    return false;
  }
  return true;
}
console.log(sumfunct(ages)); // function 9 Return true or false if greater or less than 100

function avrgfunct(Array1 = []) {
  let alength = Array1.length - 1;
  let asum = 0;
  for (i = 0; i <= alength; i++) {
    asum = Array1[i] + asum;
  }
  alength = alength + 1;
  return asum / alength;
}

console.log(avrgfunct(ages)); // function 10 find the average of an array.

let arraytest = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function avrgfuncts(Array1 = [], Array2 = []) {
  let alength = Array1.length - 1;
  let asum1 = 0;
  let avrg1 = 0;
  for (i = 0; i <= alength; i++) {
    asum1 = Array1[i] + asum1;
  }
  alength = alength + 1;
  avrg1 = asum1 / alength;

  let alength2 = Array2.length - 1;
  let asum2 = 0;
  let avrg2 = 0;
  for (i = 0; i <= alength2; i++) {
    asum2 = Array2[i] + asum2;
  }
  alength = alength2 + 1;
  avrg2 = asum2 / alength2;

  if (avrg1 >= avrg2) {
    return true;
  } else {
    return false;
  }
}
console.log(avrgfuncts(ages, arraytest)); // function 10 find the average of two arrays and return true if the first is greater than the second.

let isHot = true;
let money = 9.5;

function willBuyDrink(isHotOutside, moneyInPocket) {
  if ((isHotOutside = true && moneyInPocket >= 10.5)) {
    return true;
  }
  return false;
}
console.log(willBuyDrink(isHot, money)); // Function isHotOutside. Checks to see if hot is true and if money is greater than 10.50

testn = 4;

function iseven(n) {
  if (n % 2 == 0) {
    return true;
  }
  return false; // 13. Create a function that solver a problem. This function determines if a number is true or false.
}

console.log(iseven(testn));
