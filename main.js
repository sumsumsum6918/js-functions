const generateRandomNumber = (array) =>
  Math.floor(Math.random() * array.length);

//Level Easy"
//Segment 1: Functions with No Parameters and No Return Values

//1. Basic Greeting");
const greet = () => "Hello, World!";

//2. Favorite Number");
const favoriteNumber = () => 6;

//3. Magic Eight Ball");
const magicEightBallResponses = ["Yes", "No", "Maybe", "Ask again later"];
const magicEightBall = () => {
  // Generate a random index for the responses array
  const randomIndex = generateRandomNumber(magicEightBallResponses);
  return magicEightBallResponses[randomIndex];
};

//"4. Current Year");
const getCurrentYear = () => new Date().getFullYear();

//5. Random Joke");
const jokes = [
  "joke1",
  "joke2",
  "joke3",
  "joke4",
  "joke5",
  "joke6",
  "joke7",
  "joke8",
  "joke9",
  "joke10",
];
const tellJoke = () => {
  // Select a random joke from the jokes array
  const randomIndex = generateRandomNumber(jokes);
  return jokes[randomIndex];
};

//Segment 2: Functions with Parameters (One or More)
//6. Personalized Greeting");
const personalGreeting = (username) => `Hello, ${username}!`;

//7. Sum of Two Numbers");
const add = (number1, number2) => number1 + number2;

//8. Age in Months");
const ageInMonths = (age) => `${age * 12} + months`;

//9. Temperature Converter");
const celsiusToFahrenheit = (celsiusTemp) => `${(9 / 5) * celsiusTemp + 32} F`;

//10. Full Name");
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

//Segment 3: Functions with Parameters and Return Values
//11. Area of a Rectangle");
const calculateArea = (length, width) => length * width;

//12. Find Maximum
const findMax = (number1, number2) => (number1 > number2 ? number1 : number2);

//13. Count Vowels
const vowels = "aeiouAEIOU";

const countVowels = (word) => {
  if (!word) return 0;
  let count = 0;
  for (const character of word) {
    if (vowels.includes(character)) {
      count++;
    }
  }
  return count;
};

//14. Discount Price
const calculateDiscount = (originalPrice, discountPercentage) => {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discountAmount;
};

//15. Reverse String
const reverseString = (string) => string.split("").reverse().join("");

//Level Intermediate
//1. Palindrome Checker
const isPalindrome = (string) => {
  // Convert the string to lowercase and remove non-alphanumeric characters
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverse = reverseString(string);
  return string === reverse;
};

//2. FizzBuzz
const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Fizz";
  }
  return number;
};

//3. Factorial Calculator
const factorial = (number) => {
  let sum = number;
  while (number > 1) {
    number--;
    sum = sum * number;
  }
  return sum;
};

//4. Longest Word
const findLongestWord = (sentance) => {
  const words = sentance.split(" ");
  let wordLength = 0;
  let longestWord = "";
  words.forEach((word) => {
    if (word.length > wordLength) {
      wordLength = word.length;
      longestWord = word;
      return wordLength;
    }
    if (word.length === wordLength) {
      longestWord = longestWord + " " + word;
    }
  });
  return longestWord;
};

//5. Array Average
const calculateAverage = (array) => {
  let sum = 0;
  for (const number of array) {
    sum += number;
  }
  return sum / array.length;
};

//6. Remove Duplicates
const removeDuplicates = (array) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

//7. Capitalize First Letter
const capitalizeFirstLetter = (string) => {
  const letters = string.split("");
  letters[0] = letters[0].toUpperCase();
  string = letters.join("");

  return string;
};

//8. Count Occurrences
const countOccurrences = (string, letter) => {
  let count = 0;
  letter = letter.toLowerCase();
  string = string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
};

//9. Merge Arrays
const mergeArrays = (array1, array2) => {
  const newArray = [];
  for (const item of array1) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  for (const item of array2) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

//10. Random Password Generator
const numbers = { start: 48, end: 57 };
const upperCase = { start: 65, end: 90 };
const lowerCase = { start: 97, end: 122 };

const allKeyCodes = [numbers, upperCase, lowerCase].reduce(
  (keyCodes, { start, end }) => {
    for (let i = start; i <= end; i++) {
      keyCodes.push(i);
    }
    return keyCodes;
  },
  [] //reduce objects into an array
);

// pick a random character from allKeyCodes
const randomChar = () => {
  const index = Math.floor(Math.random() * allKeyCodes.length);
  return String.fromCharCode(allKeyCodes[index]);
};

/**
 *
 * @param {number} length
 * @returns
 */
const generatePassword = (length) =>
  Array(length).fill(null).map(randomChar).join("");

//let regex = /^(?=.*[a-z])(?=*[A-Z])(?=*[0-9]).{}$/;
/* 48-57 65-90 97-122
----6-----6--
 if (randomNumber >= 0 && randomNumber < 10) {
      passwordArray.push(String.fromCharCode(randomNumber + 48));
    } else if (randomNumber >= 10 && randomNumber < 36) {
      passwordArray.push(String.fromCharCode(randomNumber + 55));
    } else if (randomNumber >= 36 && randomNumber < 62) {
      passwordArray.push(String.fromCharCode(randomNumber + 61));
    }
  }
*/

//11. Character Frequency
const charFrequency = (string) => {
  string = string.toLowerCase();

  const array = string.split("");
  const charObject = {};

  array.forEach((char) => {
    if (!charObject[char]) {
      charObject[char] = 1;
    }
    if (charObject[char]) {
      charObject[char]++;
    }
  });
  return charObject;
};

//12. Intersection of Arrays
const arrayIntersection = (array1, array2) => {
  const newArray = [];
  for (const item of array1) {
    for (const i of array2) {
      if (item === i) {
        newArray.push(item);
      }
    }
  }
  return newArray;
};

//13. String Reversal
const reverseWords = (string) => {
  const newString = [];

  const array = string.split(" ");

  for (const item of array) {
    newString.unshift(item);
  }
  return newString.join(" ");
};

//14. Find Minimum
const findMin = (array) => {
  const minNumber = array.reduce((minNum, currentNum) => {
    if (minNum < currentNum) return minNum;
    return currentNum;
  }, array[0]);
  return minNumber;
};
