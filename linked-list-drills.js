'use strict';

// ===NODE CLASS===

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// ===LINKED LIST CLASS===

class LinkedList {

  // CONSTRUCTOR

  constructor() {
    this.head = null;
  }

  // INSERT FIRST

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  // INSERT LAST

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  // FIND

  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //check for the item
    while (currNode.value !== item) {
      //return null if end of the list
      //and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  // INSERT BEFORE

  insertBefore(targetNode, newNode) {

    if (this.head === null) {
      this.insertFirst(newNode);
    } else if (!this.head.next) {
      this.insertLast(newNode);
    }

    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== targetNode)) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('item not on list');
      return;
    }

    prevNode.next = new _Node(newNode, currNode);
  }

  // INSERT AFTER

  insertAfter(target, newValue) {

    if (this.head === null) {
      this.insertFirst(newValue);
    } else if (!this.head.next) {
      this.insertLast(newValue);
    }

    let currNode = this.head;
    let nextNode = this.head;
    while ((currNode.value !== target) && (currNode !== null)) {
      currNode = nextNode;
      nextNode = currNode.next;
    }
    let newItem = new _Node(newValue, nextNode);
    currNode.next = newItem;
  }

  // INSERT AT

  insertAt(newValue, position) {

    if (this.head === null) {
      this.insertFirst(newValue);
    } else if (!this.head.next) {
      this.insertLast(newValue);
    }

    let currNode = this.head;
    let previousNode = this.head;
    let counter = 0;

    while (counter !== position) {

      if (!currNode.next) this.insertLast(newValue);

      previousNode = currNode;
      currNode = currNode.next;
      counter++;
    }

    let newItem = new _Node(newValue);

    newItem.next = currNode;
    previousNode.next = newItem;

  }

  // REMOVE

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;

    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found on list');
      return;
    }
    previousNode.next = currNode.next;
  }
}

// ===MAIN FUNCTION===

const SLL = new LinkedList();

function main() {
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Helo');
  SLL.insertFirst('Tauhida');
  SLL.remove('Starbuck');
  SLL.insertBefore('Boomer', 'Athena');
  SLL.insertAfter('Helo', 'Hotdog');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  // console.log(JSON.stringify(SLL));
}

// ===SUPPLEMENTAL FUNCTIONS===

// DISPLAY

function display(list) {
  if (list.head) {
    console.log(list.head.value);
  } else {
    console.log('ain\'t no list boy');
  }
  let currNode = list.head;
  while (currNode.next !== null) {
    console.log(currNode.next.value);
    currNode = currNode.next;
  }
}

// SIZE

function size(list) {
  let counter = 0;
  if (list.head) {
    counter = 1;
  } else {
    console.log('ain\'t no list boy');
    return;
  }
  let currNode = list.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
    counter++;
  }

  console.log(counter);
  return counter;
}

// IS EMPTY

function isEmpty(list) {
  list.head ? console.log('no, the list is not empty') : console.log('yep, the list is empty');
}

// FIND PREVIOUS

function findPrevious(list, item) {
  if (!list.head) {
    return;
  }
  let currNode = list.head;
  let prevNode = list.head;
  while (currNode.value !== item) {
    prevNode = currNode;
    currNode = currNode.next;
  }
  console.log(prevNode.value);
  return prevNode.value;
}

// FIND LAST

function findLast(list) {
  if (!list.head) {
    return;
  }
  let currNode = list.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  console.log(currNode.value);
  return currNode.value;
}

// ===INTERVIEW QUESTIONS===

// MYSTERY PROGRAM

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

// What is it trying to do?
// This program removes duplicates from a linked list. 
// It will remove the 2nd and later occurrences of 
// the linked list - will not preserve the order of the list

// What is the runtime algorithm?
// O(n^2) - polynomial because it has a nest loop

// ~~~~~~~~~~

// REVERSE LIST
// O(n) - linear because it changes nodes one at a time
// ********

function reverseList(list) {
  if (!list.head) {
    return;
  }
  let currNode = list.head;
  let nextNode = null;
  let previousNode = null;
  while (currNode !== null) {
    nextNode = currNode.next;
    currNode.next = previousNode;
    previousNode = currNode;
    currNode = nextNode;
  }
  list.head = previousNode;
  console.log(JSON.stringify(list));
  return list;
}

// THIRD FROM THE END
// O(n) - linear because it checks nodes one at a time

function thirdFromTheEnd(list) {
  let currNode = list.head;
  while (currNode.next.next.next !== null) {
    currNode = currNode.next;
  }
  console.log(currNode);
  return currNode;
}

// MIDDLE OF A LIST
// O(n) - linear because the runtime increases in direct 
// proportion to the input

function middleOfAList(list) {
  let counter = 0;
  let currNode = list.head;
  while (currNode !== null) {
    currNode = currNode.next;
    counter++;
  }
  let middle = Math.floor(counter / 2);
  let counterTwo = 0;
  currNode = list.head;
  while (counterTwo !== middle) {
    currNode = currNode.next;
    counterTwo++;
  }
  console.log(currNode.value);
  return currNode;

  // if (!list.head) return;

  // let fast = list.head;
  // let slow = list.head;

  // while (fast !== null && fast.next !== null) {
  //   fast = fast.next.next;
  //   slow = slow.next;
  // }

  // console.log(slow.value);
}

// CYCLE IN A LIST
//

function cycle(list) {

}

// DOUBLY LINKED LIST
// 

function doublyLinkedList(list) {

}

// REVERSE A DLL
//

function reverseDLL(list) {

}

// ===INVOCATIONS===

main();
display(SLL);
// size(SLL);
// isEmpty(SLL);
// findPrevious(SLL, 'Boomer');
// findLast(SLL);
// reverseList(SLL);
// thirdFromTheEnd(SLL);
// middleOfAList(SLL);
cycle(SLL);
// doublyLinkedList(SLL);
// reverseDLL(SLL);