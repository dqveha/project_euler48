// import $ from 'jquery'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './css/styles.css'

// $("section").text("TEST TEXT INPUT")

// Version 1 from https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/challenges/chinese/10-coding-interview-prep/project-euler/problem-48-self-powers.md
// function selfPowers(power, lastDigits) {
//   let sum = 0;
//   const modulo = Math.pow(10, lastDigits);

//   for (let i = 1; i <= power; i++) {
//     let temp = i;
//     for (let j = 1; j < i; j++) {
//       temp = temp * i;
//       temp = temp % modulo;
//     }

//     sum = sum + temp;
//     sum = sum % modulo;
//     console.log(sum)
//   }
  
//   return sum;
// }

// Version 2 after recursive
// function selfPower(power = 1, sum = 0) {
//   let temp = power;
//   if (power === 1001) {
//     return sum
//   } else {
//     for (let j = 1; j < power; j++) {
//       temp = temp * power;
//       temp = temp % 10000000000;
//     }
//   }
//   sum = sum + temp;
//   sum = sum % 10000000000;
//   return selfPower(power + 1, sum)
// }

// Version 3 after DRYing it?
function selfPower(endPower, lastDigits, power = 1, sum = 0) {
  let temp = power;
  const modulo = Math.pow(10, lastDigits);
  if (power > endPower) {
    return sum
  } else {
    for (let j = 1; j < power; j++) {
      temp = temp * power;
      temp = temp % modulo;
    }
  }
  sum = sum + temp;
  sum = sum % modulo;
  return selfPower(endPower, lastDigits, power + 1, sum)
}

selfPower(10, 8)


// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.
//Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.