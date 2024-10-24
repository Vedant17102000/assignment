// Q1: Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.

function isAnagram(str1, str2) { //Two string as an argument
     
     str1 = str1.toLowerCase(); //Convert to lower case
     str2 = str2.toLowerCase(); //Convert to lower case


     if (str1.length !== str2.length) { //base case: check length of two strings
          return false;
     }

     
     let sortedStr1 = str1.split('').sort().join(''); //split then sort and then join them
     let sortedStr2 = str2.split('').sort().join(''); //split then sort and then join them

     return sortedStr1 === sortedStr2;  //Compare two strings.
}


console.log(isAnagram("AKSHAT", "AKC")); 
console.log(isAnagram("listen", "silent")); 


===================================================================================================================================================
// Q2: Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
// and returns a list of objects where each object is unique category-wise and has total price spent as its value.

function calculateTotalSpentByCategory(transactions) {
     const categoryTotals = {}; //empty array

     transactions.forEach(({ category, price }) => {
          categoryTotals[category] = (categoryTotals[category] || 0) + price; //total count
     }); 

     //map function
     return Object.keys(categoryTotals).map(category => ({
          category,
          totalSpent: categoryTotals[category]
     }));
}

//Array containing itemname and category

const transactions = [
     { itemName: "Item 1", category: "Tickets", price: 10 },
     { itemName: "Item 2", category: "Movie", price: 15 },
     { itemName: "Item 3", category: "Food", price: 5 },
     { itemName: "Item 4", category: "Entertainment", price: 20 },
     { itemName: "Item 5", category: "Netflix", price: 10 },
     { itemName: "Item 6", category: "Tickets", price: 40 },
     { itemName: "Item 7", category: "Food", price: 60 },
];

console.log(calculateTotalSpentByCategory(transactions)); //print the results.

===================================================================================================================================================

  // Q3: Write a function `findLargestElement` that takes an array of numbers and returns the largest element.


function FindLargestElement(arr) {
     if (arr.length === 0) return undefined; // Handle empty array case
 
     const largest = Math.max(...arr); // Use the spread operator to pass array elements as individual arguments
     return largest;
 }
 
 const input = [12, 23, 5675, 6323, 6, 346]; //input as array
 const result = FindLargestElement(input); //passing the value in the function
 
 console.log("The largest number is: " + result); //printing the result.


===================================================================================================================================================

  // Q4: Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
function isPalindrome(str) { //String as an argument.

     let rev = str.split("").reverse().join(""); //used in built functions


     if (rev == str) { //check if reverse string is == to actual string
          return true
     }
     return false

}

let str1 = "akshat contractor"; //string 1
let str2 = "bcbcbcbcb"; //string 2
let str3 = "aka"; ////string 3



console.log(isPalindrome(str1)); //passing the strings
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));


===================================================================================================================================================

  // Q5: Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.

function calculateTime(n) { //Taking the value as an argument

     const startTime = performance.now(); //using in-built perfomance function.


     let sum = 0; //intialise sum as zeco
     for (let i = 1; i <= n; i++) {
          sum += i;
          console.log(sum) //calculation total sum
     }


     const endTime = performance.now(); //again using performance function but after the evalution of for loop


     const timeInSeconds = (endTime - startTime) / 1000; //converting into the seconds


     return timeInSeconds; //return time in seconds
}


const n = 10; //input user inputs.
const timeTaken = calculateTime(n); //passing the value to the function.
console.log(`Time taken to calculate the sum from 1 to ${n}: ${timeTaken} seconds`); 

===================================================================================================================================================

  // Q6: Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.

function CountVowels(str) {
     let count = 0; //Intialise as zero
     const vowels = ['a', 'e', 'i', 'o', 'u']; //array of vowels
 
     for (let i = 0; i < str.length; i++) { //for loop from zero to the length of the array
         if (vowels.includes(str[i].toLowerCase())) { //convert to lowercase
             count++; //increment count with 1
         }
     }
 
     return count; //return the final count
 }
 
 let vowelCount = CountVowels("AKSHAT"); //passing string as an argument to the function
 
 console.log(vowelCount); //printing the final value

===================================================================================================================================================

  // Q7: Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.

function SumofArray(n) { //taking the value from the user

     let number = n //passing the value to the new varible named number
     let sum = 0; //initialising the sum to the zero
     for (let i = 0; i < number.length; i++) { //for loop fromzero to the length of the array
          sum += number[i]; //sum = sum + number present at index of i
     }
     return sum; //return of the sum

}



const num = [1, 2, 3, 34, 5, 6]; // array of the numbers

const result = SumofArray(num); // passing the number array to the sumofarray function.
console.log(result); //printing the final result.

===================================================================================================================================================

  // Q8: Implement a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.

function FilterEven(n) { //taking the user value

     let number = n; //storing the value in the number varible
     let FilterArray = []; //intitalizing the empty array
     for (let i = 0; i < number.length; i++) { //for loop running from zero to the array length
          if (number[i] % 2 === 0) { // remainder zero will result in pusing the number in the empty array
               FilterArray.push(number[i]);
          }
     }

     return FilterArray; //return the new array

}



const arr = [21, 14, 23, 24, 3, 456, 23, 65]; //array of numbers

const result = FilterEven(arr); //pssing the value in the Filtereven number

console.log("The FIlteres Array is: " + "[" + result + "]"); //printing the results

===================================================================================================================================================

  // Q9: Write a function `findSmallestElement` that takes an array of numbers and returns the smallest element.

function Smallest(n) { //taking the user inputs
     let number = n; //storing the array in the new varible number
     if (number.length === 0) { //base case: is array is empty then return null
          return null;
     }

     let small = number[0]; //initlize the small varible with number present at index of zero here it it 11.

     for (let i = 1; i < number.length; i++) { //for loop runnig from zero to the array length
          if (number[i] < small) { //comparing the index number with the small element
               small = number[i]; //if it is less then then number present at index i becomes the new small.
          }
     }

     return small;
}

let arr = [11, 255, 33, 454, 5]; //array of the numbers.
let result = Smallest(arr); //passing the array into the function

console.log("The smallet number in array is " + result); //printing the results.

===================================================================================================================================================

  // Q10: Create a function `reverseString` that takes a string and returns the string reversed.



function Rev(str) { //Rev funtion taking the string from the user
     
     let str2 = str; //storing the string in a new varible


     let str1 = ""; //intializing the empty string


     for (let i = str2.length - 1; i >= 0; i--) { //for loop strting from the last index of the string till the zero.
          str1 += str2[i]; //str1 becomes the new reversed string.
     }

     return str1;
}

let result = Rev("AKSHAT"); //passing the value to the function.


console.log("The Revresed String is " + result); //printing the result.

===================================================================================================================================================

  // Q11: Write a function `fibonacci` that takes a number `n` and returns the `n`th number in the Fibonacci sequence


function fibonacciRecursive(n) { //taking the user input as an argument.
    
     if (n <= 0) return 0; //base case if 0 given then return the zero
     if (n === 1) return 1; //base case if 1 comes then return the 1
     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
 

 const result = fibonacciRecursive(15); //passing the value to the function
 console.log(result); //printing the results.


===================================================================================================================================================

  // Q12: Implement a function `removeDuplicates` that takes an array and returns a new array with duplicate values removed.

function Removeduplicates(n) { //passing the user value to the function
     const checkArr = n; // new varible stoing the user value
     const newArr = []; //initilizing the empty array

     for (let i = 0; i < checkArr.length; i++) { //for loop from zero to the array length

          if (!newArr.includes(checkArr[i])) { //if the new array NOT includes the number at index i then push it to the new array.
               newArr.push(checkArr[i]);
          }
     }

     return newArr;
}

const arr = [1, 1, 1, 1, 1, 1, 1, 43, 32, 43, 2]; //Array of the numbers
const result = Removeduplicates(arr); //passing the numbers to the function

console.log(result); //printing the results.

===================================================================================================================================================

 // Q13: Write a function `countOccurrences` that takes a string and a character and returns the number of times the character appears in the string.

function Count(str, chr) { //Taking one STRING and CHARACTER as an argument from the user.

     let str1 = str; //Storing the string to a new varible
     let chr1 = chr; //Storing the character to a new varible
     let count = 0; //one count varible intialised with the zero.


     if(str1.length === 0 ) return null; //base case string empty then return null.

     for (let i = 0; i < str1.length; i++) { //for loop running from the 0 to the string length
          if (str1[i] === chr1) { //if string character present at index i == character then count increases by one.
               count++;
          }
     }
     return count; //return the final count.
}


let result = Count("AKSHAT", 'A'); //passing one string and one character to the funct ion.

console.log(result); //printing the result.

===================================================================================================================================================

// Q14: Create a function `findCommonElements` that takes two arrays and returns a new array containing the elements that are present in both arrays.

function findCommonElements(arr1, arr2) { //taking two array as an argument
     let commonElements = []; //new empty array for storing common elements in the array.
     for (let i = 0; i < arr1.length; i++) { //for loop running from zero to the array length.
         if (arr2.includes(arr1[i]) && !commonElements.includes(arr1[i])) { //array 2 contains the number present in the array 1 AND new common element array does not contain the value then it pushes.
             commonElements.push(arr1[i]);
         }
     }
     return commonElements;
 }
 

 const array1 = [1, 2, 3, 4, 5];  //array 1
 const array2 = [4, 5, 6, 5, 3, 7, 8]; //array 2
 const result = findCommonElements(array1, array2); //passing two array to function
 
 console.log(result); //printing the result

===================================================================================================================================================
  
// Q15: Implement a function `sortStrings` that takes an array of strings and returns the array sorted in alphabetical order.

function SortString(arr) { //array as an argument

     let sortedArray = arr.sort(); //in built sorting function that sort in alphabetical order.

          return sortedArray;

}



const arrayString = ["Zone", "Belgaum", "Ahmedbad", "Mumbai", "Chenai", "Delhi", "Kolkata", "Hyderabad", "Dharamshala"]; //array containg strings.

console.log(SortString(arrayString)); //printing the result using funtion and passing the array as an argument.




 
