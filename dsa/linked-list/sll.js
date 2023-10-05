/**
 * Linked List
 * The dynamic data structure
 * Store elements sequntially but don't store the elements contiguously like an array.
 * Arrays:
 * - fixed size
 * - inefficient insertions and deletions
 * - random access
 * - may result in much memory waste
 * - sequential access is faster (elements in contiguously)
 *  
 * Linked List:
 * - dynamic size
 * - efficient insertions and deletions
 * - NO random access
 * - NO memory waste
 * - sequential access is slower (elements not in contiguously)
 * */

// Single Linked List

class Node { 
    constructor(data, next = null) { 
        this.data = data;
        this.next = next;
    }
}

class SingleLinkedList { 
    constructor() { 
        this.head = null;
        this.size = 0;
    }
    // Insert first node
    insertFirst(data) { 
        this.head = new Node(data, this.head);
        this.size++;
    }
    // Insert last node
    insertLast(data) {
        if (!this.head) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current = this.head;
        while (current.next) { 
            current = current.next;
        }
        current.next = node;
        this.size++;
    }
    // Insert at index ( 0 to N-1 node sizes)
    insertAt(data, index) { 
        if (index < 0) {
            return;
        }
        else if (index > (this.size - 1)) {
            return;
        }
        else if (index === 0) {
            this.insertFirst(data);
            return;
        } 
        else if (index === this.size) {
            this.insertLast(data);
            return;
        }
        else { 
            let current = this.head;
            let next = null;

            let i = 1;
            while (current) {
                if (i === index) { 
                    next = new Node(data, current.next);
                    break;
                }
                current = current.next;
                i++;
            }
            current.next = next;

            this.size++;
            return;
        }
    }
    // Get at index
    getDataAt(index) { 
        if (index < 0) {
            return undefined;
        }
        else if (index > (this.size - 1)) {
            return undefined;
        }

        let current = this.head;
        let next = null;
        let i = 0;
        while (current) {
            if (i === index) return current.data;
            current = current.next;
            i++;
        }
    }
    // Remove at index
    removeAt(index) { 
        if (index < 0) {
            return;
        }
        else if (index > (this.size - 1)) {
            return;
        }
        else if (index === 0) {
            this.head = this.head.next;
            this.size--
            return;
        } 

        let current = this.head;
        let next = null;
        let i = 1;
        while (current) {
            if (i === index) { 
                current.next = current?.next?.next;
                break;
            }
            current = current.next;
            i++;
        }
        this.size--;
        return;
    }
    // Clear list data
    clearData() {
        this.head = null;
        this.size = 0;
        return;
    }
    // Print list data
    printListData(separator = ',') { 
        let current = this.head;
        let array = [];

        while (current) { 
            array.push(current.data);
            current = current.next;
        }

        console.log(array.join(separator));
    }
}

const driveCode = () => { 
    const n1 = new Node(100);
    console.log(n1);
    
    const sll = new SingleLinkedList();
    // sll.insertFirst(200);
    // sll.insertFirst(300);
    sll.insertLast(600);
    sll.insertLast(500);
    sll.insertLast(400);
    sll.insertFirst(700);
    sll.insertLast(300);
    sll.insertLast(200);
    sll.insertLast(100);
    sll.insertFirst(800);
    sll.printListData(' - ');
    sll.insertAt(0, 4);
    console.log(sll);
    sll.printListData(' - ');
    console.log(sll.getDataAt(-1));
    console.log(sll.getDataAt(0));
    console.log(sll.getDataAt(4));
    console.log(sll.getDataAt(8));
    console.log(sll.getDataAt(9));
    sll.removeAt(0);
    // sll.removeAt(-1);
    // sll.removeAt(9);
    // sll.removeAt(8);
    // sll.removeAt(7);
    // sll.removeAt(6);
    // sll.removeAt(5);
    // sll.removeAt(4);
    // sll.removeAt(3);
    // sll.removeAt(2);
    // sll.removeAt(1);
    // sll.removeAt(0);
    console.log(sll);
    sll.clearData();
    console.log(sll);
    sll.insertLast(600);
    sll.insertFirst(800);
    console.log(sll);
    sll.printListData(' - ');    
}

export {
    SingleLinkedList
}