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

  insertBefore(head, data, position) {
      if (!head) {
          head = new _Node(data);
      }
      else {
          let parent = null;
          let current = head;
          let index = 0;
      
          while (current && index < position) {
              parent = current;
              current = current.next;
              index++;
          }
  
          if (current) {
              // Insert node here, make the child current.
              var child = new _Node(current.data);
              child.next = current.next;
              
              current.data = data;
              current.next = child;
          }
          else {
              // Insert node at end of list.
              parent.next = new _Node(data);
          }
      }
      
      return head;
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

  console.log(list.head.next.next.next);
}

main();