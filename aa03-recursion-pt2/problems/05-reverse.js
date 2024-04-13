/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
  // Your code here 
   // Base case: if the string is empty or has a length of 1, return the string as it is
   if (str.length <= 1) {
    return str;
}

// Take the last character of the string and concatenate it with the reversed substring
return str.slice(-1) + reverse(str.slice(0, -1));
}

// Examples:
console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
