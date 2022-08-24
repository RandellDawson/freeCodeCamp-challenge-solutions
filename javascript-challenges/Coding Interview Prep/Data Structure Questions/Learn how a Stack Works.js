/* Learn how a Stack Works

You are probably familiar with stack of books on your table. You might have used the undo feature
in your computer. You are also used to hitting the back button on your phone to go back to the
previous view in your app.

You know what they all have in common? They all store the data in a way so that you can traverse
 backwards.

The topmost book in the stack was the one that was put there at the last. If you remove that book
from your stack's top, you would expose the book that was put there before the last book and so on.

If you think about it, in all the above examples, you are getting Last-In-First-Out type of service.
 We will try to mimic this with our code - create a similar data storage scheme with JS arrays and
 functions that we always get back first what we put there last.

Oh, and did I mention such data storage scheme is called Stack! In particular, we would have to
implement the push function that pushes JS object at the top of the stack; and pop function, that
removes the JS object that's at the top of the stack at the current moment.

Instructions

Here we have a stack of homework assignments represented as an array: BIO12 is at the base,
and PSY44 is at the top of the stack.

Remove the element on top of the stack, and Add CS50.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

var homeworkStack = ['BIO12','HIS80','MAT122','PSY44'];
// Only change code below this line
homeworkStack.pop();
homeworkStack.push('CS50');
