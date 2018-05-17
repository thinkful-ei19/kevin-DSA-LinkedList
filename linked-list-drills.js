'use strict';

// NODE CLASS

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// LINKED LIST CLASS

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

  insertAfter(target, newValue){

    if (this.head === null) {
      this.insertFirst(newValue);
    } else if (!this.head.next) {
      this.insertLast(newValue);
    }

    let currNode = this.head;
    let nextNode = this.head;
    while((currNode.value !== target) && (currNode !== null)){
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

function main() {
  let list = new LinkedList();

  list.insertFirst('Apollo');
  list.insertLast('Boomer');
  list.insertLast('Helo');
  list.insertLast('Husker');
  list.insertLast('Starbuck');
  list.insertFirst('Tauhida');
  list.remove('Starbuck');
  list.insertBefore('Boomer', 'Athena');
  list.insertAfter('Helo', 'Hotdog');
  list.insertAt('Kat', 3);
  list.remove('Tauhida');

  console.log(JSON.stringify(list));
}

main();