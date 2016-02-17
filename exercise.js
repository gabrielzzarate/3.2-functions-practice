

/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    "use strict";
    //...
    if (a == b) {
        // console.log("a and b are equal!");
        return a
    } else if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.assert(max(1,1) == 1, "Error!");
console.assert(max(2,1) == 2, "Error!");
console.assert(max(3,6) == 6, "Error!");




// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";
    //...
    if (a == b && a == c && b == c) {
        // console.log("a and b and c are equal")
        return a;
        
    } else if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    } else if (a > b && a == c) {
        return a;
    } else if (a > c && a == b) {
        return a;
    } else if (b > a && b == c) {
        return b;
    } else if (c > b && c == a) {
        return c;
    }
}
console.assert(maxOfThree(1, 1, 1) == 1, "Error 1!");
console.assert(maxOfThree(2, 1, 1) == 2, "Error 2!");
console.assert(maxOfThree(1, 2, 1) == 2, "Error 3!");
console.assert(maxOfThree(1, 1, 2) == 2, "Error 4!");
console.assert(maxOfThree(1, 1, 2) == 2, "Error 5!");
console.assert(maxOfThree(2, 2, 1) == 2, "Error 6!");
console.assert(maxOfThree(1, 2, 2) == 2, "Error 7!");
console.assert(maxOfThree(2, 1, 2) == 2, "Error 8!");


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    //...
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true;
    } else {
        return false;
    }
}
console.assert(isVowel("a") == true, "Error 9");
console.assert(isVowel("e") == true, "Error 10");
console.assert(isVowel("i") == true, "Error 11");
console.assert(isVowel("o") == true, "Error 12");
console.assert(isVowel("u") == true, "Error 13");
// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
   
   
    var vowels = ["a", "e", "i", "o", "u", " "]; //variable holding vowels 
    var space = ""; 
    
    for (var i = 0; i < phrase.length; i++) { //iterates through string 
         var stringIndex = phrase.charAt(i) //separates the phrase into an index 
     
        
    if (vowels.indexOf(stringIndex) != -1) //
         space = (space + (stringIndex));
    else 
     space = (space + (stringIndex + "o" + stringIndex));
    }
    return space;   
    
}

console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", "Error 14");
console.assert(rovarspraket("gabriel zarate") === "gogabobrorielol zozaroratote", "Error 15");


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numberArray){
    "use strict";

    var total = 0;
    for (var i = 0; i < numberArray.length; i++) { //can also use .reduce
       total += numberArray[i];
   }

    return total;
    
}

console.assert(sum([1, 2, 3]) === 6, "Error 16");
console.assert(sum([1, 10, 24]) === 35, "Error 17");


function multiply(numberArray){
    "use strict";
    var total = 1;
    for (var i = 0; i < numberArray.length; i++) {
        total *= numberArray[i];
    }

    return total;
}

console.assert(multiply([1, 2, 3]) === 6, "Error 18");
console.assert(multiply([22, 22, 0]) === 0, "Error 19");

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    "use strict";
    return string.split("").reverse().join("");
}

console.assert(reverse("gabriel zarate") === "etaraz leirbag", "Error 20");

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var wordsArray = words.length;
    var arrayValues = 0;
    for (var i =0; i < wordsArray; i++) {
        if (words[i].length > arrayValues)
            arrayValues = words[i].length;
    }
    return arrayValues;

}
console.assert(findLongestWord(["hi", "hello", "bonjour"]) === 7, "Error 21");
console.assert(findLongestWord(["James", "John", "Jesus"]) === 5, "Error 22");


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var length = words.length;
    var longestWords = [];
    
    for (var index =0; index < words.length; index++) {
        if(words[index].length > i) {
            longestWords[longestWords.length] = words[index];
        }
    } return longestWords;
}


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var freqList = {};
    
    for (var i; i < string.length; i++) {
        if (string.charAt(i) in freqList) {
            freqList[string.charAt(i)] += +1;
        } else {
            freqList[string.charAt(i)] = 1;
        } return freqList;
    }

    

    // use bracket object notation and a for in loop
}

//console.assert(charFreq("abbabcbdbabdbdbabababcbcbab") ==  , "Error 26");
