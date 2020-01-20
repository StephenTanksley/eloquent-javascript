// Minimum

// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

// // Your code here.

const min = (a, b) => {
    a < b 
        ? console.log(`${a} is less than ${b}`) 
        : console.log(`${b} is less than ${a}`)
}

// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10

// Recursion

// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

//     Zero is even.

//     One is odd.

//     For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// // Your code here.

const isEven = (n) => {

    //we know that 0 is even.
    if (n === 0) {
        return true;

    //we know that 1 is odd.
    } else if (n === 1) {
        return false;

    //we know that this function won't work if our value is negative, so we have to convert it to a positive value.
    } else if (n < 0) {
        return isEven(Math.abs(n))

    //this is the money portion of the code. This is the recursive function that will call itself until we reduce n to either 0 or 1.
    } else {
        return isEven(n-2)
    }
}

console.log(isEven(-6))

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??

// Your function will likely look somewhat similar to the inner find function in the recursive findSolution example in this chapter, with an if/else if/else chain that tests which of the three cases applies. The final else, corresponding to the third case, makes the recursive call. Each of the branches should contain a return statement or in some other way arrange for a specific value to be returned.

// When given a negative number, the function will recurse again and again, passing itself an ever more negative number, thus getting further and further away from returning a result. It will eventually run out of stack space and abort.
// Bean counting

// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

// // Your code here.

// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4