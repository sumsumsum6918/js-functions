const generateRandomNumber = (array) => {
  return (randomNumber = Math.floor(Math.random() * array.length));
};

//Level Easy"
//Segment 1: Functions with No Parameters and No Return Values

//1. Basic Greeting");
const greet = () => {
  return "Hello, World!";
};

//2. Favorite Number");
const favoriteNumber = () => {
  return 6;
};

//3. Magic Eight Ball");
const magicEightBallResponses = ["Yes", "No", "Maybe", "Ask again later"];
const magicEightBall = () => {
  const randomNumber = generateRandomNumber(magicEightBallResponses);
  return magicEightBallResponses[randomNumber];
};

//"4. Current Year");
const getCurrentYear = () => {
  return new Date().getFullYear();
};

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
  const randomNumber = generateRandomNumber(jokes);
  return jokes[randomNumber];
};

//Segment 2: Functions with Parameters (One or More)
//6. Personalized Greeting");
const personalGreeting = (username) => {
  return `Hello, ${username}!`;
};

//7. Sum of Two Numbers");
const add = (number1, number2) => {
  return number1 + number2;
};

//8. Age in Months");
const ageInMonths = (age) => {
  return age * 12 + "months";
};

//9. Temperature Converter");
const celsiusToFahrenheit = (celsiusTemp) => {
  return (9 / 5) * celsiusTemp + 32 + "F";
};

//10. Full Name");
const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};

//Segment 3: Functions with Parameters and Return Values
//11. Area of a Rectangle");
const calculateArea = (length, width) => {
  return length * width;
};

//12. Find Maximum");
const findMax = (number1, number2) => {
  return number1 > number2 ? number1 : number2;
};

//13. Count Vowels
const vowels = "aeiouAEIOU";
const countVowels = (word) => {
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
  return (originalPrice * discountPercentage) / 100;
};

//Reverse String
const reverseString = (string) => {
  let reverse = "";
  for (const word of string) {
    reverse = word + reverse;
  }
  return reverse;
};
//  return string.split("").reverse().join("");

//Level Intermediate
//1. Palindrome Checker
const isPalindrome = (string) => {
  string = string.toLowerCase();
  const reverse = reverseString(string);
  return string === reverse;
};
