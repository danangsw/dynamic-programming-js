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

class DoubleLinkedList { 
    constructor() { 
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // Insert first node
    insertFirst(data) {
        const node = new Node(data, null, this.head);
        
        if (this.head) { 
            this.head.prev = node;
        }

        this.head = node;

        this.size++;
    };
    // Insert last node
    insertLast(data) { 
        // this.tail = new Node(data, this.tail, null);

        // this.size++;
    };
    // Insert first node
    // Insert at index ( 0 to N-1 node sizes)
    // Get at index
    // Remove at index
    // Clear all data
    // Print data
    // Print list data
    printHead(separator = ',') { 
        let current = this.head;
        let array = [];

        while (current) { 
            console.log(current);
            array.push(current.data);
            current = current.next;
        }

        console.log(array.join(separator));
    }

    printTail(separator = ',') { 
        let current = this.head;
        let array = [];

        while (current) { 
            console.log(current);
            array.push(current.data);
            current = current.prev;
        }

        console.log(array.join(separator));
    }

}

const dll = new DoubleLinkedList();
dll.insertFirst(10);
dll.insertFirst(20);
dll.insertFirst(30);
dll.insertFirst(40);
dll.insertFirst(50);
//console.log({ dll });
//dll.printHead();
dll.printTail();