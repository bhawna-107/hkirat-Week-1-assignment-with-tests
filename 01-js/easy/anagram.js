/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sorting(str){
  var arr= str.split("").sort().join("");
  return arr;
}

function isAnagram(str1, str2) {
    let input1 = str1.toLowerCase();
    let input2= str2.toLowerCase();
    if(sorting(input1) === sorting(input2)){
        return true;
    }
    else{
    return false;
    }
}

var result = isAnagram("spar", "rsp");
console.log(result);

module.exports = isAnagram;

