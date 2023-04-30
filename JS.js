// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;

const create = require("prompt-sync")

// Expected Output: 34223
function reverseNumber(x) {
  x = String(x).split('')
  let res = []
  for (let i = x.length - 1; i >= 0; i--) {
    res.push(x[i])
  }
  res = Number(res.join(''))
  return (res)
}

let x = 32243
console.log(reverseNumber(x))

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.
function checkPalindrome(stringIn) {
  stringIn = stringIn.split('')
  let reversed = []
  for (let i = stringIn.length-1; i >= 0; i--) {
    reversed.push(stringIn[i])
  }
  reversed = reversed.join('')
  return (reversed == stringIn)
}

let stringIn = "palindrome"
console.log(checkPalindrome(stringIn))


// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g
function stringCombinations(stringIn) {
  const res = []
  for (let i = 0; i <= stringIn.length - 1; i++) {
    let letters = stringIn[i]
    res.push(letters)
    for (let j = i + 1; j <= stringIn.length - 1; j++) {
      letters = letters + stringIn[j]
      res.push(letters)
    }
  }
  return res
}

let stringIn2 = "dog"
console.log(stringCombinations(stringIn2))


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function sortString(stringIn) {
  let res = stringIn.split('').sort().join('')
  return res
}

let string3 = "webmaster"
console.log(sortString(string3))


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
function toUpperCase(stringIn) {
  let res = []
  let words = stringIn.split(' ')
  for (let word of words) {
    word = word.replace(word[0], word[0].toUpperCase())
    res.push(word)
  }
  res = res.join(' ')
  return res
}

let string4 = "the quick brown fox"
console.log(toUpperCase(string4))



// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
function longestWord(stringIn) {
  let max = stringIn[0].length
  let longestWord = stringIn[0]
  for (let word of stringIn.split(' ')) {
    if (word.length > max) {
      max = word.length
      longestWord = word
    }
  }
  return longestWord
}

let string5 = "Web Development Tutorial"
console.log(longestWord(string5))


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5
function countVowels(stringIn) {
  let count = 0
  for (let letter of stringIn.split('')) {
    if ("aeiouAEIOU".includes(letter)) {
      count += 1
    }
  }
  return count
}

let string6 = 'The quick brown fox'
console.log(countVowels(string6))



// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
function checkPrime(num) {
  if (num <= 1) {
    return false
  }
  let isPrime = true
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false
    }
  }
  return isPrime
}

let n = 8
console.log(checkPrime(n))


// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.
function returnType(argument) {
  return (typeof argument)
}

let argument = 555
console.log(returnType(argument))


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function createMatrix(n) {
  let matrix = []
  for (let i = 0; i < n; i++) {
    let row = []
    for (let j = 0; j < n; j++) {
      row.push(0)
    }
    matrix.push(row)
  }
  return matrix
}
console.log(createMatrix(5))


// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4
function findNumbers(numbers) {
  numbers = numbers.sort()
  let res = []
  res.push(numbers[1], numbers[numbers.length-2])
  return res
}

let numbers = [1, 2, 3, 4, 5]
console.log(findNumbers(numbers))


// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
// 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
// perfect numbers 496 and 8128.
function isNumberPerfect(x) {
  if (x < 0) return false
  let sum = 0
  for (let i = 0; i < x; i++) {
    if ( x % i === 0)
      sum += x
  }
  if (sum = x || (sum/2 + x == x)) {
    return true
  } else return false
}
let num12 = 28
console.log(isNumberPerfect(num12))


// 13. Write a JavaScript function to compute the factors of a positive integer.
function computeFactors(n) {
  const res = []
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      res.push(i)
    }
  }
  return res
}

let num = 18
console.log(computeFactors(num))


// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1
function amountToCoins(amount, coins) {
  let result = [];
  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      result.push(coins[i]);
      amount -= coins[i];
    }
  }
  return (`Amount to Coins result is ${result}`);
}

let n14 = 46
let array14 = [25, 10, 5, 2, 1]
console.log(amountToCoins(n14, array14))


// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result.
// const prompt=require("prompt-sync")({sigint:true});
// function computePower(b, n) {
//   let res = 1
//   for (let i = 0; i < n; i++) {
//     res *= b
//   }
//   return res
// }
// let base = parseInt(prompt("Enter the base: "));
// let exponent = parseInt(prompt("Enter the exponent: "));
// let result = computePower(base, exponent);
// console.log(`${base} to the power of ${exponent} is: ${result}`);




// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
function uniqueChars(stringIn) {
  let hashmap = {}
  let res = ""
  for (let char of stringIn) {
    hashmap[char] = hashmap[char] + 1 || 1
  }
  for (let key of Object.keys(hashmap)) {
    res += key
  }
  return res
}
let string16 = "thequickbrownfoxjumpsoverthelazydog"
console.log(uniqueChars(string16))


// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function letterCounter(string) {
  const counter = {}
  for (let letter of string) {
    counter[letter] = counter[letter] + 1 || 1
  }
  return counter
}
let string17 = "happy"
console.log(letterCounter(string17))


// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.
function search(array, target) {
  array = array.sort((a, b) => a - b)
  let l = 0;
  let r = array.length - 1

  while (l < r) {
    let mid = Math.floor((l + r)/2)
    if (array[mid] == target) {
      return ("Target is found in array")
    } else if (array[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return ("Target is not in array")

}
let array18 = [3, 6, 1, 18]
let n18 = 6
console.log(search(array18, n18))


// 19. Write a JavaScript function that returns array elements larger than a number.
function largerNumber(array, n) {
  let res = array.filter((number) => number > n)
  return res
}
let array19 = [1, 5, 7, 23, 6]
let target = 2
console.log(largerNumber(array19, target))



// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomString(n) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let res = ""
  for (let i = 0; i <= n; i++) {
    res += chars.charAt(Math.floor(Math.random()*(chars.length)))
  }
  return res
}
console.log(randomString(17))



// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]
function getSubset(array, n) {
  let res = []
  for (let i = 0; i <= array.length - 1; i++) {
    let set = []
    for (let j = n; j > 0; j--) {
      set.push(array[j])
    }
    res.push(set)
  }
  return res
}

let array21 = [1, 2, 3]
let subsetLength = 2
console.log(getSubset(array21, subsetLength))


// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3
function countLetter(string, target) {
  let sum = 0
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === target) {
      sum += 1
    }
  }
  return sum
}
let string22 = "microsoft.com"
let letter22 = 'o'
console.log(countLetter(string22, letter22))



// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'
function noRepeating(string) {
  let counter = {}
  for (let char of string) {
    counter[char] = counter[char] + 1 || 1
  }
  for (let key of Object.keys(counter)) {
    if (counter[key] === 1) {
      return key
    }
  }
  return ("There is no non-repeating character in this string")
}
let string23 = "abacddbec"
console.log(noRepeating(string23))



// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-1; j++) {
      if (array[j] > array[i]) {
        temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }
  }
  return array
}
let arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
console.log(bubbleSort(arr))



// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function longest_Country_Name(array) {
  array = array.sort((a, b) => a.length - b.length)
  return array[array.length-1]
}

let array25 =["Australia", "Germany", "United States of America"]
console.log(longest_Country_Name(array25))


// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters.
function isUnique(word) {
  return new Set(word).size == word.length
}

function findLongest(string) {
  string = string.split(' ')
  let uniqueWords = []
  for (let word of string) {
    if (isUnique(word)) {
      uniqueWords.push(word)
    }
  }

  let longest = uniqueWords[0]
  for (let word of uniqueWords) {
    if (word.length > longest.length) {
      longest = word
    }
  }
  return longest
}
let string26 = "write a javascript function to find the longest string"
console.log(findLongest(string26))



// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
// given string that is also a palindrome. For example, the longest palindromic substring of
// "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.
function longestPalindrome(str) {
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substr = str.slice(i, j);
      if (substr === substr.split('').reverse().join('') && substr.length > longest.length) {
        longest = substr;
      }
    }
  }
  return longest;
}
let str27 = "bananas"
console.log(longestPalindrome(str27))


// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function add(a, b) {
  return a + b
}
function calculate(operation, a, b) {
  return operation(a, b)
}
let res = calculate(add, 5, 21)
console.log(res)



// 29. Write a JavaScript function to get the function name.
function getFunctionName(fn) {
  return fn.name
}

function add(a, b) {
  return a + b
}

console.log(getFunctionName(add))
