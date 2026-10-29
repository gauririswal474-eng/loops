// JavaScript - Loops
// Operations: sum of first n numbers, table of n, prime check,
// factors, sum of digits, Armstrong number check.

const outputBox = document.getElementById("output");

// Show every result in the console and on the page
function show(text) {
  console.log(text);
  if (outputBox) {
    outputBox.textContent += text + "\n";
  }
}

// ---------- Different variables for each operation ----------
const sumLimit = 10;     // n for "sum of first n numbers"
const tableNumber = 7;   // n for "table of n"

// 5 numbers to check (prime, factors, digit sum, Armstrong)
const num1 = 153;
const num2 = 17;
const num3 = 139;
const num4 = 370;
const num5 = 28;

// ---------- Functions using loops and conditionals ----------

// Sum of first n numbers (for loop)
function sumOfFirstN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Table of n (do-while loop)
function printTable(n) {
  let i = 1;
  do {
    show(`${n} x ${i} = ${n * i}`);
    i++;
  } while (i <= 10);
}

// Prime check (for loop + if)
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// All factors (for loop + if)
function getFactors(num) {
  const factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

// Sum of digits (while loop)
function sumOfDigits(num) {
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  return sum;
}

// Armstrong number: sum of digits raised to power 3 equals the number (while loop)
function isArmstrong(num) {
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    const digit = temp % 10;
    sum += digit * digit * digit;
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}

// ---------- Display results ----------

show(`Sum of first ${sumLimit} numbers: ${sumOfFirstN(sumLimit)}`);
show("");
show(`Table of ${tableNumber}:`);
printTable(tableNumber);

const numbersToCheck = [num1, num2, num3, num4, num5];

for (const num of numbersToCheck) {
  show("");
  show(`Number :- ${num}`);
  show(`Sum of its digits: ${sumOfDigits(num)}`);
  show(`Is it an Armstrong number? ${isArmstrong(num) ? "Yes" : "No"}`);
  show(`Is it a prime number? ${isPrime(num) ? "Yes" : "No"}`);
  show(`Factors: ${getFactors(num).join(", ")}`);
}
