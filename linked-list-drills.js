'use strict';


class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

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

  insertBefore(nextNode, item) {
    if (this.head === null) {
      this.insertFirst(item);
    }

    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== nextNode) ) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('item not on list');
      return;
    }

    prevNode.next = new _Node(item, currNode);
  }

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
  list.insertLast('Tauhida');
  list.remove('Starbuck')
  list.insertBefore('Tauhida', 'Kevin', 1);

  console.log(JSON.stringify(list));
}

main();