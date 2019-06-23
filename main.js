// const getPrimes = function(rangeLimit) {
//   // Create your range, starting at two and ending at the given limit.

//   // The algorithm consists of repeating the following over and over:

//     // take the next available unmarked number in your list (it is prime)
//     // remove all the multiples of that number (they are not prime)
//     // Repeat until you don't have any possible primes left in your range.

//   // When the algorithm terminates, all the numbers in the list that have not been removed are prime.
//   // loop through all the prime numbers and print them to the console
// }

// getPrimes();

// CREATE FUNCTION THAT ACCEPTS RANGE LIMIT
const getPrimes = function (rangeLimit) {

 // CREATE ARRAY OF NUMBERS 
 let numbersArray = []
 for (let i = 2;  i <= rangeLimit; i++) {
   numbersArray.push(i) 
 }

 // CREATE EMPTY ARRAY OF PRIMES
 const primes = []

 // LOOP OVER NUMBERS ARRAY
 while (numbersArray.length > 0) {

   // REMOVE FIRST ELEMENT FROM ARRAY AND ADD TO PRIMES ARRAY
   let prime = numbersArray.shift()
   primes.push(prime)

  // FILTER OUT ITS FACTORS
  numbersArray = numbersArray.filter(function(number) {
     return number % prime !== 0
  });
 }

 // PRINT ALL THE PRIMES
 console.log(primes)
}
