import { SingleLinkedList } from '../dsa/linked-list/sll2.js';

/**
 * Sorts a linked list in ascending order
 * - Recursively divide the linked list into sublist containing a single node
 * - Repeatedly merge the sublists to produce sorted sublists until one remains
 * Return a sorted linked list
 * Runs in O(kn log n)
 * @param {*} linkedlist 
 * @returns 
 */
function mergeSort(linkedlist) {
   
    if (linkedlist.size === 1)
        return linkedlist;
    else if (!linkedlist.head)
        return linkedlist;

    const list = splitList(linkedlist);

    // console.log("LEFT >>> ", list.left, list.left.size);
    // console.log("RIGHT >>> ", list.right, list.right.size);

    const left = mergeSort(list.left);
    const right = mergeSort(list.right);

    //return console.log({ left: left, right: right });
    return mergeSortList(left, right);
}

/**
 * Divide the unsorted linked list at midpoint into sublists
 * Take O(k log n)
 * @param {*} list 
 */
function splitList(list) { 
    let left, right;

    // return the empty linked list
    if (!list || !list.head) { 
        left = linkedlist;
        right = null;

        return { left, right };
    }

    const mid = Math.floor(list.size / 2);
    const midNode = list.getIndexAt(mid - 1);

    left = list;
    right = new SingleLinkedList();
    right.head = midNode.next;
    midNode.next = null;

    return { left, right };
}

/**
 * Merges two linked lists, sorting by data in nodes
 * Return a new merged list.
 * Runs in O(n)
 * @param {*} left 
 * @param {*} right 
 */
function mergeSortList(left, right) { 
    // merging left and right
    const merged = new SingleLinkedList();

    // Add fake head that remove later
    merged.insertFirst(0);

    // Set current to the head of the linked list
    let current = merged.head;

    // Obtain head nodes for left and right linked list
    let lHead = left.head;
    let rHead = right.head;

    // Iterate over left and right until reach the tail node
    // of either
    while (lHead || rHead)
    {
        // if the left head is null, we are pass the tail
        // Add the node from right to merged the linked list
        if (!lHead) {
            current.next = rHead;
            // Call next on right to set loop condition to false
            rHead = rHead.next;
        }
        // If the node right head is null. we pass the tail
        else if (!rHead) {
            current.next = lHead;
            lHead = lHead.next;
        }
        // Not either
        // Obtain node data to perform comparation operation
        else { 
            if (lHead.data < rHead.data) {
                current.next = lHead;
                lHead = lHead.next;
            }
            else { 
                current.next = rHead;
                rHead = rHead.next;
            }
        }
        // Move current to next node
        current = current.next;
    }
    // Discard fake head and set first merged node as head
    const head = merged.head.next;
    merged.head = head;

    return merged;
}

// Overall run O(n) times
function uniqueRandomNumbers(start, end, len) { 
    let list = [];
    let results = new SingleLinkedList();

    // O(n)
    for (let i = start; i <= end; i++) {
        list.push(i);
    }

    // Shuffle list - optimized
    // O(n)
    for (let i = list.length - 1; i > 0; i--) { 
        let j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }

    // O(n)
    list = list.slice(0, len);

    list.forEach((e) => { 
        results.insertLast(e);
    })

    return results;
}

// Drive code
for (let index = 2; index < 10; index++) {
    let sll = uniqueRandomNumbers(1, 21, index)
    sll.printListData();
    let sllSorted = mergeSort(sll);
    sllSorted.printListData();
    console.log('+++');
    sll.head = null;
    sllSorted.head = null;
}