/* Create a Priority Queue Class

In this challenge you will be creating a Priority Queue. A Priority Queue is a special type of Queue
 with one primary difference, that you can set the priority in the queue as either high represented by
 0 or low represented by an integer greater than 0 during the enqueue process. Item priority will
 override the placement order: that is, an item enqueue with a higher priority than any preceding
 items will be moved to the front of the queue. If items have equal priority, then placement order
 will decide their dequeue order. For instance:

collection = [['taco',1]]

PriorityQueue.enqueue(['kitten', 1]);

console.log([...PriorityQueue])

// would be [['taco', 1], ['kitten', 1]]

// not [['kitten', 1], ['taco', 1]]

For this challenge, you will create an object called PriorityQueue. You will need to add an enqueue
method for adding items with a priority, a dequeue method for popping off the front item, a size
method to return the number of items in the queue, and finally an isEmpty method that will return
true or false if the queue is empty.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function PriorityQueue() {
    this.collection = [];
    this.printCollection = function() {
      (console.log(this.collection));
    };
    // Only change code below this line
    this.dequeue = () => this.collection.shift()[0];
    this.size = () => this.collection.length;
    this.front = () => this.collection[0];
    this.isEmpty = () => !this.collection.length;
    this.enqueue = function (item) {
      if (this.isEmpty()) return this.collection.push(item);
      let priority = item[1];
      for (let i=this.size()-1; i >= 0;) {
        if (priority < this.collection[i][1] && i !== 0)
          i--;
        else if (this.collection[i][1] > priority)
          return this.collection.splice(i,0,item);
        else
          return this.collection.splice(i+1,0,item);
      }
    };
    // Only change code above this line
}

/* Alternative way of writting using prototype functions.  This will be more memory
efficient, because each object instance will not have all the functions store inside them */
function PriorityQueue_v2() { this.collection = [];}
PriorityQueue.prototype.printCollection = function() { (console.log(this.collection));};
PriorityQueue.prototype.dequeue = function(){return this.collection.shift()[0];};
PriorityQueue.prototype.size = function(){return this.collection.length;};
PriorityQueue.prototype.front = function(){return this.collection[0];};
PriorityQueue.prototype.isEmpty = function(){return !this.collection.length;};
PriorityQueue.prototype.enqueue = function(item){
   if (this.isEmpty()) return this.collection.push(item);
   let priority = item[1];
   for (let i=this.size()-1; i >= 0;) {
   if (priority < this.collection[i][1] && i !== 0)
      i--;
   else if (this.collection[i][1] > priority)
      return this.collection.splice(i,0,item);
   else
      return this.collection.splice(i+1,0,item);
   }
};
