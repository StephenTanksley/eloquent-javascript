/*Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3

// Your code here. */

// 1) create an accumulator string.
let tree = ''

// 2) create a loop.
for (let i = 0; i < 8; i+1)
  if (tree.length <= 7) {
      tree += "#"
      console.log(tree)
}

/*FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

// Your code here. */

//1) create a loop which cycles from 0 to 100.
for (let i = 0; i <= 100; i + 1) {

    // 2) create an accumulator string.
    let output = ""
    //let 'fizz' be the first condition. If the number has no remainder after being divided by 3, add 'fizz' to output.
    if (i % 3 === 0) output += 'fizz'

    // 3) same thing, but for 'buzz'. Since the 'fizz' conditional has already been checked, 'buzz' will be added to the end of whatever string exists in output.
    if (i % 5 === 0) output += 'buzz'

    // 4) we're going to output the result. If there's nothing inside the string for output, it evaluates to falsy and we move on to just printing the value of i.
    console.log(output || i)
}


/* Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

// Your code here.*/

// 1) size is the parameter which tells us how many rows and columns our chessboard will have.
let size = 8

// 2) result is an accumulator string which will accept input up until the size specified in the size variable.
let result = "";

// 3) This program needs to handle both rows and columns. Ergo, we're going to need two loops, one nested inside the other.

//first loop - 
for (let i=0; i < size; i++){

    //second loop - 
    for (let j = 0; j < size; j++) {

        //4) result is currently a null value. There's nothing there. When the loop runs the first time, the value of (i + j) % 2 is computed. If that's true, we give it a blank space. If false, we fill in the space. This loops until i and j have incremented up to our size variable. 
        
        //This happens until we've reached j === size. Once we hit that, our first loop increments. Now with i === 1, it will not begin with a blank space because (i + j) % 2 !== 0. 


        result += (i + j) % 2 ? "◻" : "◼"
    }

    // 5) At the conclusion of the j loop, we add a line break before moving back up to the top of the call stack to begin again.
    result += '\n';
}


// 6) When we console.log(result), we are asking for the value of the result variable which occurs via the execution of the loop.
console.log(result)