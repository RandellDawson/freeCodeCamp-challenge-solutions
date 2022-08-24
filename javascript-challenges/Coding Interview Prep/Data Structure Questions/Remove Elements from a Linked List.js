/*
Data Structures: Remove Elements from a Linked List
The next important method that any implementation of a linked list will need is a remove method. This method should take the element we want to remove as an argument, and then search the list to find and remove the node that contains that element.

Whenever we remove a node from a linked list, it's important that we don't accidentally orphan the rest of the list in doing so. Recall that every node's next property points to the node that follows it in the list. If we're removing the middle element, say, we'll want to make sure that we have a connection from that element's previous node's next property to the middle element's next property (which is the next node in the list!)

This might sound really confusing, so let's return to the conga line example so we have a good conceptual model. Picture yourself in a conga line, and the person directly in front of you leaves the line. The person who just left the line no longer has her hands on anyone in line--and you no longer have your hands on the person that left. You step forward and put your hands on next person you see.

If the element we wish to remove is the head element, we reassign the head to the second node of the linked list.

Write a remove method that takes an element and removes it from the linked list.

Note

The length of the list should decrease by one every time an element is removed from the linked list.
*/

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        let current = head;

        while(current.next){
            current  = current.next;
        }
        current.next = node;
    }
    length++;
  };

  this.remove = function (element) {
    // Only change code below this line
    if (head.element === element) {
      head = head.next;
      return length--;
    }
    let previous = head;
    while (previous) {
      let current = previous.next;
      if (current) { // makes sure we are not at end where current.next would be null
        if (current.element === element) {
          previous.next = current.next;
          return length--;
        }
      }
      previous = current;
    }
    // Only change code above this line
  };
}

var test = new LinkedList();
test.add('cat');
test.add('dog');
 test.remove('cat');
 return test.head().element === 'dog'
