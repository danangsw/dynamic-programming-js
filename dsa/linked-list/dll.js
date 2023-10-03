/** 
 * A doubly linked list (DLL) contains an extra pointer, 
 * typically called the previous pointer, 
 * together with the next pointer and data which are there in a singly linked list. 
 * This allows for traversal in both directions (forward and backward).
 * 
 * https://www.geeksforgeeks.org/insertion-in-doubly-circular-linked-list/?ref=ml_lbp
*/

// Double Linked List

class Node { 
    constructor(data, prev = null, next = null) { 
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
};

class DoublyLinkedList { 
    constructor() { 
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // Insert first node
    insertFirst(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else { 
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.size++;
    };
    // Insert last node
    insertLast(data) { 
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else { 
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    };
    // Insert at index ( 0 to N-1 node sizes)
    insertAt(index, element) {
        if (index > (this.size - 1) || index < 0) {
            return;
        }
        else if (index === 0) { 
            this.insertFirst(element);
            return;
        }
        else if (index === (this.size - 1)) { 
            this.insertLast(element);
            return;
        }

        let node = new Node(element);
        let current = this.head;
        let previous = null;

        let i = 0;
        while (i++ < index) {
            previous = current;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        current.prev = node;
        node.prev = previous;

        this.size++;
        return;
    }
    // Get at index
    indexOf(index) {
        if (index > (this.size - 1) || index < 0) {
            return undefined;
        }

        let current = this.head;
        let i = 0;
        while (i++ < index) {
            current = current.next;
        }
        return current.data;
    }
    // Remove at index
    removeIndexOf(index) {
        console.log(index, this.size);
        if (index > (this.size - 1) || index < 0) {
            return;
        }
        else if (index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
        }
        else if (index === (this.size - 1)) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        else { 
            let current = this.head;
            let previous = null;
            let i = 0;
            while (i++ < index) { 
                previous = current;
                current = current.next;
            }
            // console.log({ previous, current });
            
            // link previous with current's next - skip it
            previous.next = current.next;
            current.next.prev = previous;
        }

        this.size--;
        return;
     }
    // Clear all data
    clearData() { 
        this.head = null;
        this.tail = null;
        this.size = 0;
    };
    // Print list data
    printFromHead(separator = ',') { 
        let current = this.head;
        let array = [];

        while (current) { 
            //console.log(current);
            array.push(current.data);
            current = current.next;
        }

        console.log(array.join(separator));
    };
    printFromTail(separator = ',') { 
        let current = this.tail;
        let array = [];

        while (current) { 
            //console.log(current);
            array.push(current.data);
            current = current.prev;
        }

        console.log(array.join(separator));
    };

}

const dll = new DoublyLinkedList();
dll.insertFirst(10);
dll.insertFirst(20);
dll.insertFirst(30);
dll.insertFirst(40);
dll.insertFirst(50);
dll.insertLast(60);
dll.insertLast(70);
dll.insertFirst(80);
dll.insertAt(-1, 0);
dll.insertAt(dll.size, 0);
dll.insertAt(0, 111);
dll.insertAt(8, 222);
dll.insertAt(5, 333);
console.log({ dll });
dll.printFromHead();
dll.printFromTail();
console.log(dll.indexOf(-1), dll.indexOf(0), dll.indexOf(5), dll.indexOf(dll.size - 1), dll.indexOf(dll.size));
// dll.clearData();
dll.removeIndexOf(5);
dll.removeIndexOf(0);
dll.removeIndexOf(dll.size-1);
console.log({ dll });
dll.printFromHead();
dll.printFromTail();